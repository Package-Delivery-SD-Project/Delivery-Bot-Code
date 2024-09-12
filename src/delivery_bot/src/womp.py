#!/usr/bin/env python3

import rospy
from std_msgs.msg import Empty

def toggle_led():
    # Initialize the ROS node
    rospy.init_node('toggle_led_publisher', anonymous=True)
    
    # Create a publisher for the 'toggle_led' topic with message type std_msgs/Empty
    pub = rospy.Publisher('toggle_led', Empty, queue_size=10)
    
    # Create an Empty message
    empty_msg = Empty()
    
    # Publish the message once
    rospy.loginfo("Publishing Empty message to toggle_led topic")
    pub.publish(empty_msg)
    
    # Sleep for a short time to ensure the message gets sent
    rospy.sleep(1)

if __name__ == '__main__':
    try:
        toggle_led()
    except rospy.ROSInterruptException:
        pass

