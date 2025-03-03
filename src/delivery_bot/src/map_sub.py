#!/usr/bin/env python3
import rospy
from nav_msgs.msg import OccupancyGrid

def map_callback(msg):
    rospy.loginfo(f"Received a map update with resolution: {msg.info.resolution}")
    rospy.loginfo(f"Map size: {msg.info.width}x{msg.info.height}")
    rospy.loginfo(f"Origin: ({msg.info.origin.position.x}, {msg.info.origin.position.y})")

def map_subscriber():
    rospy.init_node('map_subscriber', anonymous=True)
    rospy.Subscriber('/map', OccupancyGrid, map_callback)
    rospy.loginfo("Map subscriber node started, waiting for messages...")
    rospy.spin()

if __name__ == '__main__':
    try:
        map_subscriber()
    except rospy.ROSInterruptException:
        rospy.loginfo("Map subscriber node terminated.")