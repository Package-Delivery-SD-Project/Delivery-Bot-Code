#!/usr/bin/env python3

import rospy
from std_msgs.msg import String

def callback(data):
    rospy.loginfo("Message from Arduino: %s", data.data)  # Print the message

def listener():
    rospy.init_node('listener', anonymous=True)  # Initialize the ROS node
    rospy.Subscriber("chatter", String, callback)  # Subscribe to the "chatter" topic
    rospy.spin()  # Keep the node running

if __name__ == '__main__':
    listener()
