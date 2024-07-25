import { useParams } from "react-router-dom";

const DepartmentDetailPage = () => {
  const { departmentId } = useParams();
  // Fetch or find department details based on departmentId
  // This can be done using context, state, or a request to the backend
  const department = {
    id: departmentId,
    name: "Web Development",
    head: "Omar Kassar",
    description: "description.",
    number_of_employees: 5,
  };

  return (
    <div>
      <h1>{department.name}</h1>
      <p>Head of Department: {department.head}</p>
      <p>Description: {department.description}</p>
      <p>Number of Employees: {department.number_of_employees}</p>
    </div>
  );
};

export default DepartmentDetailPage;
