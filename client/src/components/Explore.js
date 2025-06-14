import React from 'react';
import styles from './Explore.module.css';

function Explore() {
  return (
    <div className={styles.exploreSection} id="explore">
      <h2 className={styles.sectionTitle}>What to Explore in Budh Gaya</h2>
      <div className={styles.exploreList}>
        <div className={styles.exploreCard}>
          <div className={styles.exploreTitle}>International Monasteries</div>
          <div className={styles.exploreDesc}>Visit monasteries from Thailand, Japan, Bhutan, and more—each with its own unique style, ceremonies, and architecture.</div>
        </div>
        <div className={styles.exploreCard}>
          <div className={styles.exploreTitle}>Sujata Kuti</div>
          <div className={styles.exploreDesc}>Cross the river to find Sujata Kuti, where Sujata offered Buddha a life-changing meal before enlightenment.</div>
        </div>
        <div className={styles.exploreCard}>
          <div className={styles.exploreTitle}>Meditation & Retreats</div>
          <div className={styles.exploreDesc}>Try a meditation class or multi-day retreat at local monasteries or the Root Institute for spiritual insight and peace.</div>
        </div>
        <div className={styles.exploreCard}>
          <div className={styles.exploreTitle}>Markets & Street Life</div>
          <div className={styles.exploreDesc}>Explore colorful markets for prayer beads, handicrafts, Tibetan bowls, and delicious local food like litti chokha and samosas.</div>
        </div>
        <div className={styles.exploreCard}>
          <div className={styles.exploreTitle}>Festivals & Ceremonies</div>
          <div className={styles.exploreDesc}>Experience the energy of Buddha Jayanti in April/May or the Tipitaka Chanting Ceremony in December.</div>
        </div>
        <div className={styles.exploreCard}>
          <div className={styles.exploreTitle}>Pilgrim Life</div>
          <div className={styles.exploreDesc}>Witness or join the rituals of pilgrims from across Asia, making Budh Gaya a truly international town.</div>
        </div>
      </div>
    </div>
  );
}

export default Explore;