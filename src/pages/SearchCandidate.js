import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/SearchCandidate.css';
import { useNavigate } from 'react-router-dom';

const SearchCandidate = () => {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState([]);
  const [searchFilters, setSearchFilters] = useState({
    name: '',
    emailId: '',
    contactNumber: '',
    jobTitle: '',
    location: '',
    experience: '',
    skills: '',
    lastUpdated: '',
  });
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const candidatesPerPage = 20;

  // Fetch candidate data
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get(
          'https://66d97b474ad2f6b8ed54d725.mockapi.io/login'
        );
        console.log('API Response:', response.data); // Check the structure
        setCandidates(response.data);
        setFilteredCandidates(response.data);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchCandidates();
  }, []);

  // Handle search functionality
  const handleSearch = () => {
    const {
      name,
      emailId,
      contactNumber,
      jobTitle,
      location,
      experience,
      skills,
      lastUpdated,
    } = searchFilters;

    const result = candidates.filter((candidate) => {
      return (
        (!name ||
          candidate.name.toLowerCase().includes(name.toLowerCase())) &&
        (!emailId ||
          candidate.emailId.toLowerCase().includes(emailId.toLowerCase())) &&
        (!contactNumber ||
          candidate.contactNumber.includes(contactNumber)) &&
        (!jobTitle ||
          candidate.jobTitle.toLowerCase().includes(jobTitle.toLowerCase())) &&
        (!location ||
          candidate.currentLocation.toLowerCase().includes(location.toLowerCase())) &&
        (!experience || candidate.yearsOfExperience.toString().includes(experience)) &&
        (!skills || candidate.skills.toLowerCase().includes(skills.toLowerCase())) &&
        (!lastUpdated ||
          new Date(candidate.updatedAt).toLocaleDateString().includes(lastUpdated))
      );
    });

    setFilteredCandidates(result);
    setCurrentPage(1); // Reset to the first page after search

    // Reset search fields
    setSearchFilters({
      name: '',
      emailId: '',
      contactNumber: '',
      jobTitle: '',
      location: '',
      experience: '',
      skills: '',
      lastUpdated: '',
    });
  };

  // Navigate to candidate view page
  const handleView = (candidate) => {
    navigate('/view-candidate', { state: { candidate } });
  };

  // Pagination logic
  const indexOfLastCandidate = currentPage * candidatesPerPage;
  const indexOfFirstCandidate = indexOfLastCandidate - candidatesPerPage;
  const currentCandidates = filteredCandidates.slice(
    indexOfFirstCandidate,
    indexOfLastCandidate
  );

  const totalPages = Math.ceil(filteredCandidates.length / candidatesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="search-candidate-page">
      <h2>Search Candidate</h2>

      {/* Search Filters */}
      <div className="search-filters">
        <input
          type="text"
          placeholder="Search by name"
          value={searchFilters.name}
          onChange={(e) =>
            setSearchFilters({ ...searchFilters, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Search by emailId"
          value={searchFilters.emailId}
          onChange={(e) =>
            setSearchFilters({ ...searchFilters, emailId: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Search by contact number"
          value={searchFilters.contactNumber}
          onChange={(e) =>
            setSearchFilters({
              ...searchFilters,
              contactNumber: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Search by job title"
          value={searchFilters.jobTitle}
          onChange={(e) =>
            setSearchFilters({ ...searchFilters, jobTitle: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Search by location"
          value={searchFilters.location}
          onChange={(e) =>
            setSearchFilters({ ...searchFilters, location: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Search by experience"
          value={searchFilters.experience}
          onChange={(e) =>
            setSearchFilters({ ...searchFilters, experience: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Search by skills"
          value={searchFilters.skills}
          onChange={(e) =>
            setSearchFilters({ ...searchFilters, skills: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Search by last updated (DD/MM/YYYY)"
          value={searchFilters.lastUpdated}
          onChange={(e) =>
            setSearchFilters({
              ...searchFilters,
              lastUpdated: e.target.value,
            })
          }
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Candidates Table */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>EmailId</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Contact Number</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Job Title</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Experience</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Location</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Skills</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>
              Last Updated
            </th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentCandidates.length > 0 ? (
            currentCandidates.map((candidate) => (
              <tr key={candidate.id}>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                  {candidate.name}
                </td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                  {candidate.emailId}
                </td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                  {candidate.contactNumber}
                </td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                  {candidate.jobTitle}
                </td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                  {candidate.yearsOfExperience}
                </td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                  {candidate.currentLocation}
                </td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                  {candidate.skills}
                </td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                    {(candidate.lastUpdate)}
                </td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                  <button
                    onClick={() => handleView(candidate)}
                    style={{
                      padding: '5px 10px',
                      borderRadius: '5px',
                      backgroundColor: '#4caf50',
                      color: 'white',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" style={{ textAlign: 'center', padding: '10px' }}>
                No candidates found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          style={{
            padding: '5px 10px',
            borderRadius: '5px',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          }}
        >
          Previous
        </button>
        <span style={{ margin: '0 10px' }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          style={{
            padding: '5px 10px',
            borderRadius: '5px',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchCandidate;
