import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/SearchCandidate.css';
import { useNavigate } from 'react-router-dom';

const SearchCandidate = () => {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState([]);
  const [searchFilters, setSearchFilters] = useState({
    jobTitle: '',
    location: '',
    experience: '',
    skills: '',
    lastUpdated: '',
  });
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const candidatesPerPage = 10; // Display 10 candidates per page

  // Fetch candidate data
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get(
          'https://66d97b474ad2f6b8ed54d725.mockapi.io/login'
        );
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
    const { jobTitle, location, experience, skills, lastUpdated } = searchFilters;
    const result = candidates.filter((candidate) => {
      return (
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
            setSearchFilters({ ...searchFilters, lastUpdated: e.target.value })
          }
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Candidates Table */}
      <div className="candidates-table-wrapper">
        <table className="candidates-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job Title</th>
              <th>Experience</th>
              <th>Location</th>
              <th>Skills</th>
              <th>Last Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentCandidates.length > 0 ? (
              currentCandidates.map((candidate) => (
                <tr key={candidate.id}>
                  <td>{candidate.name}</td>
                  <td>{candidate.jobTitle}</td>
                  <td>{candidate.yearsOfExperience}</td>
                  <td>{candidate.currentLocation}</td>
                  <td>{candidate.skills}</td>
                  <td>
                    {new Date(candidate.updatedAt).toLocaleDateString()}
                  </td>
                  <td>
                    <button
                      className="actions-button"
                      onClick={() => handleView(candidate)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No candidates found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchCandidate;
