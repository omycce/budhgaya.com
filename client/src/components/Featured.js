import React from 'react';
import styles from './Featured.module.css';
import SectionHeader from './SectionHeader';
// Import images
import mahabodhiTemple from '../assets/images/mahabodhi-temple.jpg';
import bodhiTree from '../assets/images/bodhi-tree.jpg';
import buddhaStatue from '../assets/images/buddha-statue.jpg';

function Featured() {
  return (
    <section className={styles.featuredSection} id="top-attractions">
      
      

      <div className={`${styles.cardGrid} fade-up`}>
        <article className={`${styles.card} fade-up`}>
          <div className={styles.cardImageWrapper}>
            <img 
              className={styles.cardImage} 
              src={mahabodhiTemple}
              alt="Mahabodhi Temple" 
              loading="lazy"
            />
            <div className={styles.cardOverlay}>
              <div className={styles.cardOverlayTitle}>Mahabodhi Temple</div>
              <div className={styles.cardOverlayText}>UNESCO World Heritage — site of Buddha's enlightenment (Mahabodhi Temple)</div>
            </div>
          </div>
        </article>

        <article className={`${styles.card} fade-up`}>
          <div className={styles.cardImageWrapper}>
            <img 
              className={styles.cardImage} 
              src={bodhiTree}
              alt="Bodhi Tree" 
              loading="lazy"
            />
            <div className={styles.cardOverlay}>
              <div className={styles.cardOverlayTitle}>Bodhi Tree</div>
              <div className={styles.cardOverlayText}>Sacred fig tree — a direct descendant of the original tree where the Buddha sat in meditation</div>
            </div>
          </div>
        </article>
      </div>

      <div className={styles.ctaWrap}>
        <a className={styles.exploreBtn} href="/attractions" target="_blank" rel="noopener noreferrer">See all attractions</a>

      </div>
    </section>
  );
}

export default Featured;