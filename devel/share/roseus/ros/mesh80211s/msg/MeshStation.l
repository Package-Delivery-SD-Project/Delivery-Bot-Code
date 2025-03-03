;; Auto-generated. Do not edit!


(when (boundp 'mesh80211s::MeshStation)
  (if (not (find-package "MESH80211S"))
    (make-package "MESH80211S"))
  (shadow 'MeshStation (find-package "MESH80211S")))
(unless (find-package "MESH80211S::MESHSTATION")
  (make-package "MESH80211S::MESHSTATION"))

(in-package "ROS")
;;//! \htmlinclude MeshStation.msg.html


(defclass mesh80211s::MeshStation
  :super ros::object
  :slots (_mac _device _inactive_time _rx_bytes _rx_packets _tx_bytes _tx_packets _signal _tx_bitrate _llid _plid _plink ))

(defmethod mesh80211s::MeshStation
  (:init
   (&key
    ((:mac __mac) "")
    ((:device __device) "")
    ((:inactive_time __inactive_time) 0)
    ((:rx_bytes __rx_bytes) 0)
    ((:rx_packets __rx_packets) 0)
    ((:tx_bytes __tx_bytes) 0)
    ((:tx_packets __tx_packets) 0)
    ((:signal __signal) 0)
    ((:tx_bitrate __tx_bitrate) 0)
    ((:llid __llid) 0)
    ((:plid __plid) 0)
    ((:plink __plink) "")
    )
   (send-super :init)
   (setq _mac (string __mac))
   (setq _device (string __device))
   (setq _inactive_time (round __inactive_time))
   (setq _rx_bytes (round __rx_bytes))
   (setq _rx_packets (round __rx_packets))
   (setq _tx_bytes (round __tx_bytes))
   (setq _tx_packets (round __tx_packets))
   (setq _signal (round __signal))
   (setq _tx_bitrate (round __tx_bitrate))
   (setq _llid (round __llid))
   (setq _plid (round __plid))
   (setq _plink (string __plink))
   self)
  (:mac
   (&optional __mac)
   (if __mac (setq _mac __mac)) _mac)
  (:device
   (&optional __device)
   (if __device (setq _device __device)) _device)
  (:inactive_time
   (&optional __inactive_time)
   (if __inactive_time (setq _inactive_time __inactive_time)) _inactive_time)
  (:rx_bytes
   (&optional __rx_bytes)
   (if __rx_bytes (setq _rx_bytes __rx_bytes)) _rx_bytes)
  (:rx_packets
   (&optional __rx_packets)
   (if __rx_packets (setq _rx_packets __rx_packets)) _rx_packets)
  (:tx_bytes
   (&optional __tx_bytes)
   (if __tx_bytes (setq _tx_bytes __tx_bytes)) _tx_bytes)
  (:tx_packets
   (&optional __tx_packets)
   (if __tx_packets (setq _tx_packets __tx_packets)) _tx_packets)
  (:signal
   (&optional __signal)
   (if __signal (setq _signal __signal)) _signal)
  (:tx_bitrate
   (&optional __tx_bitrate)
   (if __tx_bitrate (setq _tx_bitrate __tx_bitrate)) _tx_bitrate)
  (:llid
   (&optional __llid)
   (if __llid (setq _llid __llid)) _llid)
  (:plid
   (&optional __plid)
   (if __plid (setq _plid __plid)) _plid)
  (:plink
   (&optional __plink)
   (if __plink (setq _plink __plink)) _plink)
  (:serialization-length
   ()
   (+
    ;; string _mac
    4 (length _mac)
    ;; string _device
    4 (length _device)
    ;; uint32 _inactive_time
    4
    ;; uint32 _rx_bytes
    4
    ;; uint32 _rx_packets
    4
    ;; uint32 _tx_bytes
    4
    ;; uint32 _tx_packets
    4
    ;; int32 _signal
    4
    ;; uint16 _tx_bitrate
    2
    ;; uint16 _llid
    2
    ;; uint16 _plid
    2
    ;; string _plink
    4 (length _plink)
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; string _mac
       (write-long (length _mac) s) (princ _mac s)
     ;; string _device
       (write-long (length _device) s) (princ _device s)
     ;; uint32 _inactive_time
       (write-long _inactive_time s)
     ;; uint32 _rx_bytes
       (write-long _rx_bytes s)
     ;; uint32 _rx_packets
       (write-long _rx_packets s)
     ;; uint32 _tx_bytes
       (write-long _tx_bytes s)
     ;; uint32 _tx_packets
       (write-long _tx_packets s)
     ;; int32 _signal
       (write-long _signal s)
     ;; uint16 _tx_bitrate
       (write-word _tx_bitrate s)
     ;; uint16 _llid
       (write-word _llid s)
     ;; uint16 _plid
       (write-word _plid s)
     ;; string _plink
       (write-long (length _plink) s) (princ _plink s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; string _mac
     (let (n) (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4) (setq _mac (subseq buf ptr- (+ ptr- n))) (incf ptr- n))
   ;; string _device
     (let (n) (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4) (setq _device (subseq buf ptr- (+ ptr- n))) (incf ptr- n))
   ;; uint32 _inactive_time
     (setq _inactive_time (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; uint32 _rx_bytes
     (setq _rx_bytes (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; uint32 _rx_packets
     (setq _rx_packets (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; uint32 _tx_bytes
     (setq _tx_bytes (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; uint32 _tx_packets
     (setq _tx_packets (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; int32 _signal
     (setq _signal (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; uint16 _tx_bitrate
     (setq _tx_bitrate (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _llid
     (setq _llid (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _plid
     (setq _plid (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; string _plink
     (let (n) (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4) (setq _plink (subseq buf ptr- (+ ptr- n))) (incf ptr- n))
   ;;
   self)
  )

(setf (get mesh80211s::MeshStation :md5sum-) "0af11ca5c838b248549e689ebe504453")
(setf (get mesh80211s::MeshStation :datatype-) "mesh80211s/MeshStation")
(setf (get mesh80211s::MeshStation :definition-)
      "string mac
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



(provide :mesh80211s/MeshStation "0af11ca5c838b248549e689ebe504453")


