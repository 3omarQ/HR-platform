import { FC } from "react";
import { Button } from "./Button"
import { useNavigate } from "react-router-dom";

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
  items: Item[]
}
export const Sidebar: FC<Prop> = (props) => {
  const navigate = useNavigate()
  return <div className="w-80 bg-slate-100">
    {
      props.items.map(el => {
        return <Button className="w-full" onClick={() => navigate(el.path)}> {el.label} </Button>
      })
    }
  </div>
}