// Auto-generated. Do not edit!

// (in-package laser_simulator.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let geometry_msgs = _finder('geometry_msgs');
let sensor_msgs = _finder('sensor_msgs');

//-----------------------------------------------------------

class ScanPair {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.scan1 = null;
      this.scan2 = null;
      this.pose1 = null;
      this.pose2 = null;
      this.transform = null;
    }
    else {
      if (initObj.hasOwnProperty('scan1')) {
        this.scan1 = initObj.scan1
      }
      else {
        this.scan1 = new sensor_msgs.msg.LaserScan();
      }
      if (initObj.hasOwnProperty('scan2')) {
        this.scan2 = initObj.scan2
      }
      else {
        this.scan2 = new sensor_msgs.msg.LaserScan();
      }
      if (initObj.hasOwnProperty('pose1')) {
        this.pose1 = initObj.pose1
      }
      else {
        this.pose1 = new geometry_msgs.msg.Pose();
      }
      if (initObj.hasOwnProperty('pose2')) {
        this.pose2 = initObj.pose2
      }
      else {
        this.pose2 = new geometry_msgs.msg.Pose();
      }
      if (initObj.hasOwnProperty('transform')) {
        this.transform = initObj.transform
      }
      else {
        this.transform = new geometry_msgs.msg.Transform();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type ScanPair
    // Serialize message field [scan1]
    bufferOffset = sensor_msgs.msg.LaserScan.serialize(obj.scan1, buffer, bufferOffset);
    // Serialize message field [scan2]
    bufferOffset = sensor_msgs.msg.LaserScan.serialize(obj.scan2, buffer, bufferOffset);
    // Serialize message field [pose1]
    bufferOffset = geometry_msgs.msg.Pose.serialize(obj.pose1, buffer, bufferOffset);
    // Serialize message field [pose2]
    bufferOffset = geometry_msgs.msg.Pose.serialize(obj.pose2, buffer, bufferOffset);
    // Serialize message field [transform]
    bufferOffset = geometry_msgs.msg.Transform.serialize(obj.transform, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type ScanPair
    let len;
    let data = new ScanPair(null);
    // Deserialize message field [scan1]
    data.scan1 = sensor_msgs.msg.LaserScan.deserialize(buffer, bufferOffset);
    // Deserialize message field [scan2]
    data.scan2 = sensor_msgs.msg.LaserScan.deserialize(buffer, bufferOffset);
    // Deserialize message field [pose1]
    data.pose1 = geometry_msgs.msg.Pose.deserialize(buffer, bufferOffset);
    // Deserialize message field [pose2]
    data.pose2 = geometry_msgs.msg.Pose.deserialize(buffer, bufferOffset);
    // Deserialize message field [transform]
    data.transform = geometry_msgs.msg.Transform.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += sensor_msgs.msg.LaserScan.getMessageSize(object.scan1);
    length += sensor_msgs.msg.LaserScan.getMessageSize(object.scan2);
    return length + 168;
  }

  static datatype() {
    // Returns string type for a message object
    return 'laser_simulator/ScanPair';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '8b8f9cfc12d41180f8cbbd1515a00b5e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    sensor_msgs/LaserScan scan1 
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
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new ScanPair(null);
    if (msg.scan1 !== undefined) {
      resolved.scan1 = sensor_msgs.msg.LaserScan.Resolve(msg.scan1)
    }
    else {
      resolved.scan1 = new sensor_msgs.msg.LaserScan()
    }

    if (msg.scan2 !== undefined) {
      resolved.scan2 = sensor_msgs.msg.LaserScan.Resolve(msg.scan2)
    }
    else {
      resolved.scan2 = new sensor_msgs.msg.LaserScan()
    }

    if (msg.pose1 !== undefined) {
      resolved.pose1 = geometry_msgs.msg.Pose.Resolve(msg.pose1)
    }
    else {
      resolved.pose1 = new geometry_msgs.msg.Pose()
    }

    if (msg.pose2 !== undefined) {
      resolved.pose2 = geometry_msgs.msg.Pose.Resolve(msg.pose2)
    }
    else {
      resolved.pose2 = new geometry_msgs.msg.Pose()
    }

    if (msg.transform !== undefined) {
      resolved.transform = geometry_msgs.msg.Transform.Resolve(msg.transform)
    }
    else {
      resolved.transform = new geometry_msgs.msg.Transform()
    }

    return resolved;
    }
};

module.exports = ScanPair;
