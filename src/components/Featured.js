import React from 'react';

function Featured() {
  return (
    <div className="featured" id="top-attractions">
      <div className="card">
        <img className="card-img" src="https://upload.wikimedia.org/wikipedia/commons/2/28/Mahabodhi_Temple_Bodh_Gaya_Bihar.jpg" alt="Mahabodhi Temple" />
        <div className="card-content">
          <div className="card-title">Mahabodhi Temple</div>
          <div className="card-desc">A UNESCO World Heritage Site, the Mahabodhi Temple is the ultimate pilgrimage site for Buddhists and a masterpiece of Indian architecture.</div>
          <a className="card-link" href="https://en.wikipedia.org/wiki/Mahabodhi_Temple" target="_blank" rel="noopener">Learn More</a>
        </div>
      </div>
      <div className="card">
        <img className="card-img" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Bodhi_Tree%2C_Bodh_Gaya%2C_India.jpg" alt="Bodhi Tree" />
        <div className="card-content">
          <div className="card-title">Bodhi Tree</div>
          <div className="card-desc">Meditate under the legendary Bodhi Tree, believed to be a direct descendant of the tree under which Buddha attained enlightenment.</div>
          <a className="card-link" href="https://en.wikipedia.org/wiki/Bodhi_Tree" target="_blank" rel="noopener">Read More</a>
        </div>
      </div>
      <div className="card">
        <img className="card-img" src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Great_Buddha_Statue%2C_Bodh_Gaya.jpg" alt="Great Buddha Statue" />
        <div className="card-content">
          <div className="card-title">Great Buddha Statue</div>
          <div className="card-desc">An 80-foot serene Buddha statue surrounded by smaller statues, gardens, and a tranquil setting for reflection.</div>
          <a className="card-link" href="https://en.wikipedia.org/wiki/Great_Buddha_(Bodh_Gaya)" target="_blank" rel="noopener">See Details</a>
        </div>
      </div>
    </div>
  );
}

export default Featured;