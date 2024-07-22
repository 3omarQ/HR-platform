import React from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { EditEmployeeModal } from "./EditEmployeeModal";

interface Employee {
  id: number;
  name: string;
  department: string;
  email: string;
}

const ListItem: React.FC<Employee> = ({ id, name, department, email }) => {
  const navigate = useNavigate();
  const employee = { id, name, department, email };
  return (
    <tr className="odd:bg-gray-50">
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {name}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{email}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {department}
      </td>
      <td className="whitespace-nowrap px-4 py-2 flex ">
        <Button
          onClick={() => {
            navigate("/profile");
          }}
          variant="outline"
          className="px-2 mx-2"
        >
          Profile
        </Button>
        <EditEmployeeModal employee={employee}></EditEmployeeModal>
      </td>
    </tr>
  );
};

export default ListItem;
