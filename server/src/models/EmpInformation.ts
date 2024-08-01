import mongoose, { model, Model, Schema } from "mongoose";
import { IEmpDocument } from "./EmpDocument";

export interface IEmpInformation extends Document {
    employeeId: mongoose.Types.ObjectId,
    cin: number,
    adress: string,
    position: string,  // intern or job

    //Job
    job: mongoose.Types.ObjectId,  // there where you found all job description
    manager: mongoose.Types.ObjectId,  // manager of type user 
    salary: number,

    //department
    department: mongoose.Types.ObjectId,


    created_at: Date,
    updated_at: Date,
}

const EmpInformationSchema: Schema<IEmpInformation> = new Schema(
    {
        employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        cin: { type: Number, required: true },
        adress: { type: String, required: true },

        job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
        manager: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        salary: { type: Number, required: true },
        
        department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now },
    },
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
)

const EmpInformation: Model<IEmpInformation> = model<IEmpInformation>("EmpInformation", EmpInformationSchema);


export default EmpInformation;
