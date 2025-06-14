import React from 'react';

function Header() {
  return (
    <header className="main-header">
      <nav className="nav">
        <a className="logo" href="#">budhgaya<span>.com</span></a>
        <div className="nav-links">
          <a href="#top-attractions">Attractions</a>
          <a href="#explore">Explore</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#cuisine">Cuisine</a>
          <a href="#events">Events</a>
          <a href="#faq">FAQ</a>          {/* Make sure this matches the ID in FAQ component */}
          <a href="#travel-details">Travel Info</a>  {/* Make sure this matches the ID in TravelDetails component */}
        </div>
      </nav>
    </header>
  );
}

export default Header;