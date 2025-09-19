import React from 'react';
import styles from './TravelDetails.module.css';

function TravelDetails() {
  const travelDetails = [
    {
      title: 'Historical Significance',
      content:
        'Bodh Gaya is the place where Siddhartha Gautama attained enlightenment under the Bodhi Tree, making it the most sacred site in Buddhism. The Mahabodhi Temple, rebuilt and restored over centuries, marks this spiritual milestone.',
    },
    {
      title: 'Best Time to Visit',
      content:
        'October to March for pleasant weather and cultural festivals. Buddha Purnima (Vesak) in April/May draws large numbers of pilgrims — book accommodation early.',
    },
    {
      title: 'Getting There',
      content: (
        <ul>
          <li>
            Nearest Airport: Gaya Airport (Bodh Gaya Airport) — about 7–12 km from town; limited domestic flights connect via Patna and Delhi.
          </li>
          <li>Railway: Gaya Junction is the main railhead, well-connected to major cities.</li>
          <li>Road: Regular buses and taxis operate from Patna, Varanasi and Kolkata.</li>
        </ul>
      ),
    },
    {
      title: 'Where to Stay',
      content: (
        <ul>
          <li>Guesthouses and monastery stays for budget travelers.</li>
          <li>Mid-range hotels offering comfort and convenience.</li>
          <li>Small luxury properties for a quieter stay.</li>
        </ul>
      ),
    },
    {
      title: 'Local Transport',
      content:
        'Auto-rickshaws and cycle-rickshaws are common for short distances. For longer trips, taxis and rental cars are available.',
    },
    {
      title: 'Events & Festivals',
      content: (
        <ul>
          <li>
            <a href="https://en.wikipedia.org/wiki/Buddha_Purnima" target="_blank" rel="noopener noreferrer">
              Buddha Purnima (Vesak)
            </a>
            : Celebrates the birth, enlightenment and parinirvana of the Buddha (April/May); expect processions and large gatherings.
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Tipitaka" target="_blank" rel="noopener noreferrer">
              Tipitaka Chanting Ceremony
            </a>
            : A multi-day chanting event by resident monastic communities (often in December).
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Monlam" target="_blank" rel="noopener noreferrer">
              Nyingma Monlam Chenmo
            </a>
            : A Tibetan prayer festival with teachings and ceremonies (January/February).
          </li>
        </ul>
      ),
    },
    {
      title: 'Nearby Attractions',
      content: (
        <ul>
          <li>
            <b>Rajgir:</b> Ancient capital with hilltop ruins, hot springs and the Vishwa Shanti Stupa — roughly 1–2 hours by road.
          </li>
          <li>
            <b>Nalanda:</b> The ruins of one of the world's first residential universities — a UNESCO World Heritage site and a popular day trip.
          </li>
          <li>
            <b>Barabar Caves:</b> Some of India's oldest rock-cut caves with archaeological inscriptions and simple rock architecture.
          </li>
          <li>
            <b>Vishnupad Temple (Gaya):</b> A major Hindu pilgrimage site in nearby Gaya town, famous for funeral rites along the Phalgu river.
          </li>
          <li>
            <b>Great Buddha Statue:</b> A recent 24 m statue and landscaped gardens that make for a peaceful visit.
          </li>
        </ul>
      ),
    },
    {
      title: 'Activities',
      content:
        'Participate in meditation sessions, explore international monasteries and attend cultural festivals to immerse yourself in the spiritual life of Bodh Gaya.',
    },
    {
      title: 'Food and Cuisine',
      content:
        'Try local dishes like Litti Chokha, thukpa and momos. Street markets also offer samosas and traditional sweets like peda and jalebi.',
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