import React from 'react';
import styles from './Featured.module.css';
// Import images
import mahabodhiTemple from '../assets/images/mahabodhi-temple.jpg';
import bodhiTree from '../assets/images/bodhi-tree.jpg';
import buddhaStatue from '../assets/images/buddha-statue.jpg';

function Featured() {
  return (
    <div className={styles.featuredSection} id="top-attractions">
      <h2 className={styles.sectionTitle}>Top Attractions</h2>
      <div className={`${styles.cardGrid} fade-up`}>
        <div className={`${styles.card} fade-up`}>
          <div className={styles.cardImageWrapper}>
            <img 
              className={styles.cardImage} 
              src={mahabodhiTemple}
              alt="Mahabodhi Temple" 
            />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>Mahabodhi Temple</div>
            <div className={styles.cardDesc}>
              A UNESCO World Heritage Site, the Mahabodhi Temple is the ultimate pilgrimage site for Buddhists and a masterpiece of Indian architecture.
            </div>
            <a 
              className={styles.cardLink} 
              href="#mahabodhi-temple"
            >
              Learn More
            </a>
          </div>
  </div>

  <div className={`${styles.card} fade-up`}>
          <div className={styles.cardImageWrapper}>
            <img 
              className={styles.cardImage} 
              src={bodhiTree}
              alt="Bodhi Tree" 
            />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>Bodhi Tree</div>
            <div className={styles.cardDesc}>
              Meditate under the legendary Bodhi Tree, believed to be a direct descendant of the tree under which Buddha attained enlightenment.
            </div>
            <a 
              className={styles.cardLink} 
              href="#bodhi-tree"
            >
              Read More
            </a>
          </div>
  </div>

  <div className={`${styles.card} fade-up`}>
          <div className={styles.cardImageWrapper}>
            <img 
              className={styles.cardImage} 
              src={buddhaStatue}
              alt="Great Buddha Statue" 
            />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>Great Buddha Statue</div>
            <div className={styles.cardDesc}>
              An 80-foot serene Buddha statue surrounded by smaller statues, gardens, and a tranquil setting for reflection.
            </div>
            <a 
              className={styles.cardLink} 
              href="#buddha-statue"
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