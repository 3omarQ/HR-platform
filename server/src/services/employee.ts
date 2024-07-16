import { sendMail } from "../mailing/mail";
import User from "../models/User";
import { encrypt } from "../utils/enc";
import { CreateUser } from "./dto/auth";

const createEmployee = async (dto: CreateUser) => {
  const user = new User({
    firstname: dto.firstname,
    lastname: dto.lastname,
    email: dto.email,
    phone: dto.phone,
    hashed_password: encrypt(dto.password),
    is_admin: false,
  });
  const data = await user.save();

  await sendMail({
    subject: "Welcome to OK STUDIOS - Your Account Credentials",
    to: [dto.email],
    text: `Dear ${dto.firstname} ${dto.lastname},
  
  Welcome to OK STUDIOS! We are excited to have you on board. Your account has been successfully created. Below are your login credentials:
  
  Email: ${dto.email}
  Password: ${dto.password}
  
  Please make sure to log in and change your password as soon as possible to ensure the security of your account.
  
  You can access your account here: [Login URL]
  
  If you have any questions or need assistance, please feel free to reach out to our support team.
  
  Best regards,
  OK STUDIOS Team`,

    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>Welcome to OK STUDIOS!</h2>
      <p>Dear [Employee Name],</p>
      <p>Welcome to OK STUDIOS! We are excited to have you on board. Your account has been successfully created. Below are your login credentials:</p>
      <p><strong>Username:</strong> [username]<br>
         <strong>Password:</strong> [password]</p>
      <p>Please make sure to log in and change your password as soon as possible to ensure the security of your account.</p>
      <p>You can access your account here: <a href="[Login URL]">[Login URL]</a></p>
      <p>If you have any questions or need assistance, please feel free to reach out to our support team.</p>
      <p>Best regards,<br>OK STUDIOS Team</p>
    </div>`
  });

  return data;
};

export default {
  createEmployee,
};
