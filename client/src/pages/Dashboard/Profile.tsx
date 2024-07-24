import { FC } from "react";
import { Page } from "../Page";
import { Card } from "../../components";
import { ContactInfo } from "../../components/ContactInfo";
import List from "../../components/List";

interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  github: string;
}
interface Prop {
  employee: Employee;
}
const employeeExample = {
  contactInfo: {
    name: "Omar Kassar",
    email: "omarkassar202@gmail.com",
    phone: "28 362 303",
    github: "https://github.com/3omarQ",
  },
  employmentHistory: [
    {
      name: "Web Developer",
      date: "2020-2022",
    },
    {
      name: "Senior Web Developer",
      date: "2022-Present",
    },
  ],
  departments: ["Development", "UI/UX Design"],
  leaveBalance: {
    annualLeave: 15,
    sickLeave: 10,
    casualLeave: 5,
  },
};
const contactInfoArray = Object.entries(employeeExample.contactInfo).map(
  ([key, value]) => ({
    key,
    value,
  })
);

export const Profile: React.FC = () => {
  return (
    <Page title="Profile">
      <div className="flex flex-wrap gap-10">
        <Card
          head="Contact Info"
          className=" flex flex-col w-full md:w-2/5 gap-5"
        >
          <List
            columns={[]}
            data={contactInfoArray}
            type="withoutViewButton"
            onClick={() => {}}
          ></List>
        </Card>
        <Card
          head="Employment history"
          className="flex flex-col w-full md:w-2/5 gap-5"
        >
          <List
            columns={["Post", "Duration"]}
            data={employeeExample.employmentHistory}
            type="withoutViewButton"
            onClick={() => {}}
          ></List>
        </Card>
        <Card head="Departments" className="w-full md:w-2/5">
          Departments
        </Card>
        <Card head="Leave balance" className="w-full md:w-2/5">
          Leave Balance
        </Card>
      </div>
    </Page>
  );
};

export default Profile;
