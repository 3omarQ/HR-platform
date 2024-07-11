import mongoose from "mongoose";
import UserModel, { User } from "./User";

interface Employee extends User {
    jobTitle : string ,
    contactInfo : string ,
    document:mongoose.Types.ObjectId  ,
}

const EmployeeSchema = new mongoose.Schema<Employee>({
    jobTitle: {
        type: String,
        required: true,
      },
    contactInfo :{
        type :String ,
        required :true
    },
    document : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Document',
    }
})

EmployeeSchema.add(UserModel.schema)


const EmployeeModel = mongoose.model("Employee", EmployeeSchema);

export default EmployeeModel;