import React from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { EditEmployeeModal } from "../modals/EditEmployeeModal";

type ListItemType = "withButton" | "withoutButton";

interface ListItemProps<T> {
  item: T;
  type: ListItemType;
  buttonName: string;
  onClick: () => void;
}

const ListItem = <T extends Record<string, any>>({
  item,
  type,
  buttonName,
  onClick,
}: ListItemProps<T>) => {
  const navigate = useNavigate();

  return (
    <tr className="odd:bg-gray-50">
      {Object.entries(item).map(([key, value], index) => (
        <td
          key={key}
          className={`whitespace-nowrap px-4 py-2 text-gray-700 ${
            index === 0 ? "font-bold capitalize" : ""
          }`}
        >
          {value}
        </td>
      ))}
      {type === "withButton" && (
        <td className="whitespace-nowrap px-4 py-2">
          <Button onClick={onClick} variant="outline" className="px-2 mx-2">
            {buttonName}
          </Button>
        </td>
      )}
    </tr>
  );
};

export default ListItem;
