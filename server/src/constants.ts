export const PORT = process.env.PORT ?? 3000;

export const JWT_SECRET = process.env.JWT_SECRET ?? "some-secret-placeholder";
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? "1h";
export const JWT_ISSUER = process.env.JWT_ISSUER ?? "OK STUDIOS";

export const DB_URL = process.env.MONGODB_URL ?? "";
export const DB_USER = process.env.MONGODB_USER ?? "";
export const DB_PASS = process.env.MONGODB_PASS ?? "";

const SUPER_ADMIN_FIRSTNAME = process.env.SUPER_ADMIN_FIRSTNAME ?? "OK STUDIOS";
const SUPER_ADMIN_LASTNAME = process.env.SUPER_ADMIN_LASTNAME ?? "HR";
const SUPER_ADMIN_EMAIL = process.env.SUPER_ADMIN_EMAIL ?? "hr@okstudios.io";
const SUPER_ADMIN_PHONE = process.env.SUPER_ADMIN_PHONE ?? "+21627782201";
const SUPER_ADMIN_PASSWORD = process.env.SUPER_ADMIN_PASSWORD ?? "admin";

export const SUPER_USER = {
  firstname: SUPER_ADMIN_FIRSTNAME,
  lastname: SUPER_ADMIN_LASTNAME,
  email: SUPER_ADMIN_EMAIL,
  phone: SUPER_ADMIN_PHONE,
  password: SUPER_ADMIN_PASSWORD,
};

const SMTP_HOST = process.env.SMTP_HOST ?? "smtp.hostinger.com";
const SMTP_PORT = process.env.SMTP_PORT ?? 465;
const SMTP_SECURE = process.env.SMTP_SECURE ?? true;
const SMTP_NAME = process.env.SMTP_NAME ?? "OK Studios";
const SMTP_FROM = process.env.SMTP_FROM ?? "hr@okstudios.io";
const SMTP_AUTH_USER = process.env.SMTP_AUTH_USER ?? "test@okstudios.io";
const SMTP_AUTH_PASS = process.env.SMTP_AUTH_PASS ?? "A]w[dphuawond082@";

export const SMTP = {
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  name: SMTP_NAME,
  from: SMTP_FROM,
  auth_user: SMTP_AUTH_USER,
  auth_pass: SMTP_AUTH_PASS,
};
