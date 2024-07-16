import { FC } from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

interface Prop {
  employeeName: string;
  menuName: string;
}

export const Topbar: FC<Prop> = ({ employeeName, menuName }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className=" bg-slate-100 flex justify-between items-center h-12 px-8">
        {/* Left side */}
        <span className="text-end">{menuName}</span>

        {/* Right side */}
        <Button className="text-start" onClick={() => navigate("/profile")}>
          {employeeName}
        </Button>
      </div>
      <hr className="w-full border-t-1 border-gray-400" />
    </div>
  );
};
