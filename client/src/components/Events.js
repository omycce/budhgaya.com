import React from 'react';
import styles from './Events.module.css';

function Events() {
  return (
    <section className={styles.eventsSection} id="events">
      <h2 className={styles.eventsTitle}>Events & Festivals</h2>
      <div className={styles.eventsList}>
        <div className={styles.eventCard}>
          <div className={styles.eventName}>Buddha Purnima</div>
          <div className={styles.eventDate}>April/May (Full Moon Day)</div>
          <div className={styles.eventDescription}>
            The most significant Buddhist festival celebrating Buddha's birth, enlightenment, and nirvana.
          </div>
        </div>
        <div className={styles.eventCard}>
          <div className={styles.eventName}>Tipitaka Chanting</div>
          <div className={styles.eventDate}>December</div>
          <div className={styles.eventDescription}>
            A ten-day ceremony where monks from various countries chant Buddhist scriptures.
          </div>
        </div>
        <div className={styles.eventCard}>
          <div className={styles.eventName}>Nyingma Monlam Chenmo</div>
          <div className={styles.eventDate}>January/February</div>
          <div className={styles.eventDescription}>
            Traditional prayer festival with ceremonies and teachings from Tibetan masters.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;