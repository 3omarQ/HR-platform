import { REDIRECR_URL_FOR_FORGET_PASSWORD } from "../constants"
import { CreateUser } from "../services/dto/auth"
import { sendMail } from "./mail"

export const mailToNewEmployee = async (dto: CreateUser) => {
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
              <p>Dear ${dto.firstname} ${dto.lastname},</p>
              <p>Welcome to OK STUDIOS! We are excited to have you on board. Your account has been successfully created. Below are your login credentials:</p>
              <p><strong>Email:</strong> ${dto.email}<br>
                 <strong>Password:</strong> ${dto.password}</p>
              <p>Please make sure to log in and change your password as soon as possible to ensure the security of your account.</p>
              <p>You can access your account here: <a href="[Login URL]">[Login URL]</a></p>
              <p>If you have any questions or need assistance, please feel free to reach out to our support team.</p>
              <p>Best regards,<br>OK STUDIOS Team</p>
            </div>`
  })

}


export const mailToForgetPassword = async (email: string, tokenPs: string) => {
  await sendMail({
    subject: "OK STUDIOS - Password Reset Request",
    to: [email],
    text: `Dear User,
  
          We received a request to reset your password for your OK STUDIOS account. Here's your verification code:
          
          ${REDIRECR_URL_FOR_FORGET_PASSWORD}${tokenPs}
          
          If you did not request a password reset, please ignore this email. This link will expire in 24 hours.
          
          Thank you,
          OK STUDIOS Team`,

    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>OK STUDIOS - Password Reset Request</h2>
        <p>Dear User,</p>
        <p>We received a request to reset your password for your OK STUDIOS account. Here's your verification code:</p>
        <p> ${REDIRECR_URL_FOR_FORGET_PASSWORD}${tokenPs}</p>
        <p>If you did not request a password reset, please ignore this email. This link will expire in 24 hours.</p>
        <p>Thank you,<br>OK STUDIOS Team</p>
      </div>`
  });
}


export const mailToResetPassword = async (email: string) => {

  await sendMail({
    subject: "OK STUDIOS - Account Password Changed",
    to: [email],
    text: `Dear User,

This is a confirmation that the password for your OK STUDIOS account has been changed. If you did not make this change, please contact our support team immediately.

If you did change your password, you can safely disregard this email.

Thank you,
OK STUDIOS Team`,

    html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6;">
    <h2>OK STUDIOS - Account Password Changed</h2>
    <p>Dear User,</p>
    <p>This is a confirmation that the password for your OK STUDIOS account has been changed.  If you did not make this change, please contact our support team immediately.

    If you did change your password, you can safely disregard this email.
    
    Thank you,
    OK STUDIOS Team </p>
      `
  })
}