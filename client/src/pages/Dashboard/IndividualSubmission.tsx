import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { Page } from "../Page";
import List from "../../components/List";
import { Button } from "../../components";

const IndividualSubmission = () => {
  const { submissionId } = useParams();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const submission = {
    id: submissionId,
    job: "Frontend Developer",
    name: "John Doe",
    date: "2023-07-01",
    document: "resume.pdf",
    email: "johndoe@example.com",
    status: "Pending",
  };

  const infoArray = Object.entries(submission).map(([key, value]) => ({
    key,
    value,
  }));

  return (
    <Page title={`Submission Details: ${submission.job}`}>
      <div className="flex flex-wrap gap-8">
        <Card
          head="Submission Details"
          className="flex flex-col w-full md:w-2/5 gap-y-2"
        >
          <List
            columns={[]}
            data={infoArray}
            type="withoutButton"
            buttonName=""
            onClick={() => {}}
          />
        </Card>

        <Card head="Options">
          <Card className="flex flex-col gap-7">
            <Button variant="gradient" className="w-24 self-center">
              Download document
            </Button>
            <Button variant="gradient" className="w-24 self-center">
              Edit
            </Button>
            <Button variant="gradient" className="w-24 self-center">
              Edit
            </Button>
          </Card>
        </Card>
      </div>
    </Page>
  );
};

export default IndividualSubmission;
