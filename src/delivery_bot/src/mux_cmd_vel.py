#!/usr/bin/env python3

import rospy
from geometry_msgs.msg import Twist
from std_msgs.msg import String

class CmdVelSwitcher:
    def __init__(self):
        rospy.init_node("cmd_vel_switcher", anonymous=True)

        # Default source: teleop
        self.active_source = "teleop"

        # Publisher to /cmd_vel
        self.cmd_vel_pub = rospy.Publisher("/cmd_vel", Twist, queue_size=10)

        # Subscribers to teleop and move_base topics
        self.teleop_sub = rospy.Subscriber("/cmd_vel_teleop", Twist, self.teleop_callback)
        self.move_base_sub = rospy.Subscriber("/cmd_vel_move_base", Twist, self.move_base_callback)

        # Subscriber to listen for mode changes
        self.mode_sub = rospy.Subscriber("/cmd_vel_source", String, self.mode_callback)

        rospy.loginfo("CmdVelSwitcher is running. Publish 'teleop' or 'move_base' to /cmd_vel_source to switch modes.")
        rospy.spin()

    def mode_callback(self, msg):
        """Switch active source based on topic input."""
        if msg.data in ["teleop", "move_base"]:
            self.active_source = msg.data
            rospy.loginfo(f"Switched to: {self.active_source}")
        else:
            rospy.logwarn("Invalid source. Use 'teleop' or 'move_base'.")

    def teleop_callback(self, msg):
        """Forward /cmd_vel_teleop if active."""
        if self.active_source == "teleop":
            self.cmd_vel_pub.publish(msg)

    def move_base_callback(self, msg):
        """Forward /cmd_vel_move_base if active."""
        if self.active_source == "move_base":
            self.cmd_vel_pub.publish(msg)

if __name__ == "__main__":
    try:
        CmdVelSwitcher()
    except rospy.ROSInterruptException:
        pass
