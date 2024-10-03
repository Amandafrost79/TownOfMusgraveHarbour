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
import LoginPage from "./routes/LoginPage"; // Add login page import
import CouncilAvailability from "./routes/CouncilAvailability"; // Add councillor availability page import
import StaffTimesheet from "./routes/StaffTimesheet"; // Add staff timesheet page import
import { AuthProvider } from "./AuthContext"; // Add AuthProvider import
import "./App.css";
import Reminders from "./routes/Reminders";

function App() {
  return (
    <AuthProvider>
      <Router basename="/TownOfMusgraveHarbour">
        <div className="App">
          <Header />
          <Routes>
            <Route path="/TownOfMusgraveHarbour" element={<HomePage />} />
            <Route path="/town" element={<Town />} />
            <Route path="/community" element={<Community />} />
            <Route path="/banting-park" element={<BantingPark />} />
            <Route path="/fire" element={<FireDept />} />
            <Route path="/festival" element={<Festival />} />

            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/council-availability"
              element={<CouncilAvailability />}
            />
            <Route path="/staff-timesheet" element={<StaffTimesheet />} />
            <Route path="/reminders" element={<Reminders />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

// function App() {
//   return (
//     <Router basename="/TownOfMusgraveHarbour">
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/TownOfMusgraveHarbour" element={<HomePage />} />
//           <Route path="/town" element={<Town />} />
//           <Route path="/community" element={<Community />} />
//           <Route path="/banting-park" element={<BantingPark />} />
//           <Route path="/fire" element={<FireDept />} />
//           <Route path="/festival" element={<Festival />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

export default App;
