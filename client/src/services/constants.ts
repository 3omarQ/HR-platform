const backendURL = process.env.REACT_APP_BACKEND_URL;

const BACKEND = {
  // auth endpoints
  signIn: `${backendURL}/auth`,
  forgetPassword: `${backendURL}/auth/forget-password`,
  resetPassword: `${backendURL}/auth/reset-password`,

  // employees endpoints
  employeesList: `${backendURL}/employee/`,
};

export default BACKEND;
