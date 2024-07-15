import { sendMail } from "../mailing/mail";
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
  await sendMail({
    subject: "OK STUDIOS - Password Reset Request",
    to: [email],
    text: `Dear User,
  
  We received a request to reset your password for your OK STUDIOS account. Please click the link below to reset your password:
  
  [Reset Password Link]
  
  If you did not request a password reset, please ignore this email. This link will expire in 24 hours.
  
  Thank you,
  OK STUDIOS Team`,
  
    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>OK STUDIOS - Password Reset Request</h2>
      <p>Dear User,</p>
      <p>We received a request to reset your password for your OK STUDIOS account. Please click the button below to reset your password:</p>
      <a href="[Reset Password Link]" style="display: inline-block; padding: 10px 20px; margin: 20px 0; font-size: 16px; color: #fff; background-color: #007bff; text-decoration: none; border-radius: 5px;">Reset Password</a>
      <p>If you did not request a password reset, please ignore this email. This link will expire in 24 hours.</p>
      <p>Thank you,<br>OK STUDIOS Team</p>
    </div>`
  });
  
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
