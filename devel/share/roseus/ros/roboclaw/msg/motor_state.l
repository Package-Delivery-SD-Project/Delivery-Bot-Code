;; Auto-generated. Do not edit!


(when (boundp 'roboclaw::motor_state)
  (if (not (find-package "ROBOCLAW"))
    (make-package "ROBOCLAW"))
  (shadow 'motor_state (find-package "ROBOCLAW")))
(unless (find-package "ROBOCLAW::MOTOR_STATE")
  (make-package "ROBOCLAW::MOTOR_STATE"))

(in-package "ROS")
;;//! \htmlinclude motor_state.msg.html


(defclass roboclaw::motor_state
  :super ros::object
  :slots (_left_duty_sp _left_duty _right_duty_sp _right_duty _left_qpps_sp _left_qpps _right_qpps_sp _right_qpps _left_sp _left _right_sp _right _v_sp _v _w_sp _w _left_pid_pe _left_pid_ie _left_pid_de _right_pid_pe _right_pid_ie _right_pid_de ))

(defmethod roboclaw::motor_state
  (:init
   (&key
    ((:left_duty_sp __left_duty_sp) 0.0)
    ((:left_duty __left_duty) 0.0)
    ((:right_duty_sp __right_duty_sp) 0.0)
    ((:right_duty __right_duty) 0.0)
    ((:left_qpps_sp __left_qpps_sp) 0)
    ((:left_qpps __left_qpps) 0)
    ((:right_qpps_sp __right_qpps_sp) 0)
    ((:right_qpps __right_qpps) 0)
    ((:left_sp __left_sp) 0.0)
    ((:left __left) 0.0)
    ((:right_sp __right_sp) 0.0)
    ((:right __right) 0.0)
    ((:v_sp __v_sp) 0.0)
    ((:v __v) 0.0)
    ((:w_sp __w_sp) 0.0)
    ((:w __w) 0.0)
    ((:left_pid_pe __left_pid_pe) 0.0)
    ((:left_pid_ie __left_pid_ie) 0.0)
    ((:left_pid_de __left_pid_de) 0.0)
    ((:right_pid_pe __right_pid_pe) 0.0)
    ((:right_pid_ie __right_pid_ie) 0.0)
    ((:right_pid_de __right_pid_de) 0.0)
    )
   (send-super :init)
   (setq _left_duty_sp (float __left_duty_sp))
   (setq _left_duty (float __left_duty))
   (setq _right_duty_sp (float __right_duty_sp))
   (setq _right_duty (float __right_duty))
   (setq _left_qpps_sp (round __left_qpps_sp))
   (setq _left_qpps (round __left_qpps))
   (setq _right_qpps_sp (round __right_qpps_sp))
   (setq _right_qpps (round __right_qpps))
   (setq _left_sp (float __left_sp))
   (setq _left (float __left))
   (setq _right_sp (float __right_sp))
   (setq _right (float __right))
   (setq _v_sp (float __v_sp))
   (setq _v (float __v))
   (setq _w_sp (float __w_sp))
   (setq _w (float __w))
   (setq _left_pid_pe (float __left_pid_pe))
   (setq _left_pid_ie (float __left_pid_ie))
   (setq _left_pid_de (float __left_pid_de))
   (setq _right_pid_pe (float __right_pid_pe))
   (setq _right_pid_ie (float __right_pid_ie))
   (setq _right_pid_de (float __right_pid_de))
   self)
  (:left_duty_sp
   (&optional __left_duty_sp)
   (if __left_duty_sp (setq _left_duty_sp __left_duty_sp)) _left_duty_sp)
  (:left_duty
   (&optional __left_duty)
   (if __left_duty (setq _left_duty __left_duty)) _left_duty)
  (:right_duty_sp
   (&optional __right_duty_sp)
   (if __right_duty_sp (setq _right_duty_sp __right_duty_sp)) _right_duty_sp)
  (:right_duty
   (&optional __right_duty)
   (if __right_duty (setq _right_duty __right_duty)) _right_duty)
  (:left_qpps_sp
   (&optional __left_qpps_sp)
   (if __left_qpps_sp (setq _left_qpps_sp __left_qpps_sp)) _left_qpps_sp)
  (:left_qpps
   (&optional __left_qpps)
   (if __left_qpps (setq _left_qpps __left_qpps)) _left_qpps)
  (:right_qpps_sp
   (&optional __right_qpps_sp)
   (if __right_qpps_sp (setq _right_qpps_sp __right_qpps_sp)) _right_qpps_sp)
  (:right_qpps
   (&optional __right_qpps)
   (if __right_qpps (setq _right_qpps __right_qpps)) _right_qpps)
  (:left_sp
   (&optional __left_sp)
   (if __left_sp (setq _left_sp __left_sp)) _left_sp)
  (:left
   (&optional __left)
   (if __left (setq _left __left)) _left)
  (:right_sp
   (&optional __right_sp)
   (if __right_sp (setq _right_sp __right_sp)) _right_sp)
  (:right
   (&optional __right)
   (if __right (setq _right __right)) _right)
  (:v_sp
   (&optional __v_sp)
   (if __v_sp (setq _v_sp __v_sp)) _v_sp)
  (:v
   (&optional __v)
   (if __v (setq _v __v)) _v)
  (:w_sp
   (&optional __w_sp)
   (if __w_sp (setq _w_sp __w_sp)) _w_sp)
  (:w
   (&optional __w)
   (if __w (setq _w __w)) _w)
  (:left_pid_pe
   (&optional __left_pid_pe)
   (if __left_pid_pe (setq _left_pid_pe __left_pid_pe)) _left_pid_pe)
  (:left_pid_ie
   (&optional __left_pid_ie)
   (if __left_pid_ie (setq _left_pid_ie __left_pid_ie)) _left_pid_ie)
  (:left_pid_de
   (&optional __left_pid_de)
   (if __left_pid_de (setq _left_pid_de __left_pid_de)) _left_pid_de)
  (:right_pid_pe
   (&optional __right_pid_pe)
   (if __right_pid_pe (setq _right_pid_pe __right_pid_pe)) _right_pid_pe)
  (:right_pid_ie
   (&optional __right_pid_ie)
   (if __right_pid_ie (setq _right_pid_ie __right_pid_ie)) _right_pid_ie)
  (:right_pid_de
   (&optional __right_pid_de)
   (if __right_pid_de (setq _right_pid_de __right_pid_de)) _right_pid_de)
  (:serialization-length
   ()
   (+
    ;; float64 _left_duty_sp
    8
    ;; float64 _left_duty
    8
    ;; float64 _right_duty_sp
    8
    ;; float64 _right_duty
    8
    ;; int32 _left_qpps_sp
    4
    ;; int32 _left_qpps
    4
    ;; int32 _right_qpps_sp
    4
    ;; int32 _right_qpps
    4
    ;; float64 _left_sp
    8
    ;; float64 _left
    8
    ;; float64 _right_sp
    8
    ;; float64 _right
    8
    ;; float64 _v_sp
    8
    ;; float64 _v
    8
    ;; float64 _w_sp
    8
    ;; float64 _w
    8
    ;; float64 _left_pid_pe
    8
    ;; float64 _left_pid_ie
    8
    ;; float64 _left_pid_de
    8
    ;; float64 _right_pid_pe
    8
    ;; float64 _right_pid_ie
    8
    ;; float64 _right_pid_de
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; float64 _left_duty_sp
       (sys::poke _left_duty_sp (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _left_duty
       (sys::poke _left_duty (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _right_duty_sp
       (sys::poke _right_duty_sp (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _right_duty
       (sys::poke _right_duty (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; int32 _left_qpps_sp
       (write-long _left_qpps_sp s)
     ;; int32 _left_qpps
       (write-long _left_qpps s)
     ;; int32 _right_qpps_sp
       (write-long _right_qpps_sp s)
     ;; int32 _right_qpps
       (write-long _right_qpps s)
     ;; float64 _left_sp
       (sys::poke _left_sp (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _left
       (sys::poke _left (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _right_sp
       (sys::poke _right_sp (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _right
       (sys::poke _right (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _v_sp
       (sys::poke _v_sp (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _v
       (sys::poke _v (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _w_sp
       (sys::poke _w_sp (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _w
       (sys::poke _w (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _left_pid_pe
       (sys::poke _left_pid_pe (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _left_pid_ie
       (sys::poke _left_pid_ie (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _left_pid_de
       (sys::poke _left_pid_de (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _right_pid_pe
       (sys::poke _right_pid_pe (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _right_pid_ie
       (sys::poke _right_pid_ie (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _right_pid_de
       (sys::poke _right_pid_de (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; float64 _left_duty_sp
     (setq _left_duty_sp (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _left_duty
     (setq _left_duty (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _right_duty_sp
     (setq _right_duty_sp (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _right_duty
     (setq _right_duty (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; int32 _left_qpps_sp
     (setq _left_qpps_sp (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; int32 _left_qpps
     (setq _left_qpps (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; int32 _right_qpps_sp
     (setq _right_qpps_sp (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; int32 _right_qpps
     (setq _right_qpps (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; float64 _left_sp
     (setq _left_sp (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _left
     (setq _left (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _right_sp
     (setq _right_sp (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _right
     (setq _right (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _v_sp
     (setq _v_sp (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _v
     (setq _v (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _w_sp
     (setq _w_sp (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _w
     (setq _w (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _left_pid_pe
     (setq _left_pid_pe (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _left_pid_ie
     (setq _left_pid_ie (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _left_pid_de
     (setq _left_pid_de (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _right_pid_pe
     (setq _right_pid_pe (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _right_pid_ie
     (setq _right_pid_ie (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _right_pid_de
     (setq _right_pid_de (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(setf (get roboclaw::motor_state :md5sum-) "10585f422ced85d5c376eb502ea760c3")
(setf (get roboclaw::motor_state :datatype-) "roboclaw/motor_state")
(setf (get roboclaw::motor_state :definition-)
      "float64 left_duty_sp
float64 left_duty
float64 right_duty_sp
float64 right_duty
int32 left_qpps_sp
int32 left_qpps
int32 right_qpps_sp
int32 right_qpps
float64 left_sp
float64 left
float64 right_sp
float64 right
float64 v_sp
float64 v
float64 w_sp
float64 w
float64 left_pid_pe
float64 left_pid_ie
float64 left_pid_de
float64 right_pid_pe
float64 right_pid_ie
float64 right_pid_de

")



(provide :roboclaw/motor_state "10585f422ced85d5c376eb502ea760c3")


