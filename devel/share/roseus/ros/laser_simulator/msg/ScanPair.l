;; Auto-generated. Do not edit!


(when (boundp 'laser_simulator::ScanPair)
  (if (not (find-package "LASER_SIMULATOR"))
    (make-package "LASER_SIMULATOR"))
  (shadow 'ScanPair (find-package "LASER_SIMULATOR")))
(unless (find-package "LASER_SIMULATOR::SCANPAIR")
  (make-package "LASER_SIMULATOR::SCANPAIR"))

(in-package "ROS")
;;//! \htmlinclude ScanPair.msg.html
(if (not (find-package "GEOMETRY_MSGS"))
  (ros::roseus-add-msgs "geometry_msgs"))
(if (not (find-package "SENSOR_MSGS"))
  (ros::roseus-add-msgs "sensor_msgs"))


(defclass laser_simulator::ScanPair
  :super ros::object
  :slots (_scan1 _scan2 _pose1 _pose2 _transform ))

(defmethod laser_simulator::ScanPair
  (:init
   (&key
    ((:scan1 __scan1) (instance sensor_msgs::LaserScan :init))
    ((:scan2 __scan2) (instance sensor_msgs::LaserScan :init))
    ((:pose1 __pose1) (instance geometry_msgs::Pose :init))
    ((:pose2 __pose2) (instance geometry_msgs::Pose :init))
    ((:transform __transform) (instance geometry_msgs::Transform :init))
    )
   (send-super :init)
   (setq _scan1 __scan1)
   (setq _scan2 __scan2)
   (setq _pose1 __pose1)
   (setq _pose2 __pose2)
   (setq _transform __transform)
   self)
  (:scan1
   (&rest __scan1)
   (if (keywordp (car __scan1))
       (send* _scan1 __scan1)
     (progn
       (if __scan1 (setq _scan1 (car __scan1)))
       _scan1)))
  (:scan2
   (&rest __scan2)
   (if (keywordp (car __scan2))
       (send* _scan2 __scan2)
     (progn
       (if __scan2 (setq _scan2 (car __scan2)))
       _scan2)))
  (:pose1
   (&rest __pose1)
   (if (keywordp (car __pose1))
       (send* _pose1 __pose1)
     (progn
       (if __pose1 (setq _pose1 (car __pose1)))
       _pose1)))
  (:pose2
   (&rest __pose2)
   (if (keywordp (car __pose2))
       (send* _pose2 __pose2)
     (progn
       (if __pose2 (setq _pose2 (car __pose2)))
       _pose2)))
  (:transform
   (&rest __transform)
   (if (keywordp (car __transform))
       (send* _transform __transform)
     (progn
       (if __transform (setq _transform (car __transform)))
       _transform)))
  (:serialization-length
   ()
   (+
    ;; sensor_msgs/LaserScan _scan1
    (send _scan1 :serialization-length)
    ;; sensor_msgs/LaserScan _scan2
    (send _scan2 :serialization-length)
    ;; geometry_msgs/Pose _pose1
    (send _pose1 :serialization-length)
    ;; geometry_msgs/Pose _pose2
    (send _pose2 :serialization-length)
    ;; geometry_msgs/Transform _transform
    (send _transform :serialization-length)
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; sensor_msgs/LaserScan _scan1
       (send _scan1 :serialize s)
     ;; sensor_msgs/LaserScan _scan2
       (send _scan2 :serialize s)
     ;; geometry_msgs/Pose _pose1
       (send _pose1 :serialize s)
     ;; geometry_msgs/Pose _pose2
       (send _pose2 :serialize s)
     ;; geometry_msgs/Transform _transform
       (send _transform :serialize s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; sensor_msgs/LaserScan _scan1
     (send _scan1 :deserialize buf ptr-) (incf ptr- (send _scan1 :serialization-length))
   ;; sensor_msgs/LaserScan _scan2
     (send _scan2 :deserialize buf ptr-) (incf ptr- (send _scan2 :serialization-length))
   ;; geometry_msgs/Pose _pose1
     (send _pose1 :deserialize buf ptr-) (incf ptr- (send _pose1 :serialization-length))
   ;; geometry_msgs/Pose _pose2
     (send _pose2 :deserialize buf ptr-) (incf ptr- (send _pose2 :serialization-length))
   ;; geometry_msgs/Transform _transform
     (send _transform :deserialize buf ptr-) (incf ptr- (send _transform :serialization-length))
   ;;
   self)
  )

(setf (get laser_simulator::ScanPair :md5sum-) "8b8f9cfc12d41180f8cbbd1515a00b5e")
(setf (get laser_simulator::ScanPair :datatype-) "laser_simulator/ScanPair")
(setf (get laser_simulator::ScanPair :definition-)
      "sensor_msgs/LaserScan scan1 
sensor_msgs/LaserScan scan2
geometry_msgs/Pose pose1
geometry_msgs/Pose pose2
geometry_msgs/Transform transform # Transformation from scan1 to scan2


================================================================================
MSG: sensor_msgs/LaserScan
# Single scan from a planar laser range-finder
#
# If you have another ranging device with different behavior (e.g. a sonar
# array), please find or create a different message, since applications
# will make fairly laser-specific assumptions about this data

Header header            # timestamp in the header is the acquisition time of 
                         # the first ray in the scan.
                         #
                         # in frame frame_id, angles are measured around 
                         # the positive Z axis (counterclockwise, if Z is up)
                         # with zero angle being forward along the x axis
                         
float32 angle_min        # start angle of the scan [rad]
float32 angle_max        # end angle of the scan [rad]
float32 angle_increment  # angular distance between measurements [rad]

float32 time_increment   # time between measurements [seconds] - if your scanner
                         # is moving, this will be used in interpolating position
                         # of 3d points
float32 scan_time        # time between scans [seconds]

float32 range_min        # minimum range value [m]
float32 range_max        # maximum range value [m]

float32[] ranges         # range data [m] (Note: values < range_min or > range_max should be discarded)
float32[] intensities    # intensity data [device-specific units].  If your
                         # device does not provide intensities, please leave
                         # the array empty.

================================================================================
MSG: std_msgs/Header
# Standard metadata for higher-level stamped data types.
# This is generally used to communicate timestamped data 
# in a particular coordinate frame.
# 
# sequence ID: consecutively increasing ID 
uint32 seq
#Two-integer timestamp that is expressed as:
# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
# time-handling sugar is provided by the client library
time stamp
#Frame this data is associated with
string frame_id

================================================================================
MSG: geometry_msgs/Pose
# A representation of pose in free space, composed of position and orientation. 
Point position
Quaternion orientation

================================================================================
MSG: geometry_msgs/Point
# This contains the position of a point in free space
float64 x
float64 y
float64 z

================================================================================
MSG: geometry_msgs/Quaternion
# This represents an orientation in free space in quaternion form.

float64 x
float64 y
float64 z
float64 w

================================================================================
MSG: geometry_msgs/Transform
# This represents the transform between two coordinate frames in free space.

Vector3 translation
Quaternion rotation

================================================================================
MSG: geometry_msgs/Vector3
# This represents a vector in free space. 
# It is only meant to represent a direction. Therefore, it does not
# make sense to apply a translation to it (e.g., when applying a 
# generic rigid transformation to a Vector3, tf2 will only apply the
# rotation). If you want your data to be translatable too, use the
# geometry_msgs/Point message instead.

float64 x
float64 y
float64 z
")



(provide :laser_simulator/ScanPair "8b8f9cfc12d41180f8cbbd1515a00b5e")


