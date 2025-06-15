import React from 'react';
import styles from './TravelDetails.module.css';

function TravelDetails() {
  const travelDetails = [
    {
      title: "Historical Significance",
      content: "Bodh Gaya is the place where Siddhartha Gautama attained enlightenment under the Bodhi Tree, making it the most sacred site in Buddhism. The Mahabodhi Temple, built in the 3rd century BCE, stands as a testament to this spiritual milestone.",
    },
    {
      title: "Best Time to Visit",
      content: "October to March for pleasant weather and cultural festivals. Buddha Purnima in April/May is also a significant time for spiritual events.",
    },
    {
      title: "Getting There",
      content: (
        <ul>
          <li>Nearest Airport: Gaya Airport (12 km from Bodh Gaya).</li>
          <li>Railway: Gaya Junction is the main railhead, well-connected to major cities.</li>
          <li>Road: Regular buses and taxis are available from Patna, Varanasi, and Kolkata.</li>
        </ul>
      ),
    },
    {
      title: "Where to Stay",
      content: (
        <ul>
          <li>Guesthouses and monastery stays for budget travelers.</li>
          <li>Mid-range hotels offering comfort and convenience.</li>
          <li>Luxury resorts for a premium experience.</li>
        </ul>
      ),
    },
    {
      title: "Local Transport",
      content: "Auto-rickshaws and cycle-rickshaws are common for short distances. For longer trips, taxis and rental cars are available.",
    },
    {
      title: "Events & Festivals",
      content: (
        <ul>
          <li>
            <a href="https://en.wikipedia.org/wiki/Buddha_Purnima" target="_blank" rel="noopener noreferrer">
              Buddha Purnima
            </a>: Celebrating Buddha's birth, enlightenment, and nirvana (April/May).
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Tipitaka" target="_blank" rel="noopener noreferrer">
              Tipitaka Chanting Ceremony
            </a>: A ten-day event where monks chant Buddhist scriptures (December).
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Monlam" target="_blank" rel="noopener noreferrer">
              Nyingma Monlam Chenmo
            </a>: A Tibetan prayer festival with teachings and ceremonies (January/February).
          </li>
        </ul>
      ),
    },
    {
      title: "Nearby Attractions",
      content: (
        <ul>
          <li>Rajgir: Explore ancient ruins and hot springs.</li>
          <li>Nalanda: Visit the historic Nalanda University.</li>
          <li>Barabar Caves: Discover India's oldest rock-cut caves.</li>
          <li>Vishnupad Temple: A sacred Hindu temple in Gaya.</li>
        </ul>
      ),
    },
    {
      title: "Activities",
      content: "Participate in meditation retreats, explore international monasteries, and attend cultural festivals to immerse yourself in the spiritual essence of Bodh Gaya.",
    },
    {
      title: "Food and Cuisine",
      content: "Try local dishes like Litti Chokha, Momos, and Thukpa. Visit street markets for fresh samosas and traditional sweets like peda and jalebi.",
    },
  ];

  return (
    <div className={styles.travelDetails} id="travel-details">
      <h2 className={styles.sectionTitle}>Plan Your Trip to Bodh Gaya</h2>
      <div className={styles.travelList}>
        {travelDetails.map((detail, index) => (
          <div key={index} className={styles.travelItem}>
            <div className={styles.itemTitle}>{detail.title}</div>
            <div>{detail.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelDetails;