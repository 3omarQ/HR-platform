import { sign, verify, decode } from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN, JWT_ISSUER } from "../constants";

const generate = (payload: any) => {
  return sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
    issuer: JWT_ISSUER,
  });
};

const validate = (token: string) => {
  return verify(token, JWT_SECRET, { issuer: "OK Studios" });
};

const parse = (token: string) => {
  return decode(token, { complete: false, json: true });
};

export default {
  generate,
  validate,
  parse,
};
