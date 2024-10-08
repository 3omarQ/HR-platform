import React, { useState } from "react";
import { Button } from "../components/Button";
import { FormField } from "../components/FormField";
interface Employee {
  id: number;
  name: string;
  department: string;
  email: string;
}
interface Prop {
  employee: Employee;
}

export const EditEmployeeModal: React.FC<Prop> = ({ employee }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button
        variant="outline"
        onClick={toggleModal}
        type="button"
        className="px-3"
      >
        Edit
      </Button>

      {isOpen && (
        <div
          tabIndex={-1}
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full bg-slate-100 rounded-md shadow ">
            <div className="flex items-center justify-between p-4 border-b rounded-t">
              <h3 className="text-lg font-semibold text-gray-900 ">
                Edit Employee
              </h3>
              <button
                type="button"
                onClick={toggleModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-md text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form className="p-4">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <FormField
                  label="Name"
                  placeholder={employee.name}
                  onValueChange={() => {}}
                ></FormField>
                <FormField
                  label="Email"
                  placeholder={employee.email}
                  onValueChange={() => {}}
                ></FormField>
                <FormField
                  label="Department"
                  placeholder={employee.department}
                  onValueChange={() => {}}
                ></FormField>
              </div>
              <Button
                variant="gradient"
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center "
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
                Edit Employee
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
