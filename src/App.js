// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddCandidate from './pages/AddCandidate';
import Header from './components/Header'; // Header component declared here
import SearchCandidate from './pages/SearchCandidate';
import ViewCandidate from './pages/ViewCandidate';
import EditCandidate from './pages/EditCandidate';

const App = () => {
  return (
    <Router>
      <Header /> {/* Header is declared here, so it appears on all pages */}
      <div  style={{backgroundColor:"#F5FFD7"}}>
        <div className="container " > {/* Bootstrap container for spacing */}
          <Routes>
            <Route path="/" element={<AddCandidate />} />
            <Route path="/search-candidate" element={<SearchCandidate />} />
            <Route path="/view-candidate" element={<ViewCandidate />} />
            <Route path="/edit-candidate/:id" element={<EditCandidate />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
