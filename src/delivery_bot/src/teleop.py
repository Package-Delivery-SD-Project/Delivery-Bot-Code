#!/usr/bin/env python3
import rospy
from geometry_msgs.msg import Twist
from sensor_msgs.msg import Joy
 
class JoystickToCmdVel:
    def __init__(self):
        # Initialize the ROS node
        rospy.init_node('joystick_to_cmd_vel')
        # Publisher to the /cmd_vel topic
        self.cmd_vel_pub = rospy.Publisher('/cmd_vel', Twist, queue_size=10)
 
        # Subscriber to the /joy topic (for joystick input)
        self.joy_sub = rospy.Subscriber('/joy', Joy, self.joy_callback)
 
        # Twist message to store velocities
        self.twist = Twist()
 
        # Parameters for mapping joystick axes to velocities
        self.linear_axis = rospy.get_param('~linear_axis', 1)  # Joystick forward/backward (usually axis 1)
        self.angular_axis = rospy.get_param('~angular_axis', 0)  # Joystick left/right (usually axis 0)
        self.linear_scale = rospy.get_param('~linear_scale', 1.0)  # Scale for linear speed
        self.angular_scale = rospy.get_param('~angular_scale', 1.0)  # Scale for angular speed
 
    def joy_callback(self, joy_msg):
        # Map joystick input to velocities
        self.twist.linear.x = self.linear_scale * joy_msg.axes[self.linear_axis]
        self.twist.angular.z = self.angular_scale * joy_msg.axes[self.angular_axis]
        
        # Log the values of linear.x and angular.z to the terminal
        rospy.loginfo(f"linear.x: {self.twist.linear.x}, angular.z: {self.twist.angular.z}")
 
        # Publish the Twist message
        self.cmd_vel_pub.publish(self.twist)
 
if __name__ == '__main__':
    try:
        joystick_to_cmd_vel = JoystickToCmdVel()
        rospy.spin()  # Keep the node running
    except rospy.ROSInterruptException:
        pass

