// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddCandidate from './pages/AddCandidate';
import Header from './components/Header'; // Header component declared here

const App = () => {
  return (
    <Router>
      <Header /> {/* Header is declared here, so it appears on all pages */}
      <div  style={{backgroundColor:"#F5FFD7"}}>
        <div className="container " > {/* Bootstrap container for spacing */}
          <Routes>
            <Route path="/" element={<AddCandidate />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
