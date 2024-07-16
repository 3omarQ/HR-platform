import React from "react";
import { Button } from "./Button";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "gradient" | "outline";
  loading?: boolean;
}
interface Prop {
  itemName: string;
  buttons: ButtonProps[];
}
const ListItem: React.FC<Prop> = ({ itemName, buttons }) => {
  return (
    <div className="flex items-center justify-around space-x-2">
      <span className="mr-2">{itemName}</span>
      <div className="flex justify-between gap-7">
        {buttons.map((button, index) => (
          <Button
            key={index}
            onClick={button.onClick}
            variant={button.variant}
            loading={button.loading}
            className="px-4"
          >
            {button.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ListItem;
