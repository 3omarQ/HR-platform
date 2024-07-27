import { useEffect, useState } from "react";
import { Button, FormField } from "../../components";
import { Card } from "../../components/Card";
import List from "../../components/List";

import { Page } from "../Page";
import { useNavigate } from "react-router-dom";
import AddEmployeeModal from "../../modals/AddEmployeeModal";
import { getEmployeeList } from "../../services/employee";

export const EmployeePage = () => {
  const columns = ["Id", "Name", "Department", "Email"];

  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      const employeeList = await getEmployeeList();
      setEmployees(employeeList);
      setFilteredEmployees(employeeList);
    };

    fetchEmployees();
  }, []);

  const handleInputChange = (
    searchItemEmployee: string,
    searchItemDepartment: string
  ) => {};

  return (
    <Page title="Manage employees">
      <div className="flex gap-4 items-center w-full">
        <Card head="Total employees" body={employees.length.toString()}></Card>
        <Card head="Onboarding" body={employees.length.toString()}></Card>
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
          type="withButton"
          buttonName="View"
          onClick={() => navigate("/profile")}
        ></List>
      </Card>
      {isAddModalOpen && (
        <AddEmployeeModal onClose={() => setIsAddModalOpen(false)} />
      )}
    </Page>
  );
};
