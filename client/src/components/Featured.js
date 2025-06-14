import React from 'react';
import styles from './Featured.module.css';

function Featured() {
  return (
    <div className={styles.featuredSection} id="top-attractions">
      <h2 className={styles.sectionTitle}>Top Attractions</h2>
      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <div className={styles.cardImageWrapper}>
            <img 
              className={styles.cardImage} 
              src="https://upload.wikimedia.org/wikipedia/commons/2/28/Mahabodhi_Temple_Bodh_Gaya_Bihar.jpg" 
              alt="Mahabodhi Temple" 
            />
            <div className={styles.cardImageOverlay} />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>Mahabodhi Temple</div>
            <div className={styles.cardDesc}>
              A UNESCO World Heritage Site, the Mahabodhi Temple is the ultimate pilgrimage site for Buddhists and a masterpiece of Indian architecture.
            </div>
            <a 
              className={styles.cardLink} 
              href="https://en.wikipedia.org/wiki/Mahabodhi_Temple" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardImageWrapper}>
            <img 
              className={styles.cardImage} 
              src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Bodhi_Tree%2C_Bodh_Gaya%2C_India.jpg" 
              alt="Bodhi Tree" 
            />
            <div className={styles.cardImageOverlay} />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>Bodhi Tree</div>
            <div className={styles.cardDesc}>
              Meditate under the legendary Bodhi Tree, believed to be a direct descendant of the tree under which Buddha attained enlightenment.
            </div>
            <a 
              className={styles.cardLink} 
              href="https://en.wikipedia.org/wiki/Bodhi_Tree" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardImageWrapper}>
            <img 
              className={styles.cardImage} 
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Great_Buddha_Statue%2C_Bodh_Gaya.jpg" 
              alt="Great Buddha Statue" 
            />
            <div className={styles.cardImageOverlay} />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>Great Buddha Statue</div>
            <div className={styles.cardDesc}>
              An 80-foot serene Buddha statue surrounded by smaller statues, gardens, and a tranquil setting for reflection.
            </div>
            <a 
              className={styles.cardLink} 
              href="https://en.wikipedia.org/wiki/Great_Buddha_(Bodh_Gaya)" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              See Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;