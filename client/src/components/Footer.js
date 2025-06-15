import React from 'react';
import './Footer.module.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 BudhGaya.com - All Rights Reserved</p>
      <div className="social-links">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
      </div>
      <div className="contact-us">
        <h3>Contact Us</h3>
              <p>Email: <a href="mailto:omycce@gmail.com">omycce@gmail.com</a></p>
        <p>Phone: <a href="tel:+911234567890">+91 12345 67890</a></p>
      </div>
    </footer>
  );
}

export default Footer;