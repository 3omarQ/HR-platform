import { model, Model, Schema } from "mongoose";

export interface IUser extends Document {
  firstname: string;
  lastname: string;

  email: string;
  phone: string;
  hashed_password: string;

  created_at: Date;
  updated_at: Date;

  is_admin: boolean;
}

const userSchema: Schema<IUser> = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    hashed_password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    is_admin: { type: Boolean, default: false },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const User: Model<IUser> = model<IUser>("User", userSchema);

export default User;
