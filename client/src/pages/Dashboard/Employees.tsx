import { Card } from "../../components/Card";
import ListItem from "../../components/ListItem";

export const EmployeePage = () => {
  const employees = [
    { id: 1, name: "Omar Kassar" },
    { id: 2, name: "Dhia Mlayah" },
  ];
  return (
    <div className="px-6 py-6 flex flex-col gap-5">
      <div className="text-2xl font-bold">Manage employees</div>
      <div className="flex gap-4">
        <Card head="Total employees" body={employees.length.toString()}></Card>
        <Card head="On leave" body={employees.length.toString()}></Card>
      </div>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id} className="my-2">
            <ListItem
              itemName={employee.name}
              buttons={[
                {
                  label: "Check Profile",
                  onClick: () =>
                    console.log(`Check profile of ${employee.name}`),
                  variant: "outline",
                },
                {
                  label: "Edit",
                  onClick: () => console.log(`Edit ${employee.name}`),
                  variant: "outline",
                },
                {
                  label: "Delete",
                  onClick: () => console.log(`Delete ${employee.name}`),
                  variant: "outline",
                  loading: false,
                },
              ]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
