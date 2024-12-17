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
      // Generate current date in 'DD-MM-YYYY' format
      const currentDate = new Date();
      const day = String(currentDate.getDate()).padStart(2, '0'); // Add leading zero
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
      const year = currentDate.getFullYear();
      const formattedDate = `${day}-${month}-${year}`;

      // Add 'lastUpdate' field with the formatted date
      const updatedValues = {
        ...values,
        lastUpdate: formattedDate,
      };

      if (updatedValues.resume) {
        const file = updatedValues.resume;

        // Convert the file to Base64
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = async () => {
          const payload = {
            ...updatedValues,
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
      } else {
        // If no file, send data with 'lastUpdate'
        await axios.post('https://66d97b474ad2f6b8ed54d725.mockapi.io/login', updatedValues, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log('Candidate added successfully', updatedValues);
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
