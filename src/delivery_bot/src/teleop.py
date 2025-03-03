#!/usr/bin/env python3
import rospy
from geometry_msgs.msg import Twist
from sensor_msgs.msg import Joy

class JoystickToCmdVel:
    def __init__(self):
        rospy.init_node('joystick_to_cmd_vel')

        # Publish to /cmd_vel_teleop instead of /cmd_vel
        self.cmd_vel_pub = rospy.Publisher('/cmd_vel_teleop', Twist, queue_size=10, latch=True)
        self.joy_sub = rospy.Subscriber('/package_joy', Joy, self.joy_callback)

        self.twist = Twist()

        self.linear_axis = rospy.get_param('~linear_axis', 1)
        self.angular_axis = rospy.get_param('~angular_axis', 0)
        self.linear_scale = rospy.get_param('~linear_scale', 1.0)
        self.angular_scale = rospy.get_param('~angular_scale', 1.0)

        rospy.on_shutdown(self.stop_robot)

    def joy_callback(self, joy_msg):
        self.twist.linear.x = self.linear_scale * joy_msg.axes[self.linear_axis]
        self.twist.angular.z = self.angular_scale * joy_msg.axes[self.angular_axis]
        self.cmd_vel_pub.publish(self.twist)

    def stop_robot(self):
        stop_twist = Twist()
        stop_twist.linear.x = 0.0
        stop_twist.angular.z = 0.0
        for _ in range(5):
            self.cmd_vel_pub.publish(stop_twist)
            rospy.sleep(0.1)

if __name__ == '__main__':
    try:
        joystick_to_cmd_vel = JoystickToCmdVel()
        rospy.spin()
    except rospy.ROSInterruptException:
        pass
