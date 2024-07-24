import { useState } from "react";
import { FormField } from "../../components";
import { Card } from "../../components/Card";
import List from "../../components/List";
import { Page } from "../Page";
import { useNavigate } from "react-router-dom";

export const DepartmentsPage = () => {
  // Define columns and data for departments
  const columns = [
    "Name",
    "Head of Department",
    "Description",
    "Number of employees",
  ];

  const departments = [
    {
      name: "Web Development",
      chef: "Omar Kassar",
      description: "Handles all web development tasks.",
      number_of_employees: 5,
    },
    {
      name: "3D Art",
      chef: "Omar Kassar",
      description: "Handles all web development tasks.",
      number_of_employees: 5,
    },
    {
      name: "UI/UX Design",
      chef: "Omar Kassar",
      description: "Handles all web development tasks.",
      number_of_employees: 5,
    },
  ];

  const [filteredDepartments, setFilteredDepartments] = useState(departments);
  const navigate = useNavigate();

  // Handle input changes for filtering
  const handleInputChange = (searchItem: string) => {
    setFilteredDepartments(
      departments.filter((department) =>
        department.name.toLowerCase().includes(searchItem.toLowerCase())
      )
    );
  };

  return (
    <Page title="Manage Departments">
      <div className="flex gap-4">
        <Card
          head="Total departments"
          body={departments.length.toString()}
        ></Card>
        <Card
          head="Active Departments"
          body={departments.length.toString()}
        ></Card>
      </div>
      <Card className="flex flex-col justify-between gap-7">
        <div className="flex flex-row justify-start gap-5">
          <FormField
            label="Search Department"
            onValueChange={(searchItem) => {
              handleInputChange(searchItem);
            }}
          ></FormField>
        </div>
        <List
          columns={columns}
          data={filteredDepartments}
          type="withViewButton"
          onClick={() => navigate("/department-details")}
        ></List>
      </Card>
    </Page>
  );
};

export default DepartmentsPage;
