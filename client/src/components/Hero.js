import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <header className={styles.hero} role="banner">
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Discover Bodh Gaya</h1>
        <p className={styles.heroSubtitle}>
          Journey to the cradle of Buddhism — where ancient wisdom meets timeless tranquility. Plan your visit, explore sacred sites, and join cultural events.
        </p>
        <div className={styles.ctaRow}>
          <a className={`${styles.heroCta} ${styles.ctaPrimary}`} href="#top-attractions">Explore Sacred Sites</a>
          <a className={`${styles.heroCta} ${styles.ctaSecondary}`} href="#plan">Plan Your Journey</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;