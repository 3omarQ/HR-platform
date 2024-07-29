import axios from "axios";
import BACKEND from "./constants";

export const getEmployeeList = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Request URL:", BACKEND.employeesList);
      console.log("Authorization Header:", `Bearer ${token}`);
    
      const response = await axios.get(BACKEND.employeesList, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data)
      return response.data;
    } catch (error:any) {
      console.error("Error fetching employee list:", error.response ? error.response.data : error.message);
      return [];
    }
};

export const addNewEmployee = async (firstname:string, lastname:string, email:string, phone:string) => {
  try {
    const token = localStorage.getItem("token");
    console.log("Request URL:", BACKEND.createEmployee);
    console.log("Authorization Header:", `Bearer ${token}`);
    console.log("Payload:", { firstname, lastname, email, phone });

    const response = await axios.post(BACKEND.createEmployee, 
      { firstname, lastname, email, phone }, 
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error:any) {
    console.error("Error adding new employee:", error.response ? error.response.data : error.message);
    return { error: error.response ? error.response.data : error.message };
  }
};