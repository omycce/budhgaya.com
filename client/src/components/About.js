import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.aboutSection} id="about">
      <h2 className={styles.sectionTitle}>About Bodh Gaya</h2>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            Bodh Gaya, in the Indian state of Bihar, is one of the world's most important Buddhist pilgrimage centres. 
            It is the place where Gautama Buddha attained enlightenment beneath the sacred Bodhi Tree. Today, pilgrims, 
            monks, and travellers from all over the world gather here to meditate, learn, and experience the spiritual 
            atmosphere of this UNESCO World Heritage Site.
          </p>
        </div>
        <ul className={styles.infoList}>
          <li className={styles.infoItem}>
            <span className={styles.infoLabel}>Location:</span>
            Bihar, India
          </li>
          <li className={styles.infoItem}>
            <span className={styles.infoLabel}>Spiritual Significance:</span>
            Site of Buddha's enlightenment
          </li>
          <li className={styles.infoItem}>
            <span className={styles.infoLabel}>Language:</span>
            Hindi, English, plus many international visitors
          </li>
          <li className={styles.infoItem}>
            <span className={styles.infoLabel}>Climate:</span>
            Pleasant and cool October-March; very hot April-June; monsoon July-September
          </li>
          <li className={styles.infoItem}>
            <span className={styles.infoLabel}>Must-try Dishes:</span>
            Litti chokha, samosas, momos, and sweets from local stalls
          </li>
          <li className={styles.infoItem}>
            <span className={styles.infoLabel}>Fun Fact:</span>
            The Mahabodhi Temple Complex is over 1,500 years old and still a living centre of worship and meditation
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;