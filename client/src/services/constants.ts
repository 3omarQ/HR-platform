const backendURL = process.env.REACT_APP_BACKEND_URL;

const BACKEND = {
  // auth endpoints
  signIn: `${backendURL}/auth`,
  forgetPassword: `${backendURL}/auth/forget-password`,
  resetPassword: `${backendURL}/auth/reset-password`,

  // employees endpoints
  employeesList: `${backendURL}/employee/`,

  // Create a new employee
  // POST method
  // Required: access_token from admin (only admin can create employee)
  // Payload: { firstname: string, lastname: string, email: string, phone: string }
  // Response: { message }
  // Expected error: { error: "Employee already exists" }
  createEmployee: `${backendURL}/employee`,

  // Get an employee by ID
  // GET method
  // Required: access_token from admin (only admin can visit employee)
  // URL Parameter: id (employee ID)
  // Response: { "_id", "firstname", "lastname", "email", "phone", "created_at", "updated_at" }
  // Expected error: { error: "There is no employee with this ID" }
  getEmployee: (id:any) => `${backendURL}/employee/${id}`,

  // Get detailed information of an employee by ID
  // GET method
  // Required: access_token from admin (only admin can get employee data, can be changed)
  // URL Parameter: id (employee ID)
  // Response: { "_id", "employeeId", "created_at", "updated_at", "contact", "department", "jobTitle" }
  // Expected error: { error: "Employee information not found" }
  getEmployeeInformation: (id:any) => `${backendURL}/employee/${id}/information`,

  // Update an employee's information
  // PUT method
  // Required: access_token from employee
  // Payload: { contact: string, jobTitle: string, department: string }
  // Response: { message }
  // Expected error: { error: "Employee does not exist" }
  updateEmployeeInformation: `${backendURL}/employee/information`,

  // Create a new document for an employee
  // POST method
  // Required: access_token from employee
  // Payload: { documentType: string, url: string }
  // Response: { message }
  // Expected error: { error: "This document already exists. If you want to update it, please use the update path" }
  createDocument: `${backendURL}/employee/document`,

  // Update an existing document for an employee
  // PUT method
  // Required: access_token from employee
  // Payload: { documentType: string, url: string }
  // Response: { message }
  // Expected error: { error: "Document not found" }
  updateDocument: `${backendURL}/employee/document`
};

export default BACKEND;
