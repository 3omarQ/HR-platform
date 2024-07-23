import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import { logo } from "../assets";
import { useSession } from "../contexts/SessionContext";
import { FaX } from "react-icons/fa6";

export interface NavItem {
  label: string;
  path?: string;
  items?: SubItem[]
}

interface SubItem {
  label: string;
  path: string;
}

interface Prop {
  items: NavItem[];
}
export const Sidebar: FC<Prop> = (props) => {
  const location = useLocation()
  const { user, signOut } = useSession()

  return (
    <div className="flex flex-col justify-between h-screen pb-2 fixed">
      {/* Top side */}
      <div className="flex p-4">
        <img src={logo} alt="OK Studios" className="h-16 pt-1 px-4" />
      </div>

      {/* Middle side */}
      <ul className="flex flex-col gap-2 h-full mt-6 space-y-1 p-4 overflow-auto">
        {props.items.map((el) => {
          const active = location.pathname === el.path || el.items?.some(e => e.path === location.pathname)

          const navKey = `okstudio.navbar.${el.label}`
          const isOpen = localStorage.getItem(navKey) === 'true'
          const onSetOpen = () => localStorage.setItem(navKey, `${!isOpen}`)

          if (el.items) {
            return <li className="flex w-full">
              {active && (<div className="rounded-l-md bg-purple-600 w-1.5 h-9" />)}
              <details open={isOpen} className="group [&_summary::-webkit-details-marker]:hidden w-full">
                <summary
                  className="flex cursor-pointer items-center justify-between rounded-r-md px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  onClick={onSetOpen}
                >
                  <span className="text-sm font-medium"> {el.label} </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  {
                    el.items.map(subItem => {
                      const active = location.pathname === subItem.path
                      return <li className="flex w-full">
                        {active && (<div className="rounded-l-md bg-purple-600 w-1.5" />)}
                        <Link
                          to={subItem.path ?? '#'}
                          className={`block rounded-r-md hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 w-full ${active ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    })
                  }
                </ul>
              </details>
            </li>
          }
          return <li className="flex w-full">
            {active && (<div className="rounded-l-md bg-purple-600 w-1.5" />)}
            <Link
              to={el.path ?? '#'}
              className={`block rounded-r-md hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 w-full ${active ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
            >
              {el.label}
            </Link>
          </li>
        })}
      </ul>

      {/* Bottom side */}
      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 px-4">
        <Link to="/profile" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
          <img
            alt="Profile"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="size-10 rounded-full object-cover"
          />

          <div>
            <p className="text-xs">
              <strong className="block font-medium">{user?.name}</strong>

              <span> {user?.email} </span>
            </p>
          </div>
        </Link>
      </div>
      <div className="px-4">
        <Link
          to={'/'}
          onClick={signOut}
          className={`flex items-center justify-between gap-4 rounded-r-md hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 w-full capitalize`}
        >
          Logout
          <FaX />
        </Link>
      </div>
    </div >
  );
};
