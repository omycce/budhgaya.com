import React from 'react';
import { Helmet } from 'react-helmet';
import './Cuisine.module.css';

function Cuisine() {
  return (
      <section className="cuisine-section" id="cuisine">
          <h2>Local Cuisine to Try in Bodh Gaya</h2>
          <ul>
              <li><b>Litti Chokha:</b> Roasted wheat balls stuffed with spiced gram flour, served with mashed vegetables.</li>
              <li><b>Momos:</b> Tibetan-style dumplings, popular in local markets.</li>
              <li><b>Samosas & Sweets:</b> Try fresh samosas and local sweets like peda and jalebi.</li>
              <li><b>Thukpa:</b> A hearty noodle soup, perfect for cool evenings.</li>
          </ul>
      <Helmet>
        <title>Local Cuisine of Bodh Gaya | Must-Try Food in Bodh Gaya</title>
        <meta
          name="description"
          content="Discover the best local cuisine in Bodh Gaya. Try Litti Chokha, Momos, Samosas, and more when you visit Bodh Gaya."
        />
        <meta
          name="keywords"
          content="Bodh Gaya, local cuisine, food, Litti Chokha, Momos, Samosas, Thukpa, sweets"
        />
      </Helmet>
      <h2>Local Cuisine to Try in Bodh Gaya</h2>
      <ul>
        <li><b>Litti Chokha:</b> Roasted wheat balls stuffed with spiced gram flour, served with mashed vegetables.</li>
        <li><b>Momos:</b> Tibetan-style dumplings, popular in local markets.</li>
        <li><b>Samosas & Sweets:</b> Try fresh samosas and local sweets like peda and jalebi.</li>
        <li><b>Thukpa:</b> A hearty noodle soup, perfect for cool evenings.</li>
      </ul>
    </section>
  );
}

export default Cuisine;