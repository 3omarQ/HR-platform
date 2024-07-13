import { hashSync, compareSync } from "bcrypt";

// The key length is dependent on the algorithm.
// In this case for aes256, it is 32 bytes.
export const encrypt = (password: string) => {
  return hashSync(password, 10);
};

export const compare = (password: string, hashed: string) => {
  return compareSync(password, hashed);
};

export default {
  encrypt,
  compare,
};
