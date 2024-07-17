import { FC } from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

import { logo } from "../assets";

interface Item {
  label: string;
  path: string;
  // icon?: any;
  // items?: {
  //   label: string;
  //   path: string;
  // }[]
}
interface Prop {
  items: Item[];
}
export const Sidebar: FC<Prop> = (props) => {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="  flex flex-col justify-between h-screen pb-6">
      {/* Top side */}
      <div className="flex flex-col justify-between  items-center h-12">
        <img src={logo} alt="OK Studios" className="h-10 pt-1" />
        <hr className="w-full border-t-1 border-gray-400 mt-1" />
      </div>

      {/* Middle side */}
      <div className="flex flex-col gap-2">
        {props.items.map((el) => {
          return (
            <Button
              className="w-full text-start px-8"
              onClick={() => navigate(el.path)}
            >
              {" "}
              {el.label}{" "}
            </Button>
          );
        })}
      </div>

      {/* Bottom side */}
      <div>
        <Button className="w-full text-start px-8" onClick={signOut}>
          {" "}
          sign out{" "}
        </Button>
      </div>
    </div>
  );
};
