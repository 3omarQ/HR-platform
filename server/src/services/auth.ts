import { mailToForgetPassword, mailToResetPassword } from "../mailing/mail-messages";
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
    tokenType:"auth"
  });
  return token;
};

const forgetPassword = async (email: string): Promise<void> => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User with email provided does not exist");
  };


  // generate a token who expired after 10 minuts 
  const tokenPs = jwt.generate({
    user_id : user.id,
    tokenType:"forget-password"
  },'10m') 
  await mailToForgetPassword(email,tokenPs)
  
};

const resetPassword = async (
  id: string,
  password: string
): Promise<void> => {

  const user = await User.findById(id);
  if (!user) {
    throw new Error("User does not exist");
  }
  user.hashed_password = encrypt(password);
  await user.save();
  await mailToResetPassword(user.email)
}

export default {
  signIn,
  forgetPassword,
  resetPassword,
};
