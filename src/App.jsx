
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import BantingPark from './BantingPark';
import FireDept from './FireDept';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App"> 
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/banting-park" element={<BantingPark />} />
          <Route path="/fire" element={<FireDept />} />
        </Routes>
        <MainContent />
        <Footer />
      </div>
      </Router>
  );
}

export default App;

