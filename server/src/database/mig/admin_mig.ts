import { SUPER_USER } from "../../constants";
import User from "../../models/User";
import { encrypt } from "../../utils/enc";

export const createAdmin = async () => {
  try {
    const existing = await User.findOne({ is_admin: true });
    if (existing) {
      return;
    }
    console.log("> No existing user HR Manager");
    console.log("> Creating new super user for HR Manager");
    const payload = {
      firstname: SUPER_USER.firstname,
      lastname: SUPER_USER.lastname,
      email: SUPER_USER.email,
      phone: SUPER_USER.phone,
      hashed_password: encrypt(SUPER_USER.password),
      is_admin: true,
    };
    console.log(payload);
    const user = new User(payload);
    await user.save();
  } catch (error: any) {
    console.error(error);
  }
};
