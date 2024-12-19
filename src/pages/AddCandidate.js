import React, { useState } from 'react';
import FormComponent from '../components/FormComponent';
import ModalComponent from '../components/ModalComponent';
import axios from 'axios';
import "../styles/modalcomponent.css"
import { useNavigate } from 'react-router-dom';

const AddCandidate = () => {
  const [showModal, setShowModal] = useState(false); // Control confirmation modal visibility
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Control success modal visibility
  const [formData, setFormData] = useState(null); // Store form data temporarily
  const navigate = useNavigate();
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
    submitby:''
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
      lastUpdated: getCurrentDate(),
    };
    setFormData(updatedValues); // Save data temporarily
    setShowModal(true); // Show confirmation modal
    
  };
  
  const handleConfirmSubmit = async () => {
    setShowModal(false);

    try {
      
      if (formData.resume) {
        const file = formData.resume;

        // Convert the file to Base64
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = async () => {
          const payload = {
            ...formData,
            resume: reader.result, // Base64 encoded file
          };

          console.log('Candidate added successfully', {
            ...payload,
            resume: reader.result.slice(0, 50) + '...', // Display first 50 characters
          });

          // Send the payload with 'lastUpdate' to the API
          await axios.post('https://66d97b474ad2f6b8ed54d725.mockapi.io/login', payload, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
        };

        reader.onerror = (error) => {
          console.error('Error reading file:', error);
        };
        setShowSuccessModal(true);
      } else {
        // If no file, send data with 'lastUpdate'
        await axios.post('https://66d97b474ad2f6b8ed54d725.mockapi.io/login', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log('Candidate added successfully', formData);
        setShowSuccessModal(true);
      }
    } catch (error) {
      console.error('Error adding candidate:', error);
    }
   

  };
  
 
  



  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    navigate("/search-candidate");
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
