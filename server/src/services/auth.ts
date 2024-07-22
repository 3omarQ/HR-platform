import { mailToForgetAccount, mailToResetPassword } from "../mailing/mail-messages";
import User from "../models/User";
import { compare, encrypt } from "../utils/enc";
import jwt from "../utils/jwt";

const signIn = async (email: string, password: string): Promise<string> => {
  if (!email || !password) {
    throw new Error("Email/ Password are required");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User does not exist");
  }

  if (!compare(password, user.hashed_password)) {
    throw new Error("Invalid password");
  }

  const token = jwt.generate({
    user_id: user.id,
    role: user.is_admin ? "ADMIN" : "EMPLOYEE",
  });
  return token;
};

const forgetAccount = async (email: string,otp:string): Promise<void> => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User with email provided doesn not exist");
  };
  await mailToForgetAccount(email,otp)
  
};

const resetPassword = async (
  email: string,
  password: string
): Promise<void> => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User does not exist");
  }
  user.hashed_password = encrypt(password);
  await user.save();
  await mailToResetPassword(email)
}

export default {
  signIn,
  forgetAccount,
  resetPassword,
};
