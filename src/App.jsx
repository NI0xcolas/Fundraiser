import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Banner from './components/Banner';
import DiscoverAndImpactPage from './pages/DiscoverAndImpactPage'; // Importing the new page

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Banner />} exact />
          <Route path="/discover-and-impact" element={<DiscoverAndImpactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
