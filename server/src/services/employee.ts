import { mailToNewEmployee } from "../mailing/mail-messages";
import EmpDocument, { IEmpDocument } from "../models/EmpDocument";
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

const getAllEmployees= async ():Promise<IUser[]>=>{
  const employees = await User.find({is_admin:false}).select(["-hashed_password","-is_admin"])
  if (!employees){
    throw new Error('there is no employee right now')
  }
  return employees

}

const getEmployeeDocuments = async (empId: string): Promise<IEmpDocument[]> => {
  const empDocuments = await EmpDocument.find({ employeeId: empId })
  if (!empDocuments) {
    throw new Error("employee haven't any document yet")
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

const updateInformation = async (empId: string, info: EmpInfo): Promise<string> => {
  const oldEmpInfo = await EmpInformation.findOne({ employeeId: empId })
  if (!oldEmpInfo) {
    throw new Error("employee not exist")
  }
  await oldEmpInfo.updateOne(info)
  return "Data updated successfully"
}

const updateDocument = async (empId: string, document: EmpDoc): Promise<string> => {
  const findDocument = await EmpDocument.findOne({ employeeId: empId, documentType: document.documentType })
  if (!findDocument) {
    throw new Error('document not found')
  }
  await findDocument.updateOne({ url: document.url })
  return "document updated successfully"

}

const deleteEmployee = async (id: string): Promise<string> => {
  await User.findByIdAndDelete(id)
  await EmpInformation.findOneAndDelete({ employeeId: id })
  await EmpDocument.deleteMany({employeeId:id})
  
  return "Employee deleted successfully"

}



export default {
  createEmployee,
  getAllEmployees,
  deleteEmployee,
  updateInformation,
  getEmployeeDocuments,
  getEmployeeInformations,
  updateDocument,
  getEmployee,
  addDocument
};