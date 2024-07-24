interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  github: string;
}

interface ContactInfoProps {
  employee: Employee;
}
export const ContactInfo: React.FC<ContactInfoProps> = ({ employee }) => {
  return (
    <div>
      <dl className="max-w-md text-gray-900 divide-y divide-gray-200 ">
        <div className="flex flex-col py-3">
          <dt className="mb-1 text-gray-500 md:text-lg ">Name</dt>
          <dd className="text-lg font-semibold">{employee.name}</dd>
        </div>
        <div className="flex flex-col pb-3">
          <dt className="mb-1 text-gray-500 md:text-lg ">Email address</dt>
          <dd className="text-lg font-semibold">{employee.email}</dd>
        </div>
        <div className="flex flex-col pt-3">
          <dt className="mb-1 text-gray-500 md:text-lg ">Phone number</dt>
          <dd className="text-lg font-semibold">{employee.phone}</dd>
        </div>
        <div className="flex flex-col pt-3">
          <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
            Github
          </dt>
          <dd className="text-lg font-semibold">{employee.github}</dd>
        </div>
      </dl>
    </div>
  );
};
