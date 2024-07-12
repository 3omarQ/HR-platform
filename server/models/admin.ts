import mongoose from "mongoose";
import userSchema from "./user";


const AdminSchema = new mongoose.Schema()

AdminSchema.add(userSchema)

const AdminModel = mongoose.model("Admin", AdminSchema);

export default AdminModel;