
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Header from './Header';
// import MainContent from './MainContent';
import Footer from './Footer';
import Town from './Town';
import Community from './Community';
import BantingPark from './BantingPark';
import FireDept from './FireDept';
import Festival from './Festival';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App"> 
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/town" element={<Town />} />
          <Route path="/community" element={<Community />} />
          <Route path="/banting-park" element={<BantingPark />} />
          <Route path="/fire" element={<FireDept />} />
          <Route path="/festival" element={<Festival />} />

        </Routes>
        {/* <MainContent /> */}
        <Footer />
      </div>
      </Router>
  );
}

export default App;

