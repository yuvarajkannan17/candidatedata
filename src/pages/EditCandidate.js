import React, { useEffect, useState } from 'react';
import FormComponent from '../components/FormComponent';
import axios from 'axios';
import { useParams } from "react-router-dom";
import ModalComponent from '../components/ModalComponent';
import { useNavigate } from 'react-router-dom';

const EditCandidate = () => {
  const [showModal, setShowModal] = useState(false); // Control confirmation modal visibility
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Control success modal visibility
  const [candidateData, setCandidateData] = useState(null);
  const [editFormData, setEditFormData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCandidateData = async () => {
      try {
        const response = await axios.get(`https://66d97b474ad2f6b8ed54d725.mockapi.io/login/${id}`);
        setCandidateData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching candidate data:', error);
      }
    };

    fetchCandidateData();
  }, [id]);

  const handleConfirmEditSubmit = async (values) => {
     setEditFormData(values)
    setShowModal(true)

  };

  const handleEditSubmit= async()=>{
       setShowModal(false)
    try {
      await axios.put(`https://66d97b474ad2f6b8ed54d725.mockapi.io/login/${id}`, editFormData);
      console.log('Candidate updated successfully');
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error updating candidate:', error);
    }

  }

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    navigate("/search-candidate");
  };

  return (
    <div className="edit-candidate-page" >
      <h2>Edit Candidate</h2>
      {candidateData ? (
        <FormComponent initialValues={candidateData} onSubmit={handleConfirmEditSubmit} />
      ) : (
        <p>Loading...</p>
      )}

      <ModalComponent
        show={showModal}
        onHide={() => setShowModal(false)} // Close confirmation modal
        title="Confirm Submission"
        message="Are you sure you want to submit this candidate data?"
        onConfirm={handleEditSubmit} // Submit form data on confirm
        confirmLabel="Submit"
        cancelLabel="Cancel"
      />

      <ModalComponent
        show={showSuccessModal}
        onHide={handleSuccessModalClose}
        title="Success"
        message="Candidate data has been submitted successfully!"
        confirmLabel="OK"
        icon="/assets/greentikmark.png"
      />
    </div>
  );
};

export default EditCandidate;
