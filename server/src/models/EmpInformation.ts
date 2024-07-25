import mongoose, { model, Model, Schema } from "mongoose";

export interface IEmpInformation extends Document {
    employeeId: mongoose.Types.ObjectId,
    contact: string,
    jobTitle: string,
    department: string,
    created_at: Date,
    updated_at: Date,
}

const EmpInformationSchema: Schema<IEmpInformation> = new Schema(
    {
        employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        contact: { type: String,  },
        jobTitle: { type: String,  },
        department: { type: String,  },
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now },
    },
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
)

const EmpInformation: Model<IEmpInformation> = model<IEmpInformation>("EmpInformation", EmpInformationSchema);


export default EmpInformation;
