import mongoose from "mongoose";
import userSchema from "./User";


const AdminSchema = new mongoose.Schema()

AdminSchema.add(userSchema)

const AdminModel = mongoose.model("Admin", AdminSchema);

export default AdminModel;