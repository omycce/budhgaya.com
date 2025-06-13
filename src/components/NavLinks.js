import React from 'react';

function NavLinks() {
  return (
    <div className="container">
      <h1>Navigation Links</h1>
      <ul className="navlist">
        <li><a href="/#top-attractions">Attractions</a></li>
        <li><a href="/#explore">Explore</a></li>
        <li><a href="/#gallery">Gallery</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#travel-details">Travel Info</a></li>
        <li><a href="/nav-links">All Nav-Links (This Page)</a></li>
      </ul>
      <a className="back-link" href="/">&larr; Back to Home</a>
    </div>
  );
}

export default NavLinks;