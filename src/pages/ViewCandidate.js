import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaDownload, FaEdit, FaTrashAlt } from 'react-icons/fa'; // Import the icons
import '../styles/ViewCandidate.css';

const ViewCandidate = () => {
  const { state } = useLocation();
  const { candidate } = state;  // Candidate data passed from SearchCandidate
  const navigate = useNavigate();

  const handleDownload = () => {
    // Logic for downloading resume (mock function)
    alert('Downloading resume...');
  };

  const handleEdit = () => {
    // Logic to navigate to Edit page (mock function)
    navigate('/editcandidate', { state: { candidate } });
  };

  const handleDelete = () => {
    // Logic for deleting candidate (mock function)
    alert('Candidate deleted...');
  };

  return (
    <div className="view-candidate-page">
      <div className="actions">
        {/* Download Icon */}
        <FaDownload 
          onClick={handleDownload} 
          title="Download Resume" 
          style={{
            cursor: 'pointer', 
            fontSize: '24px', 
            marginRight: '20px', 
            color: '#4caf50' 
          }} 
        />
        
        {/* Edit Icon */}
        <FaEdit 
          onClick={handleEdit} 
          title="Edit Candidate" 
          style={{
            cursor: 'pointer', 
            fontSize: '24px', 
            marginRight: '20px', 
            color: '#ff9800' 
          }} 
        />

        {/* Delete Icon */}
        <FaTrashAlt 
          onClick={handleDelete} 
          title="Delete Candidate" 
          style={{
            cursor: 'pointer', 
            fontSize: '24px', 
            color: '#f44336' 
          }} 
        />
      </div>

      <h2>Candidate Details</h2>
      <div className="candidate-details">
        <p><strong>Name:</strong> {candidate.name}</p>
        <p><strong>Job Title:</strong> {candidate.jobTitle}</p>
        <p><strong>Years of Experience:</strong> {candidate.yearsOfExperience}</p>
        <p><strong>Contact Number:</strong> {candidate.contactNumber}</p>
        <p><strong>Email ID:</strong> {candidate.emailId}</p>
        <p><strong>Current Location:</strong> {candidate.currentLocation}</p>
        <p><strong>Preferred Location:</strong> {candidate.preferredLocation}</p>
        <p><strong>CTC:</strong> {candidate.ctc}</p>
        <p><strong>Expected CTC:</strong> {candidate.ectc}</p>
        <p><strong>Notice Period:</strong> {candidate.noticePeriod}</p>
        <p><strong>Skills:</strong> {candidate.skills}</p>
        <p><strong>Remarks:</strong> {candidate.remarks}</p>
        <p><strong>Resume:</strong> {candidate.resume ? 'Available' : 'Not Available'}</p>
      </div>
    </div>
  );
};

export default ViewCandidate;
