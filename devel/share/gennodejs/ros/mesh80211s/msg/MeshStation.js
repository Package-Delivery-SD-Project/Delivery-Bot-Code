// Auto-generated. Do not edit!

// (in-package mesh80211s.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class MeshStation {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.mac = null;
      this.device = null;
      this.inactive_time = null;
      this.rx_bytes = null;
      this.rx_packets = null;
      this.tx_bytes = null;
      this.tx_packets = null;
      this.signal = null;
      this.tx_bitrate = null;
      this.llid = null;
      this.plid = null;
      this.plink = null;
    }
    else {
      if (initObj.hasOwnProperty('mac')) {
        this.mac = initObj.mac
      }
      else {
        this.mac = '';
      }
      if (initObj.hasOwnProperty('device')) {
        this.device = initObj.device
      }
      else {
        this.device = '';
      }
      if (initObj.hasOwnProperty('inactive_time')) {
        this.inactive_time = initObj.inactive_time
      }
      else {
        this.inactive_time = 0;
      }
      if (initObj.hasOwnProperty('rx_bytes')) {
        this.rx_bytes = initObj.rx_bytes
      }
      else {
        this.rx_bytes = 0;
      }
      if (initObj.hasOwnProperty('rx_packets')) {
        this.rx_packets = initObj.rx_packets
      }
      else {
        this.rx_packets = 0;
      }
      if (initObj.hasOwnProperty('tx_bytes')) {
        this.tx_bytes = initObj.tx_bytes
      }
      else {
        this.tx_bytes = 0;
      }
      if (initObj.hasOwnProperty('tx_packets')) {
        this.tx_packets = initObj.tx_packets
      }
      else {
        this.tx_packets = 0;
      }
      if (initObj.hasOwnProperty('signal')) {
        this.signal = initObj.signal
      }
      else {
        this.signal = 0;
      }
      if (initObj.hasOwnProperty('tx_bitrate')) {
        this.tx_bitrate = initObj.tx_bitrate
      }
      else {
        this.tx_bitrate = 0;
      }
      if (initObj.hasOwnProperty('llid')) {
        this.llid = initObj.llid
      }
      else {
        this.llid = 0;
      }
      if (initObj.hasOwnProperty('plid')) {
        this.plid = initObj.plid
      }
      else {
        this.plid = 0;
      }
      if (initObj.hasOwnProperty('plink')) {
        this.plink = initObj.plink
      }
      else {
        this.plink = '';
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type MeshStation
    // Serialize message field [mac]
    bufferOffset = _serializer.string(obj.mac, buffer, bufferOffset);
    // Serialize message field [device]
    bufferOffset = _serializer.string(obj.device, buffer, bufferOffset);
    // Serialize message field [inactive_time]
    bufferOffset = _serializer.uint32(obj.inactive_time, buffer, bufferOffset);
    // Serialize message field [rx_bytes]
    bufferOffset = _serializer.uint32(obj.rx_bytes, buffer, bufferOffset);
    // Serialize message field [rx_packets]
    bufferOffset = _serializer.uint32(obj.rx_packets, buffer, bufferOffset);
    // Serialize message field [tx_bytes]
    bufferOffset = _serializer.uint32(obj.tx_bytes, buffer, bufferOffset);
    // Serialize message field [tx_packets]
    bufferOffset = _serializer.uint32(obj.tx_packets, buffer, bufferOffset);
    // Serialize message field [signal]
    bufferOffset = _serializer.int32(obj.signal, buffer, bufferOffset);
    // Serialize message field [tx_bitrate]
    bufferOffset = _serializer.uint16(obj.tx_bitrate, buffer, bufferOffset);
    // Serialize message field [llid]
    bufferOffset = _serializer.uint16(obj.llid, buffer, bufferOffset);
    // Serialize message field [plid]
    bufferOffset = _serializer.uint16(obj.plid, buffer, bufferOffset);
    // Serialize message field [plink]
    bufferOffset = _serializer.string(obj.plink, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type MeshStation
    let len;
    let data = new MeshStation(null);
    // Deserialize message field [mac]
    data.mac = _deserializer.string(buffer, bufferOffset);
    // Deserialize message field [device]
    data.device = _deserializer.string(buffer, bufferOffset);
    // Deserialize message field [inactive_time]
    data.inactive_time = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [rx_bytes]
    data.rx_bytes = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [rx_packets]
    data.rx_packets = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [tx_bytes]
    data.tx_bytes = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [tx_packets]
    data.tx_packets = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [signal]
    data.signal = _deserializer.int32(buffer, bufferOffset);
    // Deserialize message field [tx_bitrate]
    data.tx_bitrate = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [llid]
    data.llid = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [plid]
    data.plid = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [plink]
    data.plink = _deserializer.string(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += _getByteLength(object.mac);
    length += _getByteLength(object.device);
    length += _getByteLength(object.plink);
    return length + 42;
  }

  static datatype() {
    // Returns string type for a message object
    return 'mesh80211s/MeshStation';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0af11ca5c838b248549e689ebe504453';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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
    const resolved = new MeshStation(null);
    if (msg.mac !== undefined) {
      resolved.mac = msg.mac;
    }
    else {
      resolved.mac = ''
    }

    if (msg.device !== undefined) {
      resolved.device = msg.device;
    }
    else {
      resolved.device = ''
    }

    if (msg.inactive_time !== undefined) {
      resolved.inactive_time = msg.inactive_time;
    }
    else {
      resolved.inactive_time = 0
    }

    if (msg.rx_bytes !== undefined) {
      resolved.rx_bytes = msg.rx_bytes;
    }
    else {
      resolved.rx_bytes = 0
    }

    if (msg.rx_packets !== undefined) {
      resolved.rx_packets = msg.rx_packets;
    }
    else {
      resolved.rx_packets = 0
    }

    if (msg.tx_bytes !== undefined) {
      resolved.tx_bytes = msg.tx_bytes;
    }
    else {
      resolved.tx_bytes = 0
    }

    if (msg.tx_packets !== undefined) {
      resolved.tx_packets = msg.tx_packets;
    }
    else {
      resolved.tx_packets = 0
    }

    if (msg.signal !== undefined) {
      resolved.signal = msg.signal;
    }
    else {
      resolved.signal = 0
    }

    if (msg.tx_bitrate !== undefined) {
      resolved.tx_bitrate = msg.tx_bitrate;
    }
    else {
      resolved.tx_bitrate = 0
    }

    if (msg.llid !== undefined) {
      resolved.llid = msg.llid;
    }
    else {
      resolved.llid = 0
    }

    if (msg.plid !== undefined) {
      resolved.plid = msg.plid;
    }
    else {
      resolved.plid = 0
    }

    if (msg.plink !== undefined) {
      resolved.plink = msg.plink;
    }
    else {
      resolved.plink = ''
    }

    return resolved;
    }
};

module.exports = MeshStation;
