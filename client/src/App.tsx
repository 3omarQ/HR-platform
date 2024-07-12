import { SignInPage, ResetPasswordPage, CheckEmailPage } from "./pages/Auth";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "./pages/Dashboard/DashboardLayout";
import { EmployeePage } from "./pages/Dashboard/Employee";

function App() {
  return (
    <Router>
      {
        localStorage.getItem("token") ? <PrivateLayout /> : <PublicLayout />
      }
    </Router>
  );
}


const PrivateLayout = () => {
  return <Routes>
    <Route path="/" element={<DashboardLayout />} >
      <Route path="/employee" element={<EmployeePage />} />
    </Route>
  </Routes>
}

const PublicLayout = () => {
  return <Routes>
    <Route path="/" element={<SignInPage />} />
    <Route path="/reset" element={<ResetPasswordPage />} />
    <Route path="/validate" element={<CheckEmailPage />} />
  </Routes>
}

export default App;
