import { mailToNewEmployee } from "../mailing/mail-messages";
import EmpDocument from "../models/EmpDocument";
import EmpInformation from "../models/EmpInformation";
import User, { IUser } from "../models/User";
import { encrypt, generatePassword } from "../utils/enc";
import { CreateUser } from "./dto/auth";
import { EmpDoc } from "./dto/emp-document";
import { EmpInfo } from "./dto/emp-information";




const createEmployee = async (dto: CreateUser): Promise<string> => {
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
  await empInfo.save();

  // send mail to new employee 
  await mailToNewEmployee(dto)

  return "employee created successfully";
};

const getEmployee = async (id: string): Promise<IUser> => {
  const employee = await User.findById(id).select(["-hashed_password","-is_admin"])
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
  // await EmpDocument.findByIdAndDelete(empInfo?.document.toString())
  await empInfo?.deleteOne()
  await employee.deleteOne()

  return "Employee deleted successfully"

}

const updateInformation = async (empId: string, info: EmpInfo): Promise<string> => {
  const oldEmpInfo = await EmpInformation.findOne({ employeeId: empId })
  if (!oldEmpInfo) {
    throw new Error("employee not exist")
  }
  await oldEmpInfo.updateOne(info)
  return "Data updated successfully"
}

const addDocument = async (empId: string, document: EmpDoc): Promise<string> => {
  const findDocument = await EmpDocument.findOne({ employeeId: empId, documentType: document.documentType })
  if (findDocument) {
    throw new Error('this document already exist if you want update it')
  }
  const newDocument = new EmpDocument({
    employeeId: empId,
    documentType: document.documentType,
    url: document.url
  })

  await newDocument.save()
  return "Document added successfully"
}

const updateDocument = async (empId: string, document: EmpDoc): Promise<string> => {
  const findDocument = await EmpDocument.findOne({ employeeId: empId, documentType: document.documentType })
  if (!findDocument) {
    throw new Error('document not found')
  }
  await findDocument.updateOne({ url: document.url })
  return "document updated successfully"

}

const getEmployeeDocuments = async (empId: string): Promise<any> => {
  const empDocuments = await EmpDocument.findOne({ employeeId: empId })
  if (!empDocuments) {
    return []
  }
  return empDocuments
}

const getEmployeeInformations = async (empId: string): Promise<EmpInfo> => {
  const empInfo = await EmpInformation.findOne({ employeeId: empId })
  if (!empInfo) {
    throw new Error('employee informations not found ')
  }
  return empInfo
}

export default {
  createEmployee,
  deleteEmployee,
  updateInformation,
  getEmployeeDocuments,
  getEmployeeInformations,
  updateDocument,
  getEmployee,
  addDocument
};