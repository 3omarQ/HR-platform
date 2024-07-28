import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { Page } from "../Page";
import List from "../../components/List";
import { FormField } from "../../components";

const Submissions = () => {
  const navigate = useNavigate();

  const columns = ["ID", "Name", "Job", "Date", "Status"];
  const submissions = [
    {
      id: 1,
      name: "Omar Kassar",
      job: "Job of Submission A",
      date: "2023-07-01",
      status: "Interviewing",
    },
    {
      id: 2,
      name: "Omar Kassar",
      job: "Job of Submission B",
      date: "2023-07-05",
      status: "Approved",
    },
    {
      id: 3,
      name: "Dhia Mlayah",
      job: "Job of Submission C",
      date: "2023-07-10",
      status: "Rejected",
    },
  ];

  const [filteredSubmissions, setFilteredSubmissions] = useState(submissions);

  const handleInputChange = (searchItem: string) => {
    setFilteredSubmissions(
      submissions.filter((submission) =>
        submission.job.toLowerCase().includes(searchItem.toLowerCase())
      )
    );
  };

  return (
    <Page title="Manage Submissions">
      <div className="flex gap-4">
        <Card
          head="Total Submissions"
          body={submissions.length.toString()}
        ></Card>
        <Card
          head="Pending Submissions"
          body={submissions
            .filter((submission) => submission.status === "Pending")
            .length.toString()}
        ></Card>
      </div>
      <Card className="flex flex-col justify-between gap-7">
        <div className="flex flex-row justify-start gap-5">
          <FormField
            label="Search By Job"
            onValueChange={(searchItem) => {
              handleInputChange(searchItem);
            }}
          ></FormField>
        </div>
        <List
          columns={columns}
          data={filteredSubmissions}
          type="withButton"
          buttonName="View"
          onClick={(id) => navigate(`/submissions/${id}`)}
        ></List>
      </Card>
    </Page>
  );
};

export default Submissions;
