import { useState } from "react";
import { FormField } from "../../components";
import { Card } from "../../components/Card";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import Departments from "./Departments";

export const EmployeePage = () => {
  const columns = ["Name", "Email", "Department"];

  const employees = [
    {
      id: 1,
      name: "Omar Kassar",
      department: "Web Development",
      email: "omarkassar202@gmail.com",
    },
    {
      id: 2,
      name: "Dhia Mlayah",
      department: "Web Development",
      email: "omarkassar202@gmail.com",
    },
    {
      id: 3,
      name: "Jhon Doe",
      department: "3D Art",
      email: "omarkassar202@gmail.com",
    },
  ];

  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  const handleInputChange = (
    searchItemEmployee: string,
    searchItemDepartment: string
  ) => {
    setFilteredEmployees(
      employees.filter(
        (employee) =>
          employee.name
            .toLowerCase()
            .includes(searchItemEmployee.toLowerCase()) &&
          employee.department
            .toLowerCase()
            .includes(searchItemDepartment.toLowerCase())
      )
    );
  };

  return (
    <div className="px-6 py-6 flex flex-col gap-5 bg-slate-100 h-full">
      <div className="text-2xl font-bold">Manage employees</div>
      <div className="flex gap-4">
        <Card head="Total employees" body={employees.length.toString()}></Card>
        <Card head="Onboarding" body={employees.length.toString()}></Card>
      </div>
      <Card className="flex flex-col justify-between gap-7">
        <div className="flex flex-row justify-start gap-5">
          <FormField
            label="Search Employee"
            onValueChange={(searchItem) => {
              handleInputChange(searchItem, "");
            }}
          ></FormField>
          <FormField
            label="Search By Department"
            onValueChange={(searchItem) => {
              handleInputChange("", searchItem);
            }}
          ></FormField>
        </div>
        <List columns={columns} data={filteredEmployees}></List>
      </Card>
    </div>
  );
};
