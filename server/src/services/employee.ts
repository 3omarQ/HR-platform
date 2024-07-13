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
  return data;
};

export default {
  createEmployee,
};
