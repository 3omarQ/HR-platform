import mongoose from "mongoose";

interface Document {
    employee : mongoose.Types.ObjectId ,
    resume : string ,
    coverLetter:string ,
    diplom:string,
}

const DocumentSchema = new mongoose.Schema<Document>({
    resume : {
        type:String ,       // it is possible here to change the type of it cause it should bee .pdf
        required:true ,
    },
    coverLetter : {
        type:String ,        
        required:true ,
    },
    diplom : {
        type:String ,        
        required:true ,
    },
    employee : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required:true ,
    }
})


const DocumentModel = mongoose.model("Document",DocumentSchema)

export default DocumentModel;