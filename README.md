# Robot Use Documentation

## Wiring

### Arduino Mega:
- USB: Connect to Intel NUC
- Arduino GND 🡪 Sabertooth GND
- Arduino VIN 🡪 Sabertooth 5V
- Arduino TX (Any TX pin that isn’t TX0) 🡪 Sabertooth S1

### Sabertooth Power:
- Battery + 🡪 Sabertooth B+
- Battery - 🡪 Sabertooth B-
- Motor1 + 🡪 Sabertooth M1A
- Motor1 - 🡪 Sabertooth M1B
- Motor2 + 🡪 Sabertooth M2A
- Motor2 - 🡪 Sabertooth M2B

### NUC:
- Powered by personal power supply
- USB to Lidar
- USB to Stereo Camera
- USB to Arduino

## ROS Instructions

To run teleoperation, follow these steps:

1. Connect Xbox controller to NUC.
2. Run `roscore`.
3. Source the workspace using `source ~/delivery_bot_ws/devel/setup.bash`.
4. Look for ttyACMx in `/dev/` as this represents how the NUC sees the Arduino.
5. Run the serial node for the Arduino with `rosrun rosserial_python serial_node.py /dev/ttyACMx`.
6. Launch the teleoperation with `roslaunch delivery_bot teleop.launch`.

## Dip Switches Configuration

For Power Supply + Single Sabertooth 2x60, use the following dip switch configuration:

- Dip Switches: `101011`

