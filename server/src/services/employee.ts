import { mailToNewEmployee } from "../mailing/mail-messages";
import EmpInformation, { IEmpInformation } from "../models/EmpInformation";
import User, { IUser } from "../models/User";
import { encrypt,generatePassword } from "../utils/enc";
import { CreateUser } from "./dto/auth";
import { EmpInfo } from "./dto/emp-information";

const createEmployee = async (dto: CreateUser) : Promise<IUser> => {
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

  //create employee information in db
  const empInfo = new EmpInformation({
    employeeId :data.id ,
  })
  empInfo.save(); 

  // send mail to new employee 
  await mailToNewEmployee(dto)
  
  return data;
};


const getEmployee = async (id : string)  : Promise<IUser>=>{
  const employee = await User.findById(id)
  if(!employee){
    throw new Error("there are no employee with this id ");
  }
  return employee;
}


const updateInformation = async (info:EmpInfo) : Promise<IEmpInformation>=>{
  const oldEmpInfo = await EmpInformation.findById(info.emlpoyeeId)
  if (!oldEmpInfo){
    throw new Error("employee not exist")
  }
  const newEmpInfo = await oldEmpInfo.updateOne(info)
  newEmpInfo.save()
  return newEmpInfo   
}


export default {
  createEmployee,
  updateInformation,
  getEmployee
};
