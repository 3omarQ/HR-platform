import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { Topbar } from "../../components/Topbar";

export const DashboardLayout = () => {
  const sidebarItems = [
    { label: "Home", path: "/" },
    { label: "Profile", path: "/profile" },
    { label: "Employees", path: "/employees" },
    { label: "Departments", path: "/departments" },
    { label: "Submissions", path: "/submissions" },
    { label: "Job Offers", path: "/joboffers" },
    { label: "Time Offs", path: "/timeoffs" },
  ];
  const path: string = useLocation().pathname;
  const currentItem = sidebarItems.find((item) => item.path === path);
  const menuName = currentItem?.label ?? "Unknown";
  return (
    <div className="h-screen flex">
      <div className="basis-1/6 min-w-[200px]">
        <Sidebar items={sidebarItems} />
      </div>

      <div className="w-screen">
        <Topbar employeeName="Omar Kassar" menuName={menuName} />
        <Outlet />
      </div>
    </div>
  );
};
