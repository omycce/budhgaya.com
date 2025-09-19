import React from 'react';
import styles from './About.module.css';
import SectionHeader from './SectionHeader';

function About() {
  return (
    <div className={styles.aboutSection} id="about">
        <SectionHeader
          title="About Bodh Gaya"
          subtitle="The place of the Buddha's enlightenment"
          id="about"
        />
      <div className={styles.content}>
        <p style={{fontSize: '1.08rem', color: '#444', margin: 0}}>
          Bodh Gaya (Bodh Gayā) is the site where Siddhartha Gautama attained
          enlightenment beneath the Bodhi Tree. The Mahabodhi Temple Complex here
          is a UNESCO World Heritage Site and remains the most important pilgrimage
          destination in Buddhism, with temples and monasteries maintained by many
          international Buddhist traditions.
        </p>
     
      </div>
    </div>
  );
}

export default About;