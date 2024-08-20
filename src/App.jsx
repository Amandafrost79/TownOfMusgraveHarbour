import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Town from "./routes/Town";
import Community from "./routes/Community";
import BantingPark from "./routes/BantingPark";
import FireDept from "./routes/FireDept";
import Festival from "./routes/Festival";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/TownOfMusgraveHarbour" element={<HomePage />} />
          <Route path="/town" element={<Town />} />
          <Route path="/community" element={<Community />} />
          <Route path="/banting-park" element={<BantingPark />} />
          <Route path="/fire" element={<FireDept />} />
          <Route path="/festival" element={<Festival />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
