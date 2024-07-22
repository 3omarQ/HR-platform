import { mailToNewEmployee } from "../mailing/mail-messages";
import EmpDocument from "../models/EmpDocument";
import EmpInformation, { IEmpInformation } from "../models/EmpInformation";
import User, { IUser } from "../models/User";
import { encrypt, generatePassword } from "../utils/enc";
import { CreateUser } from "./dto/auth";
import { EmpDoc } from "./dto/emp-document";
import { EmpInfo } from "./dto/emp-information";

const createEmployee = async (dto: CreateUser): Promise<IUser> => {
  const employee = await User.findOne({ email: dto.email });
  if (employee) {
    throw new Error("Employee already exist");
  }

  //create a random password 
  const randomPassword = generatePassword(8)
  dto.password = randomPassword


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
    employeeId: data.id,
  })
  const empInfoData = await empInfo.save();


  //create employee document
  const empDoc = new EmpDocument({
    empInformationId: empInfoData._id,
  })
  empDoc.save();
  await empInfoData.updateOne({ document: empDoc._id })

  // send mail to new employee 
  await mailToNewEmployee(dto)

  return data;
};


const getEmployee = async (id: string): Promise<IUser> => {
  const employee = await User.findById(id)
  if (!employee) {
    throw new Error("there are no employee with this id ");
  }
  return employee;
}

const deleteEmployee = async (id: string): Promise<string> => {
  const employee = await User.findById(id)
  if (!employee) {
    throw new Error("there are no employee with this id ");
  }
  const empInfo = await EmpInformation.findOne({ employeeId: id })
  await EmpDocument.findByIdAndDelete(empInfo?.document.toString())
  await empInfo?.deleteOne()
  await employee.deleteOne()

  return "Employee deleted Successfuly"
 
}

const updateInformation = async (empId: string, info: EmpInfo): Promise<string> => {
  const oldEmpInfo = await EmpInformation.findOne({ employeeId: empId })
  if (!oldEmpInfo) {
    throw new Error("employee not exist")
  }
  await oldEmpInfo.updateOne(info)
  return "Data updated Successfuly"
}

const updateDocument = async (empId: string, document: EmpDoc): Promise<string> => {
  const findEmployeeInfo = await EmpInformation.findOne({ employeeId: empId })
  if (!findEmployeeInfo) {
    throw new Error("employee not exist")
  }
  const findEmployeeDoc = await EmpDocument.findById(findEmployeeInfo.document.toString())
  if (!findEmployeeDoc) {
    throw new Error("employee Documents not found ")

  }
  await findEmployeeDoc.updateOne(document)

  return "Data Updated Successfuly"
}


export default {
  createEmployee,
  deleteEmployee,
  updateInformation,
  getEmployee,
  updateDocument
};
