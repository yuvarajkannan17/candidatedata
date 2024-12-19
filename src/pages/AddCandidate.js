import React, { useState } from 'react';
import FormComponent from '../components/FormComponent';
import ModalComponent from '../components/ModalComponent';
import axios from 'axios';
import "../styles/modalcomponent.css"

const AddCandidate = () => {
  const [showModal, setShowModal] = useState(false); // Control confirmation modal visibility
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Control success modal visibility
  const [formData, setFormData] = useState(null); // Store form data temporarily

  const initialValues = {
    name: '',
    jobTitle: '',
    yearsOfExperience: '',
    contactNumber: '',
    emailId: '',
    currentLocation: '',
    preferredLocation: '',
    ctc: '',
    ectc: '',
    noticePeriod: '',
    skills: '',
    remarks: '',
    resume: null,
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleAddSubmit = (values) => {
    const updatedValues = {
      ...values,
      lastUpdate: getCurrentDate(),
    };
    setFormData(updatedValues); // Save data temporarily
    setShowModal(true); // Show confirmation modal
  };

  const handleConfirmSubmit = async () => {
    setShowModal(false);
    try {
      const formDataToSend = new FormData();

      // Append all form data fields to FormData
      for (const key in formData) {
        if (key === 'resume' && formData[key]) {
          formDataToSend.append(key, formData[key]); // Add the file directly
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }

      // Log FormData content
      for (let pair of formDataToSend.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }

      // Make the API call
      const response = await axios.post(
        'https://66d97b474ad2f6b8ed54d725.mockapi.io/login',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('API Response:', response.data);
      setShowSuccessModal(true); // Show success modal
    } catch (error) {
      console.error('Error adding candidate:', error.response ? error.response.data : error.message);
    }
  };



  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="add-candidate-page">
      <h2>Add Candidate</h2>
      <FormComponent initialValues={initialValues} onSubmit={handleAddSubmit} />

      <ModalComponent
        show={showModal}
        onHide={() => setShowModal(false)} // Close confirmation modal
        title="Confirm Submission"
        message="Are you sure you want to submit this candidate data?"
        onConfirm={handleConfirmSubmit} // Submit form data on confirm
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

export default AddCandidate;
