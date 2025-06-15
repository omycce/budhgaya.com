import React from 'react';
import './Footer.module.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="explorers-section">
        <h3>For Explorers Everywhere</h3>
        <p>Discover the world with us. Explore destinations, plan your trips, and immerse yourself in new cultures.</p>
        <div className="explorers-links">
          <a href="#top-attractions">Top Attractions</a>
          <a href="#explore">Explore</a>
          <a href="#travel-details">Travel Info</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>
      <div className="follow-us-section">
        <h3>Follow Us</h3>
        <p>Stay connected with us on social media.</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
      <p>&copy; 2025 BudhGaya.com - All Rights Reserved</p>
    </footer>
  );
}

export default Footer;