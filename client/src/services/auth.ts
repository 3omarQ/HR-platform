import axios from "axios";
const PORT=8000

export const signIn = async (email: string, password: string) => {
	const response =await axios.post(`http://localhost:${PORT}/auth/`, { email, password })
    .then(response => {
      localStorage.setItem("token", response.data.token);
      console.log(response.data);
    })
	return response
};

export const sendOTP = async (email: string,otp:string) => {
	const response =await axios.post(`http://localhost:${PORT}/auth/forget-password`, { email,otp }).then(response=>{console.log(response.data)})
	return response
};

export const resetPassword = async (email: string,password:string) => {
	const response =await axios.post(`http://localhost:${PORT}/auth/reset-password`, { email,password }).then(response=>{console.log(response.data)})
	return response
};