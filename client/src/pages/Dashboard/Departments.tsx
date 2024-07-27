import { useState } from "react";
import { Button, FormField } from "../../components";
import { Card } from "../../components/Card";
import List from "../../components/List";
import { Page } from "../Page";
import { useNavigate } from "react-router-dom";
import AddDepartmentModal from "../../modals/AddDepartmentModal";

export const DepartmentsPage = () => {
  const columns = [
    "ID",
    "Name",
    "Head of Department",
    "Description",
    "Number of employees",
  ];

  const departments = [
    {
      id: "1",
      name: "Web Development",
      head: "Omar Kassar",
      description: "description.",
      number_of_employees: 5,
    },
    {
      id: "2",
      name: "3D Art",
      head: "Omar Kassar",
      description: "description.",
      number_of_employees: 5,
    },
    {
      id: "3",
      name: "UI/UX Design",
      head: "Omar Kassar",
      description: "description.",
      number_of_employees: 5,
    },
  ];

  const [filteredDepartments, setFilteredDepartments] = useState(departments);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (searchItem: string) => {
    setFilteredDepartments(
      departments.filter((department) =>
        department.name.toLowerCase().includes(searchItem.toLowerCase())
      )
    );
  };

  return (
    <Page title="Manage Departments">
      <div className="flex gap-4 items-center">
        <Card
          head="Total departments"
          body={departments.length.toString()}
        ></Card>
        <Card
          head="Active Departments"
          body={departments.length.toString()}
        ></Card>
        <Button
          onClick={() => setIsAddModalOpen(true)}
          variant="gradient"
          className="w-40 ml-auto mx-9 "
        >
          Add New
        </Button>
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
          type="withButton"
          buttonName="View"
          onClick={(item) => navigate(`/departments/${item.id}`)}
        ></List>
      </Card>
      {isAddModalOpen && (
        <AddDepartmentModal onClose={() => setIsAddModalOpen(false)} />
      )}
    </Page>
  );
};

export default DepartmentsPage;
