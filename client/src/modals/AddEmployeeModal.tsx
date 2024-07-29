import React, { useState } from "react";
import { Button } from "../components/Button";
import { FormField } from "../components/FormField";
import { addNewEmployee } from "../services/employee";

interface Prop {
  onClose: () => void;
}

export const AddNewEmployeeModal: React.FC<Prop> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const [firstname, lastname] = name.split(" ");

    const response = await addNewEmployee(firstname, lastname, email, phone);

    if (response.error) {
      console.error("Failed to add new employee:", response.error);
    } else {
      console.log("New employee added successfully:", response);
    }

    handleClose();
  };

  return (
    <div>
      {isOpen && (
        <div
          tabIndex={-1}
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-3xl max-h-full bg-slate-100 rounded-md shadow ">
            <div className="flex items-center justify-between p-4 border-b rounded-t">
              <h3 className="text-lg font-semibold text-gray-900 ">
                Add New Employee
              </h3>
              <button
                type="button"
                onClick={handleClose}
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
            <form className="p-4 " onSubmit={handleSubmit}>
              <div className="flex flex-row flex-wrap gap-4 mb-4">
                <FormField label="CV / Resume" type="file"></FormField>
                <FormField
                  label="Name"
                  placeholder="Enter name"
                  value={name}
                  onValueChange={setName}
                ></FormField>

                <FormField
                  label="Email"
                  placeholder="Enter email"
                  value={email}
                  onValueChange={setEmail}
                ></FormField>
                <FormField
                  label="Phone"
                  placeholder="Enter phone number"
                  value={phone}
                  onValueChange={setPhone}
                ></FormField>
                <FormField
                  label="Department"
                  placeholder="Enter department"
                  value={department}
                  onValueChange={setDepartment}
                ></FormField>
                <FormField
                  label="Position"
                  placeholder="Enter position"
                  value={position}
                  onValueChange={setPosition}
                ></FormField>
                <FormField
                  label="Location"
                  placeholder="Enter location"
                  value={location}
                  onValueChange={setLocation}
                ></FormField>
                <FormField
                  label="Start Date"
                  placeholder="Enter start date"
                  value={startDate}
                  onValueChange={setStartDate}
                  type="date"
                ></FormField>
              </div>
              <Button
                variant="gradient"
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center "
              >
                Add Employee
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewEmployeeModal;
