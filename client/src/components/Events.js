/* eslint-disable unicode-bom */
import React from 'react';
import styles from './Events.module.css';
import SectionHeader from './SectionHeader';


function Events() {
  // Only show the next major festival in a minimal notification style
  const nextFestival = {
    name: "Buddha Purnima",
    date: "April/May (Full Moon Day)",
    description: "Buddha's birth, enlightenment, and nirvana are celebrated on this most important Buddhist festival.",
  };

  return (
    <section className={styles.eventsSection} id="events">
      <SectionHeader
        title={nextFestival.name}
        subtitle={`Next: ${nextFestival.date} — ${nextFestival.description}`}
        id="events"
        notification
      />
      <div className={styles.note} style={{padding: '0 1rem 1.2rem', color: '#555'}}>
        <p style={{margin: 0}}>
          Buddha Purnima (Vesak) is the annual celebration of the Buddha's birth,
          enlightenment and parinirvana. Dates follow the lunar calendar and usually
          fall in April–May — check local schedules when planning a visit.
        </p>
    
      </div>
    </section>
  );
}

export default Events;