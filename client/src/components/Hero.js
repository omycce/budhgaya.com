import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Discover Bodh Gaya</h1>
        <p>
          Journey to the cradle of Buddhism, where ancient wisdom meets timeless tranquility.
          Experience the spiritual essence of India's most sacred Buddhist pilgrimage site.
        </p>
        <div className={styles.quicklinks}>
          <a className={styles.quicklink} href="#top-attractions">
            Explore Sacred Sites
          </a>
          <a className={styles.quicklink} href="#explore">
            Plan Your Journey
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;