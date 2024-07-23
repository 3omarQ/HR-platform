import React from "react";
import ListItem from "./ListItem";
import { Card } from "./Card";

interface Prop<T> {
  columns: string[];
  data: T[];
  type: "withViewButton" | "withoutViewButton";
  onClick: (item: T) => void;
}

const List = <T extends Record<string, any>>({
  columns,
  data,
  type,
  onClick,
}: Prop<T>) => {
  return (
    <div className="overflow-x-auto rounded-md border border-gray-200">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        {columns.length > 0 && (
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900"
                >
                  {column}
                </th>
              ))}
              {type === "withViewButton" && <th className="px-4 py-2"></th>}
            </tr>
          </thead>
        )}
        <tbody className="divide-y divide-gray-200">
          {data.map((item, index) => (
            <ListItem
              key={index}
              item={item}
              type={type}
              onClick={() => onClick(item)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
