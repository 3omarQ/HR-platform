import mongoose, { model, Model, Schema } from "mongoose";


export interface IDepartment extends Document {
    name : string ,
    description : string , 
    headID : mongoose.Types.ObjectId // id of the employee HEAD  
} 

const DocumentSchema : Schema<IDepartment> = new Schema({
    name : {type : String , required : true},
    description : {type : String , required : true},
    headID : { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true  }
})

const Docment :Model<IDepartment> = model<IDepartment>("Document" , DocumentSchema)

export default Docment