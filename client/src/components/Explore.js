import React from 'react';
import styles from './Explore.module.css';

function Explore() {
  return (
    <div className={styles.exploreSection} id="explore">
      <h2 className={styles.sectionTitle}>What to Explore in Bodh Gaya</h2>
      <p style={{color: '#555', maxWidth: 820, margin: '0 0 1rem'}}>
        Bodh Gaya rewards a slow pace: walk the temple paths at dawn, visit international
        monasteries, and cross the river to Sujata's village. Below are highlights and practical tips.
      </p>
      <div className={styles.exploreList}>
        <div className={styles.exploreCard}>
          <div className={styles.exploreTitle}>International Monasteries</div>
          <div className={styles.exploreDesc}>Monasteries built by Thai, Japanese, Tibetan and Sri Lankan communities ring the Mahabodhi grounds — each offers public ceremonies, prayer flags and distinctive architecture.</div>
        </div>
        <div className={styles.exploreCard}>
          <div className={styles.exploreTitle}>Sujata Kuti</div>
          <div className={styles.exploreDesc}>Sujata's village and the Sujata Kuti shrine across the Niranjana river commemorate the milk‑rice offering that helped the Buddha recover strength before his enlightenment.</div>
        </div>
        <div className={styles.exploreCard}>
          <div className={styles.exploreTitle}>Meditation & Retreats</div>
          <div className={styles.exploreDesc}>Several centers (for example, Root Institute and local monastery guesthouses) offer drop-in meditation sessions and multi-day retreats — book ahead during festival season.</div>
        </div>
        <div className={styles.exploreCard}>
          <div className={styles.exploreTitle}>Markets & Street Life</div>
          <div className={styles.exploreDesc}>The markets near the temple sell prayer beads, thangkas, Tibetan bowls and local snacks — a great place to find gifts and try litti chokha.</div>
        </div>
        <div className={styles.exploreCard}>
          <div className={styles.exploreTitle}>Festivals & Ceremonies</div>
          <div className={styles.exploreDesc}>Plan visits around Buddha Purnima (April/May) for processions, and December for major chanting ceremonies and longer retreats.</div>
        </div>
        <div className={styles.exploreCard}>
          <div className={styles.exploreTitle}>Pilgrim Life</div>
          <div className={styles.exploreDesc}>Pilgrims from across Asia bring an international character to Bodh Gaya — you'll hear multiple languages and see varied devotional styles.</div>
        </div>
      </div>
      <p style={{marginTop: '1rem', color: '#666'}}>
        Quick links: <a href="/gallery" rel="noopener noreferrer">Gallery</a> • <a href="/travel-details" rel="noopener noreferrer">Plan your trip</a>
      </p>
    </div>
  );
}

export default Explore;