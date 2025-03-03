#!/usr/bin/env python
 
import roslib
import rospy

import time
 


# smach imports :D
import smach
import smach_ros
from smach import State
from smach_ros import IntrospectionServer   


from actionlib_msgs.msg import GoalStatus
import geometry_msgs
from actionlib_msgs.msg import GoalStatusArray
from geometry_msgs.msg import PoseStamped
from geometry_msgs.msg import Pose

 
#0: init state
class init(smach.State):
    def __init__(self):
        smach.State.__init__(self, outcomes=['ready','err'])
        self.counter = 0
 
    def execute(self, userdata):
        rospy.loginfo('Executing state 0, init')
        return 'ready'
 

 
 
#1: idle state
# do this
class idle(smach.State):
    def __init__(self):
        smach.State.__init__(self, outcomes=['dev','goal_recv','low_bat_idle','err'])
        self.goal_received = False
        
    def goal_callback(self, msg):
        # Called when a new goal point is received
        self.goal_received = True
        
    def execute(self, userdata):
        # Set up a subscriber for the goal point topic
        sub = rospy.Subscriber('/goal_point', geometry_msgs.msg.PoseStamped, self.goal_callback)
        
        # Wait until a goal is received
        while not self.goal_received and not rospy.is_shutdown():
            rospy.sleep(0.1)  # Small sleep to prevent busy waiting
        
        # Unsubscribe to clean up
        sub.unregister()
        
        # Reset the flag
        self.goal_received = False
        rospy.loginfo('Goal Recieved')
        # Transition to goal_recv state
        return 'goal_recv'
 
 
#template
class move_base_state(State):
    def __init__(self, outcomes):
        # Initialize smach.State with the provided outcomes
        State.__init__(self, outcomes=outcomes)

        # Initialize attributes
        self.goal_status = None

        # Subscribe to goal status and goal topic
        self.goal_status_sub = rospy.Subscriber('/move_base/status', GoalStatusArray, self.goal_status_callback)

    
    def goal_status_callback(self, msg):
        if msg.status_list:  # Check if there are statuses
            # Get the latest goal status
            latest_status = msg.status_list[-1]
            self.goal_status = latest_status.status
            rospy.loginfo(f"Goal status updated: {self.goal_status}")
        else:
            rospy.loginfo("No goal status available.")

    def goal_callback(self, msg):
        # Store the goal coordinates from the message
        self.x_goal = msg.position.x
        self.y_goal = msg.position.y
        rospy.loginfo(f"Goal set to: x={self.x_goal}, y={self.y_goal}")

    def goal_reached(self):
        # Return True if the goal status indicates success
        return self.goal_status == 3

    def check_low_battery(self):
        # Placeholder for low battery logic
        return False

    def check_fatal_collision(self):
        # Placeholder for collision detection logic
        return False

    def cleanup(self, exit_code):
        rospy.loginfo("Performing cleanup...")
        return exit_code

    def execute(self, userdata):
        rospy.loginfo("Executing base move state...")
        self.start_time = time.time()

        try:
            while not rospy.is_shutdown():
                elapsed_time = time.time() - self.start_time
                if elapsed_time > 1000:  # Timeout after 1000 seconds
                    rospy.loginfo('Timeout reached, exiting')
                    return 'err'

                if self.goal_reached():
                    return 'dest_reached'

                if self.check_low_battery():
                    return 'low_bat_move'

                if self.check_fatal_collision():
                    return 'fatal_col'

                rospy.sleep(0.05)

        except Exception as e:
            rospy.logerr(f"Error in state: {e}")
            return 'err'
#100: move_to_goal state
# when goal point topic updated go to this
# kill drv lo on exit
# move_to_goal state
class move_to_goal(move_base_state):
    def __init__(self):
        # Initialize the base class with its outcomes
        super().__init__(outcomes=['dest_reached', 'low_bat_move', 'fatal_col', 'err'])

        # Subscriber for goal point
        self.goal_sub = rospy.Subscriber("/goal_point", Pose, self.goal_callback)
        self.x_goal = 0
        self.y_goal = 0

        # Set default goal parameters
        rospy.set_param('~x_goal', self.x_goal)
        rospy.set_param('~y_goal', self.y_goal)

    def execute(self, userdata):
        rospy.loginfo('Executing state move_to_goal')
        return super().execute(userdata)

 
 
# move_to_home state
class move_to_home(move_base_state):
    def __init__(self):
        super().__init__(outcomes=['dest_reached', 'fatal_col', 'err'])
        self.goal_sub = rospy.Subscriber("/home_point", Pose, super().goal_callback)
        self.x_goal = 0
        self.y_goal = 0
 
        rospy.set_param('~x_goal', self.x_goal)
        rospy.set_param('~y_goal', self.y_goal)
 
    def execute(self, userdata):
        rospy.loginfo('Executing state move_to_home')
        return super().execute(userdata)
 
 
