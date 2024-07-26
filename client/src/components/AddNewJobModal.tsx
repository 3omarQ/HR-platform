import React, { useState } from "react";
import { Button } from "./Button";
import { FormField } from "./FormField";

interface Prop {
  onClose: () => void;
}

export const AddNewJobModal: React.FC<Prop> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newJobOffer = {
      id: undefined, // generated in the backend?
      position,
      department,
      location,
      description,
    };

    /*backend stuff*/
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
          <div className="relative p-4 w-full max-w-md max-h-full bg-slate-100 rounded-md shadow ">
            <div className="flex items-center justify-between p-4 border-b rounded-t">
              <h3 className="text-lg font-semibold text-gray-900 ">
                Add New Job Offer
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
            <form className="p-4" onSubmit={handleSubmit}>
              <div className="flex flex-row flex-wrap gap-4 mb-4 grid-cols-2">
                <FormField
                  label="Position"
                  placeholder="Enter position"
                  value={position}
                  onValueChange={setPosition}
                ></FormField>
                <FormField
                  label="Department"
                  placeholder="Enter department"
                  value={department}
                  onValueChange={setDepartment}
                ></FormField>
                <FormField
                  label="Location"
                  placeholder="Enter location"
                  value={location}
                  onValueChange={setLocation}
                ></FormField>
                <FormField
                  label="Description"
                  placeholder="Enter description"
                  value={description}
                  onValueChange={setDescription}
                  type="textarea"
                ></FormField>
              </div>
              <Button
                variant="gradient"
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center "
              >
                Add Job Offer
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
