import { useNavigate } from "react-router-dom";
import { Card, FormField } from "../../components";
import List from "../../components/List";
import { Page } from "../Page";
import { useState } from "react";
import { EditJobOfferModal } from "../../components/EditJobOfferModal";

export const JobOffers = () => {
  const columns = ["ID", "Position", "Department", "Location", "Description"];

  const jobOffers = [
    {
      id: "1",
      position: "Frontend Developer",
      department: "Web Development",
      location: "Remote",
      description:
        "Develop and maintain the front end of our web applications.",
    },
    {
      id: "2",
      position: "3D Artist",
      department: "3D Art",
      location: "On-site",
      description: "Create 3D models and animations for our projects.",
    },
    {
      id: "3",
      position: "UI/UX Designer",
      department: "UI/UX Design",
      location: "Hybrid",
      description: "Design user interfaces and improve user experience.",
    },
  ];

  const [filteredJobOffers, setFilteredJobOffers] = useState(jobOffers);
  const [selectedJobOffer, setSelectedJobOffer] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (searchItem: string) => {
    setFilteredJobOffers(
      jobOffers.filter((offer) =>
        offer.position.toLowerCase().includes(searchItem.toLowerCase())
      )
    );
  };

  const handleViewButtonClick = (jobOffer: any) => {
    setSelectedJobOffer(jobOffer);
    setIsEditModalOpen(true);
  };

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  return (
    <Page title="Manage Job Offers">
      <div className="flex gap-4">
        <Card head="Total Job Offers" body={jobOffers.length.toString()}></Card>
        <Card
          head="Active Job Offers"
          body={jobOffers.length.toString()}
        ></Card>
      </div>
      <Card className="flex flex-col justify-between gap-7">
        <div className="flex flex-row justify-start gap-5">
          <FormField
            label="Search Job Offers"
            onValueChange={(searchItem) => {
              handleInputChange(searchItem);
            }}
          ></FormField>
        </div>
        <List
          columns={columns}
          data={filteredJobOffers}
          type="withViewButton"
          onClick={handleViewButtonClick}
        ></List>
      </Card>
      {isEditModalOpen && selectedJobOffer && (
        <EditJobOfferModal
          jobOffer={selectedJobOffer}
          onClose={toggleEditModal}
        />
      )}
    </Page>
  );
};

export default JobOffers;
