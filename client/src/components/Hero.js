import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <header className={styles.hero} role="banner">
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Budhgaya: Bodh Gaya Travel & Culture</h1>
        <p className={styles.heroSubtitle}>
          Discover India's spiritual heart. Find temples, events, travel tips, and more — inspired by Lonely Planet.
        </p>
        <form className={styles.heroSearch} onSubmit={e => e.preventDefault()}>
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search places, events, tips..."
            aria-label="Search Budhgaya"
          />
          <button type="submit" className={styles.searchButton}>Search</button>
        </form>
        <div className={styles.ctaRow}>
          <a className={`${styles.heroCta} ${styles.ctaPrimary}`} href="#top-attractions">Explore Sacred Sites</a>
          <a className={`${styles.heroCta} ${styles.ctaSecondary}`} href="#plan">Plan Your Journey</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;