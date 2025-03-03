#!/usr/bin/env python3
import rospy
from geometry_msgs.msg import Twist

class CmdVelMux:
    def __init__(self):
        rospy.init_node('cmd_vel_mux', anonymous=True)

        # Publishers
        self.cmd_vel_pub = rospy.Publisher('/cmd_vel', Twist, queue_size=10)

        # Subscribers
        self.teleop_sub = rospy.Subscriber('/cmd_vel_teleop', Twist, self.teleop_callback)
        self.auto_sub = rospy.Subscriber('/cmd_vel_move_base', Twist, self.auto_callback)

        # Active source
        self.active_source = rospy.get_param('/mux_mode', 'teleop')  # Default to teleop

        # Twist messages
        self.teleop_cmd = Twist()
        self.auto_cmd = Twist()

        # Timer for publishing
        self.timer = rospy.Timer(rospy.Duration(0.05), self.publish_cmd_vel)

    def teleop_callback(self, msg):
        self.teleop_cmd = msg

    def auto_callback(self, msg):
        self.auto_cmd = msg

    def publish_cmd_vel(self, event):
        if self.active_source == "teleop":
            self.cmd_vel_pub.publish(self.teleop_cmd)
        else:
            self.cmd_vel_pub.publish(self.auto_cmd)

    def run(self):
        rospy.spin()

if __name__ == '__main__':
    try:
        mux = CmdVelMux()
        mux.run()
    except rospy.ROSInterruptException:
        pass
