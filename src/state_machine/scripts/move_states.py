#!/usr/bin/env python
import smach
from smach import State
import rospy
import time
import subprocess
from actionlib_msgs.msg import GoalStatusArray
from geometry_msgs.msg import Pose
from std_msgs.msg import Bool, String
import config
import rospy
import time
import actionlib
import subprocess
from smach import State
from std_msgs.msg import String
from move_base_msgs.msg import MoveBaseAction, MoveBaseGoal
from actionlib_msgs.msg import GoalStatusArray
from actionlib_msgs.msg import GoalStatus
from geometry_msgs.msg import PoseStamped
# Base class for movement states
class move_base_state(State):
    def __init__(self):
        # Initialize smach.State with the provided outcomes
        State.__init__(self, outcomes=['dest_reached', 'low_bat_move', 'fatal_col', 'err'])

        # Initialize attributes
        self.goal_status = None
        self.x_goal = None
        self.y_goal = None

        # Persistent publisher
        self.pub = rospy.Publisher('/current_state', String, queue_size=1)

        # Subscribe to goal status
        self.goal_status_sub = rospy.Subscriber('/move_base/status', GoalStatusArray, self.goal_status_callback)

        # Move base action client is now initialized in `execute()`
        self.client = None

    def goal_status_callback(self, msg):
        if msg.status_list:  # Check if there are statuses
            # Get the latest goal status
            latest_status = msg.status_list[-1]
            self.goal_status = latest_status.status
            rospy.loginfo(f"Goal status updated: {self.goal_status}")
        else:
            rospy.loginfo("No goal status available.")

    def send_goal(self, x, y):
        """ Sends a goal to move_base """
        if not self.client:
            rospy.logerr("Action client is not initialized!")
            return
        
        goal = MoveBaseGoal()
        goal.target_pose.header.frame_id = "map"
        goal.target_pose.header.stamp = rospy.Time.now()
        goal.target_pose.pose.position.x = x
        goal.target_pose.pose.position.y = y
        goal.target_pose.pose.orientation.w = 1.0  # Default orientation

        rospy.loginfo(f"Sending goal: x={x}, y={y}")
        self.client.send_goal(goal)

    def goal_reached(self):
        """ Check if move_base has reached the goal """
        return self.client.get_state() == GoalStatus.SUCCEEDED if self.client else False

    def check_low_battery(self):
        return False  # Placeholder for battery check logic

    def check_fatal_collision(self):
        return False  # Placeholder for collision detection logic

    def execute(self, userdata):
        rospy.loginfo("Executing move_base state")

        # Initialize the move_base action client inside execute()
        if not self.client:
            rospy.loginfo("Initializing move_base action client...")
            self.client = actionlib.SimpleActionClient('move_base', MoveBaseAction)
            self.client.wait_for_server()
            rospy.loginfo("Connected to move_base action server.")

        # Start navigation
        self.send_goal(self.x_goal, self.y_goal)
        rate = rospy.Rate(config.REFRESH_RATE)
        start_time = time.time()

        try:
            while not rospy.is_shutdown():
                elapsed_time = time.time() - start_time
                if elapsed_time > 1000:  # Timeout after 1000 seconds
                    rospy.loginfo('Timeout reached, exiting')
                    self.client.cancel_goal()
                    return 'err'

                if self.goal_reached():
                    rospy.loginfo("Goal reached successfully!")
                    return 'dest_reached'

                if self.check_low_battery():
                    rospy.loginfo("Low battery detected, aborting mission.")
                    self.client.cancel_goal()
                    return 'low_bat_move'

                if self.check_fatal_collision():  ra
                    rospy.loginfo("Fatal collision detected, stopping robot.")
                    self.client.cancel_goal()
                    return 'fatal_col'

                rate.sleep()

        except Exception as e:
            rospy.logerr(f"Error in state: {e}")
            return 'err'


# move_to_goal state
class move_to_goal(move_base_state):
    def __init__(self):
        super().__init__()  # Now correctly calls move_base_state's __init__

        # Persistent publisher
        self.pub = rospy.Publisher('/current_state', String, queue_size=1)

        # Subscriber for goal point
        self.goal_sub = rospy.Subscriber("/goal_point", Pose, self.goal_callback)
        self.x_goal = 0
        self.y_goal = 0

        rospy.set_param('~x_goal', self.x_goal)
        rospy.set_param('~y_goal', self.y_goal)

class move_to_home(move_base_state):
    def __init__(self):
        super().__init__(outcomes=['dest_reached', 'fatal_col', 'err'])  # Now correctly calls move_base_state's __init__

        # Persistent publisher
        self.pub = rospy.Publisher('/current_state', String, queue_size=1)

        # Subscriber for home point
        self.goal_sub = rospy.Subscriber("/home_point", Pose, self.goal_callback)
        self.x_goal = 0
        self.y_goal = 0

        rospy.set_param('~x_goal', self.x_goal)
        rospy.set_param('~y_goal', self.y_goal)

# teleop state
class teleop(smach.State):
    def __init__(self):
        smach.State.__init__(self, outcomes=['teleop_leave', 'fatal_col', 'err'])
        self.teleop_disable = False

        # Persistent publishers
        self.pub_state = rospy.Publisher('/current_state', String, queue_size=1)
        self.pub_teleop_enable = rospy.Publisher('/teleop_enable', Bool, queue_size=1)
        self.pub_teleop_disable = rospy.Publisher('/teleop_disable', Bool, queue_size=1)

        # Set up subscribers
        self.sub_teleop_disable = rospy.Subscriber('/teleop_disable', Bool, self.teleop_disable_callback)

        # Ensure teleop is disabled initially
        rospy.sleep(0.1)
        self.pub_teleop_enable.publish(False)

    def teleop_disable_callback(self, msg):
        self.teleop_disable = msg.data

    def execute(self, userdata):
        rospy.loginfo("Starting Teleoperation Mode")
        self.pub_state.publish(self.__class__.__name__)  # Publish state name

        rate = rospy.Rate(config.REFRESH_RATE)

        try:
            # Launch the teleop launch file
            self.process = subprocess.Popen(["roslaunch", "delivery_bot", "teleop.launch"])

            while not rospy.is_shutdown():
                if self.teleop_disable:
                    rospy.loginfo("Teleoperation Mode Disabled, Exiting...")
                    self.process.terminate()
                    return 'teleop_leave'

                rate.sleep()

        except Exception as e:
            rospy.logerr(f"Error launching teleop: {e}")
            return 'err'

        finally:
            rospy.sleep(1)  # Allow the subscriber to process the final message
            self.pub_teleop_disable.publish(False)

        return 'err'  # If an unexpected error occurs
