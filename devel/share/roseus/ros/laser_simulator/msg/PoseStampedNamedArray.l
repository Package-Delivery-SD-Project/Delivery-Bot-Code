;; Auto-generated. Do not edit!


(when (boundp 'laser_simulator::PoseStampedNamedArray)
  (if (not (find-package "LASER_SIMULATOR"))
    (make-package "LASER_SIMULATOR"))
  (shadow 'PoseStampedNamedArray (find-package "LASER_SIMULATOR")))
(unless (find-package "LASER_SIMULATOR::POSESTAMPEDNAMEDARRAY")
  (make-package "LASER_SIMULATOR::POSESTAMPEDNAMEDARRAY"))

(in-package "ROS")
;;//! \htmlinclude PoseStampedNamedArray.msg.html


(defclass laser_simulator::PoseStampedNamedArray
  :super ros::object
  :slots (_poses ))

(defmethod laser_simulator::PoseStampedNamedArray
  (:init
   (&key
    ((:poses __poses) ())
    )
   (send-super :init)
   (setq _poses __poses)
   self)
  (:poses
   (&rest __poses)
   (if (keywordp (car __poses))
       (send* _poses __poses)
     (progn
       (if __poses (setq _poses (car __poses)))
       _poses)))
  (:serialization-length
   ()
   (+
    ;; laser_simulator/PoseStampedNamed[] _poses
    (apply #'+ (send-all _poses :serialization-length)) 4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; laser_simulator/PoseStampedNamed[] _poses
     (write-long (length _poses) s)
     (dolist (elem _poses)
       (send elem :serialize s)
       )
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; laser_simulator/PoseStampedNamed[] _poses
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _poses (let (r) (dotimes (i n) (push (instance laser_simulator::PoseStampedNamed :init) r)) r))
     (dolist (elem- _poses)
     (send elem- :deserialize buf ptr-) (incf ptr- (send elem- :serialization-length))
     ))
   ;;
   self)
  )

(setf (get laser_simulator::PoseStampedNamedArray :md5sum-) "3b8df607d1aa74fc669faf952f38163b")
(setf (get laser_simulator::PoseStampedNamedArray :datatype-) "laser_simulator/PoseStampedNamedArray")
(setf (get laser_simulator::PoseStampedNamedArray :definition-)
      "laser_simulator/PoseStampedNamed[] poses

================================================================================
MSG: laser_simulator/PoseStampedNamed
std_msgs/Header header
string child_frame_id
geometry_msgs/Pose pose

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

")



(provide :laser_simulator/PoseStampedNamedArray "3b8df607d1aa74fc669faf952f38163b")


