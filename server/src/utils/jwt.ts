import { sign, verify, decode } from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN, JWT_ISSUER } from "../constants";

const generate = (payload: any ,expiresIn? : string) => {
  return sign(payload, JWT_SECRET, {
    expiresIn: expiresIn ?? JWT_EXPIRES_IN,
    issuer: JWT_ISSUER,
  });
};

const validate = (token: string) => {
  try{
    return verify(token, JWT_SECRET, { issuer: "OK STUDIOS" });

  }catch(error :any){
    console.log('error come from token =====> ',error.message)
  }
};

const parse = (token: string) => {
  return decode(token, { complete: false, json: true });
};

export default {
  generate,
  validate,
  parse,
};
