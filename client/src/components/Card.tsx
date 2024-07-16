import { FC } from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

import { logo } from "../assets";

interface Prop {
  head: string;
  body: string;
}
export const Card: FC<Prop> = (props) => {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
        {props.head}
      </h5>
      <p className="font-normal text-gray-700 ">{props.body}</p>
    </div>
  );
};