#101: wait_at_goal state
# wait for 15 seconds
# wait_at_goal state
# wait for 15 seconds
class wait_at_goal(smach.State):
    def __init__(self):
        smach.State.__init__(self, outcomes=['door_opened', 'timer_expire', 'low_bat_move', 'err'])

    def execute(self, userdata):
        # Initialize start time when the state is executed
        start_time = time.time()

        try:
            while not rospy.is_shutdown():
                elapsed_time = time.time() - start_time

                if elapsed_time > 10:  # Timeout after 5 seconds
                    rospy.loginfo('Timeout reached in wait_at_goal, moving')
                    return 'door_opened'

                rospy.sleep(0.05)

        except Exception as e:
            rospy.logerr(f"Error in state: {e}")
            return 'err'



 
#104: package_door_opened state
# todo
class package_door_opened(smach.State):
    def __init__(self):
        smach.State.__init__(self, outcomes=['door_closed','timer_expire_door_open','low_bat_move','err'])
 
    def execute(self, userdata):
        return 'door_closed'
 
 
#200: teleop state
class teleop(smach.State):
    def __init__(self):
        smach.State.__init__(self, outcomes=['teleop_leave','fatal_col','err'])
 
    def execute(self, userdata):
        return 'err'
 

 
#1000: error state
class error(smach.State):
    def __init__(self):
        smach.State.__init__(self, outcomes=['reset'])
 
    def execute(self, userdata):
        return 'reset'
 
 
#1100: kill switch state
class kill_switch(smach.State):
    def __init__(self):
        smach.State.__init__(self, outcomes=['reset'])
 
    def execute(self, userdata):
        return 'reset'
 
def main():
    rospy.init_node('smach_state_machine')
    

    pub = rospy.Publisher('goal_point', Pose, queue_size=10)
    rate = rospy.Rate(1)  # Publish once per second

    # Create a Pose message
    pose = Pose()
    pose.position.x = 0.0
    pose.position.y = 0.0
    pose.position.z = 0.0
    pose.orientation.x = 0.0
    pose.orientation.y = 0.0
    pose.orientation.z = 0.0
    pose.orientation.w = 1.0

    # Publish the message for a few seconds
    for _ in range(2):
        pub.publish(pose)
        rate.sleep()



    # Create a SMACH state machine
    sm = smach.StateMachine(outcomes=['done'])
 

    rospy.loginfo(f"Starting!")
    # Open the container
    with sm:
        # Add states to the container
        smach.StateMachine.add('init', init(),
                               transitions={'ready':'idle', 'err':'error'})
 
        smach.StateMachine.add('idle', idle(),
                               transitions={'dev':'teleop','goal_recv':'move_to_goal', 'low_bat_idle':'error','err':'error'})
 
        smach.StateMachine.add('move_to_goal', move_to_goal(),
                               transitions={'dest_reached':'wait_at_goal','low_bat_move':'move_to_home', 'fatal_col':'kill_switch','err':'error'})
 
        smach.StateMachine.add('wait_at_goal', wait_at_goal(),
                               transitions={'door_opened':'package_door_opened','low_bat_move':'move_to_home','timer_expire':'move_to_goal', 'err':'error'})
 
        smach.StateMachine.add('package_door_opened', package_door_opened(),
                               transitions={'door_closed':'move_to_home','timer_expire_door_open':'error','low_bat_move':'move_to_home', 'err':'error'})
 
        smach.StateMachine.add('move_to_home', move_to_home(),
                               transitions={'dest_reached':'idle','fatal_col':'kill_switch', 'err':'error'})
        
        smach.StateMachine.add('teleop', teleop(),
                               transitions={'teleop_leave':'idle','fatal_col':'kill_switch', 'err':'error'})
 
 
        smach.StateMachine.add('error', error(),
                               transitions={'reset':'init'})
 
        smach.StateMachine.add('kill_switch', kill_switch(),
                               transitions={'reset':'init'})
 
    sis = smach_ros.IntrospectionServer('server_name', sm, '/SM_ROOT')

    sis.start()
    # Execute SMACH plan
    outcome = sm.execute()
    rospy.loginfo(f"Starting! {outcome}")
    rospy.spin()

    sis.stop()
  
if __name__ == '__main__':
    try:
        main()
    except rospy.ROSInterruptException:
        rospy.loginfo("State machine interrupted before completion.")
