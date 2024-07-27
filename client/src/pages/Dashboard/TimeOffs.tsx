import { useState } from "react";
import { FormField } from "../../components";
import { Card } from "../../components/Card";
import List from "../../components/List";
import { Page } from "../Page";
import { useNavigate } from "react-router-dom";

interface LeaveRequest {
  id: number;
  employeeName: string;
  leaveType: string;
  startDate: string;
  endDate: string;
  status: string;
}

export const TimeOffs = () => {
  const columns = [
    "ID",
    "Employee Name",
    "Leave Type",
    "Start Date",
    "End Date",
    "Status",
  ];

  const leaveRequests: LeaveRequest[] = [
    {
      id: 1,
      employeeName: "Omar Kassar",
      leaveType: "Annual",
      startDate: "2024-07-01",
      endDate: "2024-07-15",
      status: "Approved",
    },
    {
      id: 2,
      employeeName: "Dhia Mlayah",
      leaveType: "Sick",
      startDate: "2024-06-10",
      endDate: "2024-06-12",
      status: "Pending",
    },
    {
      id: 3,
      employeeName: "John Doe",
      leaveType: "Casual",
      startDate: "2024-05-20",
      endDate: "2024-05-22",
      status: "Rejected",
    },
  ];

  const [filteredLeaveRequests, setFilteredLeaveRequests] =
    useState(leaveRequests);
  const navigate = useNavigate();

  const handleInputChange = (searchItem: string) => {
    setFilteredLeaveRequests(
      leaveRequests.filter((request) =>
        request.employeeName.toLowerCase().includes(searchItem.toLowerCase())
      )
    );
  };

  return (
    <Page title="Manage Leave Requests">
      <div className="flex gap-4">
        <Card
          head="Total Leave Requests"
          body={leaveRequests.length.toString()}
        ></Card>
        <Card
          head="Pending Requests"
          body={leaveRequests
            .filter((r) => r.status === "Pending")
            .length.toString()}
        ></Card>
      </div>
      <Card className="flex flex-col justify-between gap-7">
        <div className="flex flex-row justify-start gap-5">
          <FormField
            label="Search Employee"
            onValueChange={(searchItem) => {
              handleInputChange(searchItem);
            }}
          ></FormField>
        </div>
        <List
          columns={columns}
          data={filteredLeaveRequests}
          type="withButton"
          buttonName="View"
          onClick={(item) => navigate(`/leave-request-details/${item.id}`)}
        ></List>
      </Card>
    </Page>
  );
};

export default TimeOffs;
