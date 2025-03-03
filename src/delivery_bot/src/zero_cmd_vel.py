#!/usr/bin/env python3
import rospy
from geometry_msgs.msg import Twist

def publish_zero_twist():
    rospy.init_node('zero_cmd_vel_publisher', anonymous=True)
    pub = rospy.Publisher('/cmd_vel', Twist, queue_size=10)
    zero_twist = Twist()

    # Publish zero twist for 2 seconds
    start_time = rospy.Time.now()
    rate = rospy.Rate(10)  # 10Hz
    while rospy.Time.now() - start_time < rospy.Duration(2):
        pub.publish(zero_twist)
        rate.sleep()

if __name__ == '__main__':
    try:
        publish_zero_twist()
    except rospy.ROSInterruptException:
        pass
