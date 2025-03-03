// Auto-generated. Do not edit!

// (in-package mesh80211s.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let MeshStation = require('./MeshStation.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class MeshStations {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.stations = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('stations')) {
        this.stations = initObj.stations
      }
      else {
        this.stations = [];
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type MeshStations
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [stations]
    // Serialize the length for message field [stations]
    bufferOffset = _serializer.uint32(obj.stations.length, buffer, bufferOffset);
    obj.stations.forEach((val) => {
      bufferOffset = MeshStation.serialize(val, buffer, bufferOffset);
    });
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type MeshStations
    let len;
    let data = new MeshStations(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [stations]
    // Deserialize array length for message field [stations]
    len = _deserializer.uint32(buffer, bufferOffset);
    data.stations = new Array(len);
    for (let i = 0; i < len; ++i) {
      data.stations[i] = MeshStation.deserialize(buffer, bufferOffset)
    }
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    object.stations.forEach((val) => {
      length += MeshStation.getMessageSize(val);
    });
    return length + 4;
  }

  static datatype() {
    // Returns string type for a message object
    return 'mesh80211s/MeshStations';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'fa4702b9dc887621257c88e89f258184';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
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
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new MeshStations(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.stations !== undefined) {
      resolved.stations = new Array(msg.stations.length);
      for (let i = 0; i < resolved.stations.length; ++i) {
        resolved.stations[i] = MeshStation.Resolve(msg.stations[i]);
      }
    }
    else {
      resolved.stations = []
    }

    return resolved;
    }
};

module.exports = MeshStations;
