#!/usr/bin/env python

import rospy
import time

# SMACH imports
import smach
import smach_ros
from smach_ros import IntrospectionServer   

from actionlib_msgs.msg import GoalStatusArray
from geometry_msgs.msg import Pose
from move_states import move_to_home, move_to_goal, teleop
from idle_state import idle
import std_msgs.msg  

# 0: init state
class init(smach.State):
    def __init__(self):
        smach.State.__init__(self, outcomes=['ready', 'err'])

        # Ensure rospy is initialized
        if not rospy.core.is_initialized():
            rospy.init_node('smach_state_machine', anonymous=True)

        # Publisher with latch=True to keep last message available for new subscribers
        self.pub = rospy.Publisher('/current_state', std_msgs.msg.String, queue_size=1, latch=True)

    def execute(self, userdata):
        rospy.loginfo('Executing state: init')

        # Sleep to allow subscribers to connect
        rospy.sleep(1)  

        # Publish the state
        self.pub.publish("init")
        rospy.loginfo("Published 'init' to /current_state")
        
        rospy.sleep(1)  # Allow time for message to be processed

        # Transition to idle
        rospy.loginfo("Transitioning from 'init' to 'idle'")
        return 'ready'
 
# 101: wait_at_goal state
class wait_at_goal(smach.State):
    def __init__(self):
        smach.State.__init__(self, outcomes=['door_opened', 'timer_expire', 'low_bat_move', 'err'])
        self.pub = rospy.Publisher('/current_state', std_msgs.msg.String, queue_size=1, latch=True)

    def execute(self, userdata):
        rospy.loginfo("Executing state: wait_at_goal")
        self.pub.publish(self.__class__.__name__)
        start_time = time.time()

        try:
            while not rospy.is_shutdown():
                elapsed_time = time.time() - start_time

                if elapsed_time > 10:  # Timeout after 10 seconds
                    rospy.loginfo('Timeout reached in wait_at_goal, moving')
                    return 'door_opened'

                rospy.sleep(0.05)

        except Exception as e:
            rospy.logerr(f"Error in state: {e}")
            return 'err'

# 104: package_door_opened state
class package_door_opened(smach.State):
    def __init__(self):
        smach.State.__init__(self, outcomes=['door_closed', 'timer_expire_door_open', 'low_bat_move', 'err'])
        self.pub = rospy.Publisher('/current_state', std_msgs.msg.String, queue_size=1, latch=True)

    def execute(self, userdata):
        rospy.loginfo("Executing state: package_door_opened")
        self.pub.publish(self.__class__.__name__)
        return 'door_closed'

# 1000: error state
class error(smach.State):
    def __init__(self):
        smach.State.__init__(self, outcomes=['reset'])
        self.pub = rospy.Publisher('/current_state', std_msgs.msg.String, queue_size=1, latch=True)

    def execute(self, userdata):
        rospy.loginfo("Executing state: error")
        self.pub.publish(self.__class__.__name__)
        rospy.sleep(1)
        return 'reset'
 
# 1100: kill switch state
class kill_switch(smach.State):
    def __init__(self):
        smach.State.__init__(self, outcomes=['reset'])
        self.pub = rospy.Publisher('/current_state', std_msgs.msg.String, queue_size=1, latch=True)

    def execute(self, userdata):
        rospy.loginfo("Executing state: kill_switch")
        self.pub.publish(self.__class__.__name__)
        return 'reset'
 
def main():
    rospy.init_node('smach_state_machine', anonymous=True)
    
    rospy.loginfo("Initializing ROS Publishers...")
    pub = rospy.Publisher('goal_point', Pose, queue_size=10)
    rate = rospy.Rate(1)  # Publish once per second

    # Create and publish a Pose message
    pose = Pose()
    pose.position.x = 0.0
    pose.position.y = 0.0
    pose.position.z = 0.0
    pose.orientation.x = 0.0
    pose.orientation.y = 0.0
    pose.orientation.z = 0.0
    pose.orientation.w = 1.0

    for _ in range(2):
        rospy.loginfo(f"Publishing initial goal: {pose.position.x}, {pose.position.y}")
        pub.publish(pose)
        rate.sleep()

    # Create a SMACH state machine
    sm = smach.StateMachine(outcomes=['done'])

    rospy.loginfo("We log here")
    with sm:
        rospy.loginfo("Adding 'init' state...")
        smach.StateMachine.add('init', init(),
                            transitions={'ready': 'idle', 'err': 'error'})

        rospy.loginfo("Adding 'idle' state...")
        smach.StateMachine.add('idle', idle(),
                            transitions={'teleop_enable': 'teleop', 'goal_recv': 'move_to_goal', 
                                        'low_bat_idle': 'error', 'err': 'error'})

        rospy.loginfo("Adding 'move_to_goal' state...")
        smach.StateMachine.add('move_to_goal', move_to_goal(),
                            transitions={'dest_reached': 'wait_at_goal', 'low_bat_move': 'move_to_home', 
                                        'fatal_col': 'kill_switch', 'err': 'error'})

        rospy.loginfo("Adding 'wait_at_goal' state...")
        smach.StateMachine.add('wait_at_goal', wait_at_goal(),
                            transitions={'door_opened': 'package_door_opened', 'low_bat_move': 'move_to_home', 
                                        'timer_expire': 'move_to_goal', 'err': 'error'})

        rospy.loginfo("Adding 'package_door_opened' state...")
        smach.StateMachine.add('package_door_opened', package_door_opened(),
                            transitions={'door_closed': 'move_to_home', 'timer_expire_door_open': 'error', 
                                        'low_bat_move': 'move_to_home', 'err': 'error'})

        rospy.loginfo("Adding 'move_to_home' state...")
        smach.StateMachine.add('move_to_home', move_to_home(),
                            transitions={'dest_reached': 'idle', 'fatal_col': 'kill_switch', 'err': 'error'})
        
        rospy.loginfo("Adding 'teleop' state...")
        smach.StateMachine.add('teleop', teleop(),
                            transitions={'teleop_leave': 'idle', 'fatal_col': 'kill_switch', 'err': 'error'})

        rospy.loginfo("Adding 'error' state...")
        smach.StateMachine.add('error', error(),
                            transitions={'reset': 'init'})

        rospy.loginfo("Adding 'kill_switch' state...")
        smach.StateMachine.add('kill_switch', kill_switch(),
                            transitions={'reset': 'init'})

    rospy.loginfo("Finished adding states!")

    rospy.loginfo("But no log here")
    rospy.loginfo("Starting State Machine!")

    
 
    # Start Introspection Server for debugging
    #sis = smach_ros.IntrospectionServer('server_name', sm, '/SM_ROOT')
    #sis.start()

    rospy.loginfo("Starting SMACH execution...")
    outcome = sm.execute()
    rospy.loginfo(f"State Machine Finished with Outcome: {outcome}")

    rospy.spin()
    sis.stop()

if __name__ == '__main__':
    try:
        main()
    except rospy.ROSInterruptException:
        rospy.loginfo("State machine interrupted before completion.")
