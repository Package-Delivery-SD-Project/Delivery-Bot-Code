// Auto-generated. Do not edit!

// (in-package roboclaw.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class motor_state {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.left_duty_sp = null;
      this.left_duty = null;
      this.right_duty_sp = null;
      this.right_duty = null;
      this.left_qpps_sp = null;
      this.left_qpps = null;
      this.right_qpps_sp = null;
      this.right_qpps = null;
      this.left_sp = null;
      this.left = null;
      this.right_sp = null;
      this.right = null;
      this.v_sp = null;
      this.v = null;
      this.w_sp = null;
      this.w = null;
      this.left_pid_pe = null;
      this.left_pid_ie = null;
      this.left_pid_de = null;
      this.right_pid_pe = null;
      this.right_pid_ie = null;
      this.right_pid_de = null;
    }
    else {
      if (initObj.hasOwnProperty('left_duty_sp')) {
        this.left_duty_sp = initObj.left_duty_sp
      }
      else {
        this.left_duty_sp = 0.0;
      }
      if (initObj.hasOwnProperty('left_duty')) {
        this.left_duty = initObj.left_duty
      }
      else {
        this.left_duty = 0.0;
      }
      if (initObj.hasOwnProperty('right_duty_sp')) {
        this.right_duty_sp = initObj.right_duty_sp
      }
      else {
        this.right_duty_sp = 0.0;
      }
      if (initObj.hasOwnProperty('right_duty')) {
        this.right_duty = initObj.right_duty
      }
      else {
        this.right_duty = 0.0;
      }
      if (initObj.hasOwnProperty('left_qpps_sp')) {
        this.left_qpps_sp = initObj.left_qpps_sp
      }
      else {
        this.left_qpps_sp = 0;
      }
      if (initObj.hasOwnProperty('left_qpps')) {
        this.left_qpps = initObj.left_qpps
      }
      else {
        this.left_qpps = 0;
      }
      if (initObj.hasOwnProperty('right_qpps_sp')) {
        this.right_qpps_sp = initObj.right_qpps_sp
      }
      else {
        this.right_qpps_sp = 0;
      }
      if (initObj.hasOwnProperty('right_qpps')) {
        this.right_qpps = initObj.right_qpps
      }
      else {
        this.right_qpps = 0;
      }
      if (initObj.hasOwnProperty('left_sp')) {
        this.left_sp = initObj.left_sp
      }
      else {
        this.left_sp = 0.0;
      }
      if (initObj.hasOwnProperty('left')) {
        this.left = initObj.left
      }
      else {
        this.left = 0.0;
      }
      if (initObj.hasOwnProperty('right_sp')) {
        this.right_sp = initObj.right_sp
      }
      else {
        this.right_sp = 0.0;
      }
      if (initObj.hasOwnProperty('right')) {
        this.right = initObj.right
      }
      else {
        this.right = 0.0;
      }
      if (initObj.hasOwnProperty('v_sp')) {
        this.v_sp = initObj.v_sp
      }
      else {
        this.v_sp = 0.0;
      }
      if (initObj.hasOwnProperty('v')) {
        this.v = initObj.v
      }
      else {
        this.v = 0.0;
      }
      if (initObj.hasOwnProperty('w_sp')) {
        this.w_sp = initObj.w_sp
      }
      else {
        this.w_sp = 0.0;
      }
      if (initObj.hasOwnProperty('w')) {
        this.w = initObj.w
      }
      else {
        this.w = 0.0;
      }
      if (initObj.hasOwnProperty('left_pid_pe')) {
        this.left_pid_pe = initObj.left_pid_pe
      }
      else {
        this.left_pid_pe = 0.0;
      }
      if (initObj.hasOwnProperty('left_pid_ie')) {
        this.left_pid_ie = initObj.left_pid_ie
      }
      else {
        this.left_pid_ie = 0.0;
      }
      if (initObj.hasOwnProperty('left_pid_de')) {
        this.left_pid_de = initObj.left_pid_de
      }
      else {
        this.left_pid_de = 0.0;
      }
      if (initObj.hasOwnProperty('right_pid_pe')) {
        this.right_pid_pe = initObj.right_pid_pe
      }
      else {
        this.right_pid_pe = 0.0;
      }
      if (initObj.hasOwnProperty('right_pid_ie')) {
        this.right_pid_ie = initObj.right_pid_ie
      }
      else {
        this.right_pid_ie = 0.0;
      }
      if (initObj.hasOwnProperty('right_pid_de')) {
        this.right_pid_de = initObj.right_pid_de
      }
      else {
        this.right_pid_de = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type motor_state
    // Serialize message field [left_duty_sp]
    bufferOffset = _serializer.float64(obj.left_duty_sp, buffer, bufferOffset);
    // Serialize message field [left_duty]
    bufferOffset = _serializer.float64(obj.left_duty, buffer, bufferOffset);
    // Serialize message field [right_duty_sp]
    bufferOffset = _serializer.float64(obj.right_duty_sp, buffer, bufferOffset);
    // Serialize message field [right_duty]
    bufferOffset = _serializer.float64(obj.right_duty, buffer, bufferOffset);
    // Serialize message field [left_qpps_sp]
    bufferOffset = _serializer.int32(obj.left_qpps_sp, buffer, bufferOffset);
    // Serialize message field [left_qpps]
    bufferOffset = _serializer.int32(obj.left_qpps, buffer, bufferOffset);
    // Serialize message field [right_qpps_sp]
    bufferOffset = _serializer.int32(obj.right_qpps_sp, buffer, bufferOffset);
    // Serialize message field [right_qpps]
    bufferOffset = _serializer.int32(obj.right_qpps, buffer, bufferOffset);
    // Serialize message field [left_sp]
    bufferOffset = _serializer.float64(obj.left_sp, buffer, bufferOffset);
    // Serialize message field [left]
    bufferOffset = _serializer.float64(obj.left, buffer, bufferOffset);
    // Serialize message field [right_sp]
    bufferOffset = _serializer.float64(obj.right_sp, buffer, bufferOffset);
    // Serialize message field [right]
    bufferOffset = _serializer.float64(obj.right, buffer, bufferOffset);
    // Serialize message field [v_sp]
    bufferOffset = _serializer.float64(obj.v_sp, buffer, bufferOffset);
    // Serialize message field [v]
    bufferOffset = _serializer.float64(obj.v, buffer, bufferOffset);
    // Serialize message field [w_sp]
    bufferOffset = _serializer.float64(obj.w_sp, buffer, bufferOffset);
    // Serialize message field [w]
    bufferOffset = _serializer.float64(obj.w, buffer, bufferOffset);
    // Serialize message field [left_pid_pe]
    bufferOffset = _serializer.float64(obj.left_pid_pe, buffer, bufferOffset);
    // Serialize message field [left_pid_ie]
    bufferOffset = _serializer.float64(obj.left_pid_ie, buffer, bufferOffset);
    // Serialize message field [left_pid_de]
    bufferOffset = _serializer.float64(obj.left_pid_de, buffer, bufferOffset);
    // Serialize message field [right_pid_pe]
    bufferOffset = _serializer.float64(obj.right_pid_pe, buffer, bufferOffset);
    // Serialize message field [right_pid_ie]
    bufferOffset = _serializer.float64(obj.right_pid_ie, buffer, bufferOffset);
    // Serialize message field [right_pid_de]
    bufferOffset = _serializer.float64(obj.right_pid_de, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type motor_state
    let len;
    let data = new motor_state(null);
    // Deserialize message field [left_duty_sp]
    data.left_duty_sp = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [left_duty]
    data.left_duty = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [right_duty_sp]
    data.right_duty_sp = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [right_duty]
    data.right_duty = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [left_qpps_sp]
    data.left_qpps_sp = _deserializer.int32(buffer, bufferOffset);
    // Deserialize message field [left_qpps]
    data.left_qpps = _deserializer.int32(buffer, bufferOffset);
    // Deserialize message field [right_qpps_sp]
    data.right_qpps_sp = _deserializer.int32(buffer, bufferOffset);
    // Deserialize message field [right_qpps]
    data.right_qpps = _deserializer.int32(buffer, bufferOffset);
    // Deserialize message field [left_sp]
    data.left_sp = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [left]
    data.left = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [right_sp]
    data.right_sp = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [right]
    data.right = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [v_sp]
    data.v_sp = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [v]
    data.v = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [w_sp]
    data.w_sp = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [w]
    data.w = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [left_pid_pe]
    data.left_pid_pe = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [left_pid_ie]
    data.left_pid_ie = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [left_pid_de]
    data.left_pid_de = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [right_pid_pe]
    data.right_pid_pe = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [right_pid_ie]
    data.right_pid_ie = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [right_pid_de]
    data.right_pid_de = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 160;
  }

  static datatype() {
    // Returns string type for a message object
    return 'roboclaw/motor_state';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '10585f422ced85d5c376eb502ea760c3';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64 left_duty_sp
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
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new motor_state(null);
    if (msg.left_duty_sp !== undefined) {
      resolved.left_duty_sp = msg.left_duty_sp;
    }
    else {
      resolved.left_duty_sp = 0.0
    }

    if (msg.left_duty !== undefined) {
      resolved.left_duty = msg.left_duty;
    }
    else {
      resolved.left_duty = 0.0
    }

    if (msg.right_duty_sp !== undefined) {
      resolved.right_duty_sp = msg.right_duty_sp;
    }
    else {
      resolved.right_duty_sp = 0.0
    }

    if (msg.right_duty !== undefined) {
      resolved.right_duty = msg.right_duty;
    }
    else {
      resolved.right_duty = 0.0
    }

    if (msg.left_qpps_sp !== undefined) {
      resolved.left_qpps_sp = msg.left_qpps_sp;
    }
    else {
      resolved.left_qpps_sp = 0
    }

    if (msg.left_qpps !== undefined) {
      resolved.left_qpps = msg.left_qpps;
    }
    else {
      resolved.left_qpps = 0
    }

    if (msg.right_qpps_sp !== undefined) {
      resolved.right_qpps_sp = msg.right_qpps_sp;
    }
    else {
      resolved.right_qpps_sp = 0
    }

    if (msg.right_qpps !== undefined) {
      resolved.right_qpps = msg.right_qpps;
    }
    else {
      resolved.right_qpps = 0
    }

    if (msg.left_sp !== undefined) {
      resolved.left_sp = msg.left_sp;
    }
    else {
      resolved.left_sp = 0.0
    }

    if (msg.left !== undefined) {
      resolved.left = msg.left;
    }
    else {
      resolved.left = 0.0
    }

    if (msg.right_sp !== undefined) {
      resolved.right_sp = msg.right_sp;
    }
    else {
      resolved.right_sp = 0.0
    }

    if (msg.right !== undefined) {
      resolved.right = msg.right;
    }
    else {
      resolved.right = 0.0
    }

    if (msg.v_sp !== undefined) {
      resolved.v_sp = msg.v_sp;
    }
    else {
      resolved.v_sp = 0.0
    }

    if (msg.v !== undefined) {
      resolved.v = msg.v;
    }
    else {
      resolved.v = 0.0
    }

    if (msg.w_sp !== undefined) {
      resolved.w_sp = msg.w_sp;
    }
    else {
      resolved.w_sp = 0.0
    }

    if (msg.w !== undefined) {
      resolved.w = msg.w;
    }
    else {
      resolved.w = 0.0
    }

    if (msg.left_pid_pe !== undefined) {
      resolved.left_pid_pe = msg.left_pid_pe;
    }
    else {
      resolved.left_pid_pe = 0.0
    }

    if (msg.left_pid_ie !== undefined) {
      resolved.left_pid_ie = msg.left_pid_ie;
    }
    else {
      resolved.left_pid_ie = 0.0
    }

    if (msg.left_pid_de !== undefined) {
      resolved.left_pid_de = msg.left_pid_de;
    }
    else {
      resolved.left_pid_de = 0.0
    }

    if (msg.right_pid_pe !== undefined) {
      resolved.right_pid_pe = msg.right_pid_pe;
    }
    else {
      resolved.right_pid_pe = 0.0
    }

    if (msg.right_pid_ie !== undefined) {
      resolved.right_pid_ie = msg.right_pid_ie;
    }
    else {
      resolved.right_pid_ie = 0.0
    }

    if (msg.right_pid_de !== undefined) {
      resolved.right_pid_de = msg.right_pid_de;
    }
    else {
      resolved.right_pid_de = 0.0
    }

    return resolved;
    }
};

module.exports = motor_state;
