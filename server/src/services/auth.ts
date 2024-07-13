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

const forgetAccount = async (email: string): Promise<void> => {
  // Todo: send reset password link to user via email
  // await sendMail({
  //   subject: "OK STUDIOS - Reset Password",
  //   to: [email],
  //   html: "some content here with reset link",
  //   text: "some content here with reset link",
  // });
  return;
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

  // todo: inform user with the change of password event
  // await sendMail({
  //   subject: "OK STUDIOS - Account Password Changed",
  //   to: [email],
  //   html: "some content",
  //   text: "some content",
  // });
};

export default {
  signIn,
  forgetAccount,
  resetPassword,
};
