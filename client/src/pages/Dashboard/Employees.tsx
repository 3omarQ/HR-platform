import { useState } from "react";
import { FormField } from "../../components";
import { Card } from "../../components/Card";
import List from "../../components/List";

import { Page } from "../Page";
import { useNavigate } from "react-router-dom";

export const EmployeePage = () => {
  const columns = ["Id", "Name", "Department", "Email"];

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
  const navigate = useNavigate();

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
    <Page title="Manage employees">
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
        <List
          columns={columns}
          data={filteredEmployees}
          type="withViewButton"
          onClick={() => navigate("/profile")}
        ></List>
      </Card>
    </Page>
  );
};
