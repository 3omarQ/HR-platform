import { SignInPage, ResetPasswordPage, CheckEmailPage } from "./pages/Auth";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "./pages/Dashboard/DashboardLayout";
import { EmployeePage } from "./pages/Dashboard/Employees";
import Departments from "./pages/Dashboard/Departments";
import Submissions from "./pages/Dashboard/Submissions";
import JobOffers from "./pages/Dashboard/JobOffers";
import TimeOffs from "./pages/Dashboard/TimeOffs";
import Profile from "./pages/Dashboard/Profile";

function App() {
  return (
    <Router>
      {localStorage.getItem("token") ? <PrivateLayout /> : <PublicLayout />}
    </Router>
  );
}

const PrivateLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/employees" element={<EmployeePage />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/submissions" element={<Submissions />} />
        <Route path="/joboffers" element={<JobOffers />} />
        <Route path="/timeoffs" element={<TimeOffs />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

const PublicLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/reset" element={<ResetPasswordPage />} />
      <Route path="/validate" element={<CheckEmailPage />} />
    </Routes>
  );
};

export default App;
