import mongoose from "mongoose";
import { DB_URL, DB_USER, DB_PASS } from "../constants";

export const get_db_url = () => {
  return `${DB_URL}`.replace("<USER>", DB_USER).replace("<PASSWORD>", DB_PASS);
};

const connect = async () => {
  try {
    const url = get_db_url();
    url;
    await mongoose.connect(url);
  } catch (error: any) {
    console.error("Failed to connecto to database", error);
  }
};

export default { connect };
