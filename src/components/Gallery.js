import React from 'react';

function Gallery() {
  return (
    <div className="gallery-section" id="gallery">
      <h2>Budh Gaya in Pictures</h2>
      <div className="gallery-grid">
        <img className="gallery-img" src="https://budhgaya.com/files/bodh-gaya-1.jpg" alt="Great Buddha Statue Budh Gaya" />
        <img className="gallery-img" src="https://upload.wikimedia.org/wikipedia/commons/2/28/Mahabodhi_Temple_Bodh_Gaya_Bihar.jpg" alt="Mahabodhi Temple - Gallery" />
        <img className="gallery-img" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Bodhi_Tree%2C_Bodh_Gaya%2C_India.jpg" alt="Bodhi Tree - Gallery" />
        <img className="gallery-img" src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Great_Buddha_Statue%2C_Bodh_Gaya.jpg" alt="Great Buddha Statue - Gallery" />
        <img className="gallery-img" src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Thai_monastery%2C_Bodh_Gaya%2C_India.jpg" alt="Thai Monastery - Gallery" />
        <img className="gallery-img" src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Sujata_Kuti_Bodh_Gaya.jpg" alt="Sujata Kuti - Gallery" />
        <img className="gallery-img" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Bodhgaya_Monks_India.jpg" alt="Monks in Budh Gaya - Gallery" />
      </div>
    </div>
  );
}

export default Gallery;