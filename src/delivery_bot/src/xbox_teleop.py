#!/usr/bin/env python3

import rospy
from sensor_msgs.msg import Joy
from std_msgs.msg import Float64

def callback(data):
    # Create Float64 messages for linear and angular velocities
    linear_msg = Float64()
    angular_msg = Float64()
    
    # Use the left stick Y-axis for linear velocity (forward/backward)
    linear_msg.data = data.axes[1]  # Assuming left stick Y-axis is for linear velocity
    
    # Use the left stick X-axis for angular velocity (left/right turn)
    angular_msg.data = data.axes[0]  # Assuming left stick X-axis is for angular velocity
    
    # Publish the linear and angular values to separate topics
    linear_pub.publish(linear_msg)
    angular_pub.publish(angular_msg)
    
    # Print the values to the terminal for debugging
    rospy.loginfo("Linear Velocity (x): %.2f, Angular Velocity (z): %.2f", linear_msg.data, angular_msg.data)

# Initialize the ROS node
rospy.init_node('xbox_teleop')

# Subscribe to the joystick topic
rospy.Subscriber('joy', Joy, callback)

# Publishers for the linear and angular topics (Float64 messages)
linear_pub = rospy.Publisher('linear', Float64, queue_size=10)
angular_pub = rospy.Publisher('angular', Float64, queue_size=10)

# Keep the node running
rospy.spin()
