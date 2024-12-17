import React, { useEffect, useState } from 'react';
import FormComponent from '../components/FormComponent';
import axios from 'axios';
import { useParams } from "react-router-dom";

const EditCandidate = () => {
  
  const [candidateData, setCandidateData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchCandidateData = async () => {
      try {
        const response = await axios.get(`https://66d97b474ad2f6b8ed54d725.mockapi.io/login/${id}`);
        setCandidateData(response.data);
      } catch (error) {
        console.error('Error fetching candidate data:', error);
      }
    };

    fetchCandidateData();
  }, [id]);

  const handleEditSubmit = async (values) => {
    try {
      await axios.put(`https://66d97b474ad2f6b8ed54d725.mockapi.io/login/${id}`, values);
      console.log('Candidate updated successfully');
    } catch (error) {
      console.error('Error updating candidate:', error);
    }
  };

  return (
    <div className="edit-candidate-page" style={{height:"100vh"}}>
      <h2>Edit Candidate</h2>
      {candidateData ? (
        <FormComponent initialValues={candidateData} onSubmit={handleEditSubmit} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditCandidate;
