import React from "react";
import ListItem from "./ListItem";
import { Card } from "./Card";

interface Employee {
  id: number;
  name: string;
  department: string;
  email: string;
}
interface Prop {
  columns: string[];
  data: Employee[];
}

const List: React.FC<Prop> = ({ columns, data }) => {
  return (
    <div>
      {" "}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              {columns.map((column) => {
                return (
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">
                    {column}
                  </th>
                );
              })}
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((employee) => (
              <ListItem
                key={employee.id}
                id={employee.id}
                name={employee.name}
                department={employee.department}
                email={employee.email}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
