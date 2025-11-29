import React from 'react';
import styles from './SectionHeader.module.css';

function SectionHeader({ title, subtitle, id, notification }) {
  const HeaderTag = notification ? 'div' : 'div';
  return (
    <HeaderTag className={styles.container}>
      <header className={notification ? styles.notificationHeader : styles.sectionHeader} id={id}>
        <h2 className={notification ? styles.notificationTitle : styles.title}>
          {title}
        </h2>
        {subtitle && (
          <div className={notification ? styles.notificationSubtitle : styles.subtitle}>{subtitle}</div>
        )}
      </header>
    </HeaderTag>
  );
}

export default SectionHeader;
