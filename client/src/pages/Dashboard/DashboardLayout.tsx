import { Outlet } from "react-router-dom"
import { Sidebar } from "../../components/Sidebar";

export const DashboardLayout = () => {

  return <div className="w-screen h-screen flex">
    <Sidebar items={[
      { label: 'Home', path: '/' },
      { label: 'Employee', path: '/' },
      { label: 'Home', path: '/' }
    ]} />
    <div>
      <Outlet />
    </div>
  </div>
}