import { SignInPage, ResetPasswordPage, CheckEmailPage } from "./pages/Auth";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { DashboardLayout } from "./pages/Dashboard/DashboardLayout";
import { EmployeePage } from "./pages/Dashboard/Employees";
import GeneralPage from "./pages/Dashboard/General";
import Departments from "./pages/Dashboard/Departments";
import Submissions from "./pages/Dashboard/Submissions";
import JobOffers from "./pages/Dashboard/JobOffers";
import TimeOffs from "./pages/Dashboard/TimeOffs";
import Profile from "./pages/Dashboard/Profile";
import ChangePasswordPage from "./pages/Auth/ChangePasswordPage";
import { RecoveryProvider } from "./contexts/RecoveryContext";
import { useSession } from "./contexts/SessionContext";

function App() {
  const { token } = useSession();
  return <Router>{token ? <PrivateLayout /> : <PublicLayout />}</Router>;
}

const PrivateLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/" element={<GeneralPage />} />

        <Route path="/employees" element={<EmployeePage />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/leave-requests" element={<TimeOffs />} />

        <Route path="/jobs" element={<JobOffers />} />
        <Route path="/internships" element={<Submissions />} />
        <Route path="/submissions" element={<Submissions />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Profile />} />
      </Route>
    </Routes>
  );
};

const PublicLayout = () => {
  return (
    <RecoveryProvider>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/reset" element={<ResetPasswordPage />} />
        <Route path="/validate" element={<CheckEmailPage />} />
        <Route path="/changepassword" element={<ChangePasswordPage />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Catch-all route */}
      </Routes>
    </RecoveryProvider>
  );
};

export default App;
