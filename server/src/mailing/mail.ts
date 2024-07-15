import { createTransport } from "nodemailer";
import { SMTP } from "../constants";

const transporter = createTransport({
  host: SMTP.host,
  port: +SMTP.port,
  secure: SMTP.secure === true,
  auth: {
    user: SMTP.auth_user,
    pass: SMTP.auth_pass,
  },      
});


 

type Mail = {
  to: string[];
  cc?: string[];
  subject: string;
  text?: string;
  html?: string;
};

export const sendMail = async (m: Mail) => {
  console.log({
    host: SMTP.host,
    port: +SMTP.port,
    secure: SMTP.secure === true,
    auth: {
      user: SMTP.auth_user,
      pass: SMTP.auth_pass,
    },
  });

  const info = await transporter.sendMail({
    from: `"${SMTP.name}" <${SMTP.auth_user}>`,
    to: m.to.join(", "),
    cc: m.cc?.join(", "),
    subject: m.subject,
    text: m.text,
    html: m.html,
  });
  console.log("Message sent: %s", info.messageId);
};
