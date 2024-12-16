import React from 'react';
import FormComponent from '../components/FormComponent';
import axios from 'axios';

const AddCandidate = () => {
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

  const handleAddSubmit = async (values) => {
    try {
      if (values.resume) {
        const file = values.resume;
  
        // Convert the file to Base64
        const reader = new FileReader();
        reader.readAsDataURL(file);
  
        reader.onload = async () => {
          // Prepare payload with Base64 encoded file
          const payload = {
            ...values,
            resume: reader.result, // Base64 encoded file
          };
  
          // Log a shortened version of the Base64 string
          console.log('Candidate added successfully', {
            ...payload,
            resume: reader.result.slice(0, 50) + '...', // Display first 50 characters
          });
  
          // Send the payload to the API
          await axios.post('https://66d97b474ad2f6b8ed54d725.mockapi.io/login', payload, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
        };
  
        reader.onerror = (error) => {
          console.error('Error reading file:', error);
        };
      } else {
        // If no file, send data without a file
        await axios.post('https://66d97b474ad2f6b8ed54d725.mockapi.io/login', values, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        console.log('Candidate added successfully', values);
      }
    } catch (error) {
      console.error('Error adding candidate:', error);
    }
  };
  
  
  

  return (
    <div className="add-candidate-page">
      <h2>Add Candidate</h2>
      <FormComponent initialValues={initialValues} onSubmit={handleAddSubmit} />
    </div>
  );
};

export default AddCandidate;
