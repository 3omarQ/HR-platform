import mongoose, { model, Model, Schema } from "mongoose";


export interface IEmpDocument extends Document {
    empInformationId: mongoose.Types.ObjectId,
    coverLetter?: string,
    resume?: string,
    diplome?: string,
    certifications?: string[],
    created_at: Date,
    updated_at: Date,
}


const empDocumentSchema :Schema<IEmpDocument> = new Schema ({
    empInformationId: { type: mongoose.Schema.Types.ObjectId, ref: 'EmpInformation' },
    coverLetter: {type : String },
    resume: {type : String },
    diplome: {type : String },
    certifications: {type : Array },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
}) 

const EmpDocument: Model<IEmpDocument> = model<IEmpDocument>("EmpDocument", empDocumentSchema);

export default EmpDocument ;