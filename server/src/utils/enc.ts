import { hashSync, compareSync } from "bcrypt";

// The key length is dependent on the algorithm.
// In this case for aes256, it is 32 bytes.
export const encrypt = (password: string) => {
  return hashSync(password, 10);
};

export const compare = (password: string, hashed: string) => {
  return compareSync(password, hashed);
};


export const generatePassword = (length: number) => {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

export default {
  encrypt,
  compare,
  generatePassword
};
