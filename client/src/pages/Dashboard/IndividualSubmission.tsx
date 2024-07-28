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
    title: "Submission A",
    description: "Description of Submission A",
    date: "2023-07-01",
    status: "Pending",
    details: {
      submittedBy: "John Doe",
      reviewedBy: "Jane Smith",
      comments: "Some comments about the submission.",
    },
  };

  const submissionForModal = {
    id: submission.id,
    title: submission.title,
    description: submission.description,
    date: submission.date,
    status: submission.status,
  };

  return <Page title={`Submission: ${submission.title}`}></Page>;
};

export default IndividualSubmission;
