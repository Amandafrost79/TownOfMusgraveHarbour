import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer id="contact-section">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Contact Us</h2>
          <p><strong>Address:</strong><br /> Town of Musgrave Harbour<br />P.O.Box 159<br />181 Main street<br /> Musgrave Harbour, NL<br />A0G 3J0</p>
          <p><strong>Email:</strong> <a href="mailto:townofmusgraveharbour@outlook.com">townofmusgraveharbour@outlook.com</a></p>
          <p><strong>Phone:</strong> 709-655-2119</p>
        </div>
        <div className="footer-right">
          <h2>Local Info</h2>
          <p><strong>Weather:</strong> <a href="https://www.theweathernetwork.com/ca/weather/newfoundland-and-labrador/musgrave-harbour">View Weather for Musgrave Harbour</a></p>
          <p><strong>Fire Index:</strong> <a href="https://www.gov.nl.ca/ffa/public-education/forestry/forest-fires/fire-hazard-map/">Check Fire Index</a></p>
          <p><strong>Road Cams:</strong> <a href="https://www.gov.nl.ca/ti/roads/cameras/">Check Road Cams</a></p>
          <p><strong>Maps:</strong> <a href="https://street360.net/canada/newfoundland-and-labrador/musgrave-harbour.php">Get Directions and Street View</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Website developed by Freelance Web Developer, <strong>Amanda Frost</strong>.</p>
        <p>Photography and videography provided by <strong>Josh Hicks</strong> of, <strong>Josh's Eye In The Sky</strong>.</p>
        <p>&copy; 2024 Town of Musgrave Harbour. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;