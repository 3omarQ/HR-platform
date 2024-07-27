import axios from "axios";
import BACKEND from "./constants";

export const getEmployeeList = async () => {
    try {
      const token = localStorage.getItem("Token");
      console.log("Request URL:", BACKEND.employeesList);
      console.log("Authorization Header:", `Bearer ${token}`);
    
      const response = await axios.get(BACKEND.employeesList, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    
      return response.data;
    } catch (error:any) {
      console.error("Error fetching employee list:", error.response ? error.response.data : error.message);
      return [];
    }
};