import { FC } from "react";
import { Button } from "./Button"
import { useNavigate } from "react-router-dom";

import { logo } from '../assets'

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

  const signOut = () => {
    localStorage.removeItem("token")
    navigate("/")
    window.location.reload()
  }

  return <div className="w-72 bg-slate-100 flex flex-col justify-between">
    {/* Top side */}
    <div><img src={logo} alt="OK Studios" className="mx-auto my-4 max-w-36 w-full" /></div>

    {/* Middle side */}
    <div>{
      props.items.map(el => {
        return <Button className="w-full text-start px-8" onClick={() => navigate(el.path)}> {el.label} </Button>
      })
    }
    </div>

    {/* Bottom side */}
    <div>
      <Button className="w-full text-start px-8" onClick={signOut}> sign out </Button>
    </div>
  </div>
}