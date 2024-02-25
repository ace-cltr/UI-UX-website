import React from "react";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>Categories</h3>
        <ul style={{ margin :0 }}>
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact</h3>
        <ul style={{ listStyleType: "none" }}>
          <li>Email: example@example.com</li>
          <li>Phone: 123-456-789</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Country</h3>
        <select className="drop-down-footer">
          <option>United States</option>
          <option>United Kingdom</option>
          <option>Canada</option>
          <option>India</option>
        </select>
      </div>
    </footer>
  );
}

export default Footer;
