;; Auto-generated. Do not edit!


(when (boundp 'mesh80211s::MeshStations)
  (if (not (find-package "MESH80211S"))
    (make-package "MESH80211S"))
  (shadow 'MeshStations (find-package "MESH80211S")))
(unless (find-package "MESH80211S::MESHSTATIONS")
  (make-package "MESH80211S::MESHSTATIONS"))

(in-package "ROS")
;;//! \htmlinclude MeshStations.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass mesh80211s::MeshStations
  :super ros::object
  :slots (_header _stations ))

(defmethod mesh80211s::MeshStations
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:stations __stations) ())
    )
   (send-super :init)
   (setq _header __header)
   (setq _stations __stations)
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:stations
   (&rest __stations)
   (if (keywordp (car __stations))
       (send* _stations __stations)
     (progn
       (if __stations (setq _stations (car __stations)))
       _stations)))
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; mesh80211s/MeshStation[] _stations
    (apply #'+ (send-all _stations :serialization-length)) 4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; mesh80211s/MeshStation[] _stations
     (write-long (length _stations) s)
     (dolist (elem _stations)
       (send elem :serialize s)
       )
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; mesh80211s/MeshStation[] _stations
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _stations (let (r) (dotimes (i n) (push (instance mesh80211s::MeshStation :init) r)) r))
     (dolist (elem- _stations)
     (send elem- :deserialize buf ptr-) (incf ptr- (send elem- :serialization-length))
     ))
   ;;
   self)
  )

(setf (get mesh80211s::MeshStations :md5sum-) "fa4702b9dc887621257c88e89f258184")
(setf (get mesh80211s::MeshStations :datatype-) "mesh80211s/MeshStations")
(setf (get mesh80211s::MeshStations :definition-)
      "Header header
mesh80211s/MeshStation[] stations
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
MSG: mesh80211s/MeshStation
string mac
string device
uint32 inactive_time
uint32 rx_bytes
uint32 rx_packets
uint32 tx_bytes
uint32 tx_packets
int32 signal
uint16 tx_bitrate
uint16 llid
uint16 plid
string plink

")



(provide :mesh80211s/MeshStations "fa4702b9dc887621257c88e89f258184")


