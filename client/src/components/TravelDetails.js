import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import styles from './TravelDetails.module.css';
import PageContainer from './PageContainer';
import SectionHeader from './SectionHeader';

function TravelDetails() {
  const location = useLocation();
  const isStandalonePage = location.pathname === '/travel-details';
  const pageUrl = 'https://budhgaya.com/travel-details';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: 'Bodh Gaya Travel Guide',
    description: 'Complete travel information for visiting Bodh Gaya: best time to visit, getting there, accommodation, local transport, events, and nearby attractions.',
    url: pageUrl,
    touristType: 'Pilgrim',
    itinerary: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'TouristDestination',
          name: 'Mahabodhi Temple',
          description: 'UNESCO World Heritage Site where the Buddha attained enlightenment'
        },
        {
          '@type': 'TouristDestination',
          name: 'Bodhi Tree',
          description: 'Sacred fig tree where the Buddha meditated'
        }
      ]
    }
  };
  const BestTimeWidget = () => (
    <div style={{
      border: '1px solid #e9ecef',
      borderRadius: 12,
      padding: '14px 16px',
      background: '#f9fbff',
      margin: '0 0 20px'
    }}>
      <strong>Best time to visit</strong>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 8, marginTop: 8}}>
        <div><span style={{fontWeight: 600}}>Oct–Mar</span> — Cool, peak season; festivals and chanting.</div>
        <div><span style={{fontWeight: 600}}>Apr–May</span> — Hot; <a href="/stories" rel="noopener noreferrer">Buddha Purnima</a> draws big crowds.</div>
        <div><span style={{fontWeight: 600}}>Jun–Sep</span> — Monsoon; quieter, lush landscapes.</div>
      </div>
      <div style={{marginTop: 8, fontSize: 14}}>
        See our <a href="/stories" rel="noopener noreferrer">Buddha Purnima guide</a> for tips on processions, timings and food spots.
      </div>
    </div>
  );

  const travelDetails = [
    {
      title: 'Historical Significance',
      content:
        'Bodh Gaya is the place where Siddhartha Gautama attained enlightenment under the Bodhi Tree, making it the most sacred site in Buddhism. The Mahabodhi Temple, rebuilt and restored over centuries, marks this spiritual milestone.',
    },
    {
      title: 'Best Time to Visit',
      content: (
        <div>
          <BestTimeWidget />
          <div>
            October to March offers pleasant weather and cultural festivals. Buddha Purnima (Vesak) in April/May draws large numbers of pilgrims — book accommodation early.
          </div>
        </div>
      ),
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

  const content = (
    <>
      <SectionHeader
        title="Plan Your Trip to Bodh Gaya"
        subtitle="Complete travel information for your visit"
        id="travel-details"
      />
      <div className={styles.travelList}>
        {travelDetails.map((detail, index) => (
          <div key={index} className={styles.travelItem}>
            <div className={styles.itemTitle}>{detail.title}</div>
            <div>{detail.content}</div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className={styles.travelDetails} id="travel-details">
      {isStandalonePage && (
        <Helmet>
          <title>Plan Your Trip to Bodh Gaya | Travel Guide & Information</title>
          <meta name="description" content="Complete travel guide for Bodh Gaya: best time to visit, how to get there, accommodation, local transport, events, festivals, and nearby attractions like Rajgir and Nalanda." />
          <meta name="keywords" content="Bodh Gaya travel guide, how to reach Bodh Gaya, Bodh Gaya accommodation, Bodh Gaya transport, best time to visit Bodh Gaya" />
          <link rel="canonical" href={pageUrl} />
          <meta property="og:title" content="Plan Your Trip to Bodh Gaya | Travel Guide & Information" />
          <meta property="og:description" content="Complete travel guide for Bodh Gaya: best time to visit, how to get there, accommodation, and local information." />
          <meta property="og:url" content={pageUrl} />
          <meta property="og:type" content="website" />
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Helmet>
      )}
      {isStandalonePage ? (
        <PageContainer>
          {content}
        </PageContainer>
      ) : (
        <div style={{padding: '4rem 2rem', maxWidth: 1200, margin: '0 auto'}}>
          {content}
        </div>
      )}
    </div>
  );
}

export default TravelDetails;