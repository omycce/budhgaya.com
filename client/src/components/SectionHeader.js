import React from 'react';
import styles from './SectionHeader.module.css';

function SectionHeader({ title, subtitle, id, notification }) {
  return (
    <header className={notification ? styles.notificationHeader : styles.sectionHeader} id={id}>
      <h2 className={notification ? styles.notificationTitle : styles.title}>
        {title}
      </h2>
      {subtitle && <div className={notification ? styles.notificationSubtitle : styles.subtitle}>{subtitle}</div>}
    </header>
  );
}

export default SectionHeader;
