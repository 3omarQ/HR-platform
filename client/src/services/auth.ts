import axios from "axios";export const signIn = async (email: string, password: string) => {
	// const response = await axios.post("/api/auth", { email, password });
	// localStorage.setItem("token", response.data.token ?? "test");
	// console.log(response.data);

	localStorage.setItem("token", "test");
	await new Promise((res) => setTimeout(res, 1500));
};

export const reset = async (email: string) => {
	// const response = await axios.post("/api/reset", { email });
	// console.log(response.data);

	await new Promise((res) => setTimeout(res, 1500));
};
