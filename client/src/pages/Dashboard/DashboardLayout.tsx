import { Outlet } from "react-router-dom";
import { NavItem, Sidebar } from "../../components/Sidebar";

export const sidebarItems: NavItem[] = [
  { label: "Home", path: "/" },
  {
    label: "People",
    path: "/people",
    items: [
      { label: "Employees", path: "/employees" },
      { label: "Departments", path: "/departments" },
      { label: "Leave Requests", path: "/leave-requests" },
    ]
  },
  {
    label: "Hiring",
    path: "/hiring",
    items: [
      { label: "Jobs", path: "/jobs" },
      { label: "Internships", path: "/internships" },
      { label: "Submissions", path: "/submissions" },
    ]
  },
  {
    label: "Finances",
    path: "/finances",
    items: [
      { label: "Payroll", path: "/payroll" },
      { label: "Invoices", path: "/invoices" },
      { label: "Billing", path: "/billing" },
    ]
  },
  {
    label: 'Account',
    items: [
      {
        label: "Profile",
        path: "/profile"
      },
      {
        label: "Settings",
        path: "/profile/settings"
      },
    ]
  }
];

export const DashboardLayout = () => {
  return (
    <div className="h-screen flex">
      <div className="basis-1/6 min-w-[260px] shadow">
        <Sidebar items={sidebarItems} />
      </div>

      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};
