import mongoose from "mongoose";

export interface User {
  firstName:String,
  lastName:String,
  email:String ,
  phone:Number,
  password:String,
  dateOfCreation:Date,
  role:string,
}



const UserSchema = new mongoose.Schema<User>({
    
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email :{
    type: String ,
    required:true ,
    unique:true 
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfCreation: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
  },
  
});


export default UserSchema;