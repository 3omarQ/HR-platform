import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { Page } from "../Page";
import List from "../../components/List";
import { Button } from "../../components";
import { EditEmployeeModal } from "../../components/EditEmployeeModal";
import { EditDepartmentModal } from "../../components/EditDepartmentModal"; // Import the modal

const IndividualDepartment = () => {
  const { departmentId } = useParams();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State for modal visibility

  const department = {
    id: departmentId,
    name: "Web Development",
    general: {
      head: "Omar Kassar",
      description: "Handles all web development tasks.",
      number_of_employees: 5,
    },
    members: [
      {
        name: "Omar Kassar",
        role: "Senior Developer",
        contact: "omarkassar202@gmail.com",
      },
      {
        name: "John Doe",
        role: "Junior Developer",
        contact: "omarkassar202@gmail.com",
      },
      {
        name: "Jane Smith",
        role: "Junior Developer",
        contact: "janesmith@example.com",
      },
    ],
    projects: [
      { title: "Project A", description: "Description of Project A" },
      { title: "Project B", description: "Description of Project B" },
    ],
  };

  const generalInfoArray = Object.entries(department.general).map(
    ([key, value]) => ({
      key,
      value,
    })
  );
  const departmentForModal = {
    id: department.id,
    name: department.name,
    head: department.general.head,
    description: department.general.description,
  };

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  return (
    <Page title={`Department: ${department.name}`}>
      <div className="flex flex-wrap gap-8">
        <Card
          head="General Information"
          className="flex flex-col w-full md:w-2/5 gap-y-2"
        >
          <List
            columns={[]}
            data={generalInfoArray}
            onClick={() => {}}
            type="withoutViewButton"
          />
        </Card>

        <Card
          head="Department Members"
          className="flex flex-col w-full md:w-2/5 flex-grow gap-y-2"
        >
          <List
            columns={["Name", "Role", "Contact"]}
            data={department.members}
            type="withViewButton"
            onClick={() => {}}
          />
        </Card>

        <Card head="Projects " className="flex flex-col w-full gap-2">
          <List
            columns={["Title", "Description"]}
            data={department.projects}
            type="withViewButton"
            onClick={() => {}}
          />
        </Card>

        <Button variant="gradient" className="w-24" onClick={toggleEditModal}>
          Edit
        </Button>
      </div>

      {isEditModalOpen && (
        <EditDepartmentModal
          department={departmentForModal}
          onClose={toggleEditModal}
        />
      )}
    </Page>
  );
};

export default IndividualDepartment;
