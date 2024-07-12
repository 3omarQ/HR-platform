import mongoose from "mongoose";
import UserSchema, { User } from "./user";

interface Employee extends User {
    jobTitle : string ,
    contactInfo : string ,
    document:mongoose.Types.ObjectId  ,
}

const EmployeeSchema = new mongoose.Schema<Employee>({
    jobTitle: {
        type: String,
        required: false,
      },
    contactInfo :{
        type :String ,
        required :false
    },
    document : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Document',
    }
})

EmployeeSchema.add(UserSchema)


const EmployeeModel = mongoose.model("Employee", EmployeeSchema);

export default EmployeeModel;