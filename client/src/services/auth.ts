import axios from "axios";
import BACKEND from "./constants";

export const signIn = async (email: string, password: string) => {
  const response = await axios.post(BACKEND.signIn, { email, password });
  return response.data;
};

export const sendOTP = async (email: string, otp: string) => {
  const response = await axios
    .post(BACKEND.forgetPassword, { email, otp })
    .then((response) => {
      console.log(response.data);
    });
  return response;
};

export const resetPassword = async (email: string, password: string) => {
  const response = await axios
    .post(BACKEND.resetPassword, { email, password })
    .then((response) => {
      console.log(response.data);
    });
  return response;
};
