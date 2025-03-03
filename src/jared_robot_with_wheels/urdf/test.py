import re

replacements = {
    "wheel_r1_link": "back_left_axel_link",
    "wheel_r2_link": "back_right_axel_link",
    "wheel_f1_link": "front_left_axel_link",
    "wheel_f2_link": "front_right_axel_link",
    "real_wheel_r1_link": "back_left_wheel_link",
    "real_wheel_r2_link": "back_right_wheel_link",
    "real_wheel_f1_link": "front_left_wheel_link",
    "real_wheel_f2_link": "front_right_wheel_link",
    "real_wheel_r1_joint": "back_left_wheel_joint",
    "real_wheel_r2_joint": "back_right_wheel_joint",
    "real_wheel_f1_joint": "front_left_wheel_joint",
    "real_wheel_f2_joint": "front_right_wheel_joint",
    "wheel_r1_joint": "back_left_axel_joint",
    "wheel_r2_joint": "back_right_axel_joint",
    "wheel_f1_joint": "front_left_axel_joint",
    "wheel_f2_joint": "front_right_axel_joint"
}

def replace_in_urdf(input_file, output_file):
    with open(input_file, 'r') as file:
        content = file.read()

    for old, new in replacements.items():
        content = re.sub(rf'\b{old}\b', new, content)

    with open(output_file, 'w') as file:
        file.write(content)

    print(f"Replacements completed. Updated URDF saved to {output_file}")

input_urdf = "jared_robot_with_wheels.urdf"
output_urdf = "jared_robot_with_wheels_replaced.urdf"
replace_in_urdf(input_urdf, output_urdf)
