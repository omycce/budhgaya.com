import React from 'react';

const Hero = () => (
  <div className="hero">
    <img
      src="https://budhgaya.com/files/bodh-gaya-1.jpg"
      alt="Great Buddha Statue Budh Gaya"
      className="hero-bg-img"
    />
    <div className="hero-content">
      <h1>Budh Gaya Travel Guide</h1>
      <p>
        Sacred, serene, and full of history—Budh Gaya is where Buddha attained enlightenment. Discover world heritage temples, vibrant monasteries, and a spiritual atmosphere unlike anywhere else.
      </p>
      <div className="quicklinks">
        <a className="quicklink" href="#top-attractions">Top Attractions</a>
        <a className="quicklink" href="#explore">What to Explore</a>
        <a className="quicklink" href="#gallery">Gallery</a>
        <a className="quicklink" href="#about">About</a>
        <a className="quicklink" href="#travel-details">Plan Your Trip</a>
      </div>
    </div>
  </div>
);

export default Hero;