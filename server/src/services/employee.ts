import { mailToNewEmployee } from "../mailing/mail-messages";
import User from "../models/User";
import { encrypt,generatePassword } from "../utils/enc";
import { CreateUser } from "./dto/auth";

const createEmployee = async (dto: CreateUser) => {
  const employee = await User.findOne({ email:dto.email });
  if(employee){
    throw new Error("Employee already exist");
  }

  //create a random password 
  const randomPassword = generatePassword(8)
  dto.password=randomPassword


  const user = new User({
    firstname: dto.firstname,
    lastname: dto.lastname,
    email: dto.email,
    phone: dto.phone,
    hashed_password: encrypt(randomPassword),
    is_admin: false,
  });
  const data = await user.save();

  // send mail to new employee 
  await mailToNewEmployee(dto)
  
  return data;
};

export default {
  createEmployee,
};
