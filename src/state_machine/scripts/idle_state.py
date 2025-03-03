import rospy
import smach
import geometry_msgs.msg
import std_msgs.msg  
import config

class idle(smach.State):
    def __init__(self):
        smach.State.__init__(self, outcomes=['goal_recv', 'low_bat_idle', 'err', 'teleop_enable'])
        self.goal_received = False
        self.teleop_enabled = False
       
        

    def goal_callback(self, msg):
        """Callback for receiving a goal point."""
        self.goal_received = True

    def teleop_callback(self, msg):
        """Callback for teleop enable."""
        if msg.data:  
            self.teleop_enabled = True

    def execute(self, userdata):
        """Execution loop for the Idle state."""
        rospy.loginfo("Entering IDLE state...")
        rospy.Publisher('/current_state', std_msgs.msg.String, queue_size=1).publish(self.__class__.__name__)

        # Set up subscribers
        sub_goal = rospy.Subscriber('/goal_point', geometry_msgs.msg.PoseStamped, self.goal_callback)
        sub_teleop = rospy.Subscriber('/teleop_enable', std_msgs.msg.Bool, self.teleop_callback)

        # Wait until a goal is received or teleop mode is enabled
        rate = rospy.Rate(config.REFRESH_RATE)
        while not rospy.is_shutdown():
            if self.goal_received:
                sub_goal.unregister()
                sub_teleop.unregister()
                self.goal_received = False  # Reset flag
                rospy.loginfo('Goal Received')
                return 'goal_recv'

            if self.teleop_enabled:
                sub_goal.unregister()
                sub_teleop.unregister()
                self.teleop_enabled = False  # Reset flag
                rospy.loginfo('Teleoperation Enabled')
                return 'teleop_enable'

            rate.sleep()  # Sleep to prevent busy waiting

        rospy.loginfo("ROS Shutdown detected, returning to IDLE")
        return 'err'
