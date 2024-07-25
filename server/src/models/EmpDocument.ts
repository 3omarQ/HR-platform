import mongoose, { model, Model, Schema } from "mongoose";


export interface IEmpDocument extends Document {
    employeeId: mongoose.Types.ObjectId,
    documentType?: string,
    url?: string,
    created_at: Date,
    updated_at: Date,
}



const empDocumentSchema :Schema<IEmpDocument> = new Schema ({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    documentType: {type : String ,required:true },
    url: {type : String ,required:true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
}) 

const EmpDocument: Model<IEmpDocument> = model<IEmpDocument>("EmpDocument", empDocumentSchema);

export default EmpDocument ;