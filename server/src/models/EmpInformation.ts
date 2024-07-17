import mongoose, { model, Model, Schema } from "mongoose";

export interface IEmpInformation extends Document {
    employeeId: mongoose.Types.ObjectId,
    contact: string,
    jobTitle: string,
    department: string,
    document: mongoose.Types.ObjectId,
    created_at: Date,
    updated_at: Date,
}

const EmpInformationSchema: Schema<IEmpInformation> = new Schema(
    {
        employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        contact: { type: String, required: true },
        jobTitle: { type: String, required: true },
        department: { type: String, required: true },
        document: { type: mongoose.Schema.Types.ObjectId, ref: 'EmpDocument' },
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now },
    },
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
)

const EmpInformation: Model<IEmpInformation> = model<IEmpInformation>("EmpInformation", EmpInformationSchema);


export default EmpInformation;
