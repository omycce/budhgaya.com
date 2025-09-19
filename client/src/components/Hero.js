import React from 'react';
import styles from './Hero.module.css';
import heroJpg from '../assets/images/mahabodhi-temple.jpg';
import RotatingWords from './RotatingWords';

const Hero = () => {
  return (
    <header className={styles.hero} role="banner">
      <div className={styles.heroOverlay} />
      <div className={styles.heroPicture}>
        <img src={heroJpg} alt="Mahabodhi Temple, Bodh Gaya" className={styles.heroImg} />
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Bodh Gaya — <RotatingWords words={["Explore","Reflect","Discover","Read","Visit"]} interval={2600} /></h1>
        <p className={styles.heroSubtitle}>Essential guides, timings, and local tips for a meaningful visit.</p>
        <div className={styles.ctaRow}>
          <a className={`${styles.heroCta} ${styles.ctaPrimary}`} href="/attractions" target="_blank" rel="noopener noreferrer">Explore highlights</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;