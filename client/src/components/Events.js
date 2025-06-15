import React from 'react';
import styles from './Events.module.css';

function Events() {
  const events = [
    {
      name: "Buddha Purnima",
      date: "April/May (Full Moon Day)",
      description: "The most significant Buddhist festival celebrating Buddha's birth, enlightenment, and nirvana.",
      image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Religious Festival"
    },
    {
      name: "Tipitaka Chanting",
      date: "December",
      description: "A ten-day ceremony where monks from various countries chant Buddhist scriptures.",
      image: "https://images.unsplash.com/photo-1558000143-a78f8299c40b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Traditional Ceremony"
    },
    {
      name: "Nyingma Monlam Chenmo",
      date: "January/February",
      description: "Traditional prayer festival with ceremonies and teachings from Tibetan masters.",
      image: "https://images.unsplash.com/photo-1573589894538-b9c6bad5f3d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Prayer Festival"
    }
  ];

  return (
    <section className={styles.eventsSection} id="events">
      <div className={styles.eventsHeader}>
        <h2 className={styles.eventsTitle}>Events & Festivals</h2>
        <p className={styles.eventsSubtitle}>Experience the spiritual and cultural celebrations of Bodh Gaya</p>
      </div>
      
      <div className={styles.eventsList}>
        {events.map((event, index) => (
          <div key={index} className={styles.eventCard}>
            <div className={styles.eventImageContainer}>
              <img src={event.image} alt={event.name} className={styles.eventImage} />
              <span className={styles.eventCategory}>{event.category}</span>
            </div>
            <div className={styles.eventContent}>
              <div className={styles.eventDate}>{event.date}</div>
              <h3 className={styles.eventName}>{event.name}</h3>
              <p className={styles.eventDescription}>{event.description}</p>
              <button className={styles.learnMore}>Learn More</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.viewAll}>
        <button className={styles.viewAllButton}>
          View All Events
          <span className={styles.arrow}>→</span>
        </button>
      </div>
    </section>
  );
}

export default Events;