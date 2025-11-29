import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import styles from './Explore.module.css';
import PageContainer from './PageContainer';
import SectionHeader from './SectionHeader';

function Explore() {
  const location = useLocation();
  const isStandalonePage = location.pathname === '/explore';
  const pageUrl = 'https://budhgaya.com/explore';

  const content = (
    <>
      <SectionHeader
        title="What to Explore in Bodh Gaya"
        subtitle="Discover monasteries, meditation retreats, markets, and cultural experiences"
        id="explore"
      />
      <p style={{color: '#555', maxWidth: 820, margin: '0 auto 2rem', textAlign: 'center', lineHeight: '1.7'}}>
        Bodh Gaya rewards a slow pace: walk the temple paths at dawn, visit international
        monasteries, and cross the river to Sujata's village. Below are highlights and practical tips.
      </p>
      <div className={styles.exploreList}>
        <div className={styles.exploreCard}>
          <div className={styles.exploreTitle}>International Monasteries</div>
          <div className={styles.exploreDesc}>Monasteries built by Thai, Japanese, Tibetan and Sri Lankan communities ring the Mahabodhi grounds — each offers public ceremonies, prayer flags and distinctive architecture.</div>
        </div>
        <div className={styles.exploreCard}>
          <div className={styles.exploreTitle}>Sujata Kuti</div>
          <div className={styles.exploreDesc}>Sujata's village and the Sujata Kuti shrine across the Niranjana river commemorate the milk‑rice offering that helped the Buddha recover strength before his enlightenment.</div>
        </div>
        <div className={styles.exploreCard}>
          <div className={styles.exploreTitle}>Meditation & Retreats</div>
          <div className={styles.exploreDesc}>Several centers (for example, Root Institute and local monastery guesthouses) offer drop-in meditation sessions and multi-day retreats — book ahead during festival season.</div>
        </div>
        <div className={styles.exploreCard}>
          <div className={styles.exploreTitle}>Markets & Street Life</div>
          <div className={styles.exploreDesc}>The markets near the temple sell prayer beads, thangkas, Tibetan bowls and local snacks — a great place to find gifts and try litti chokha.</div>
        </div>
        <div className={styles.exploreCard}>
          <div className={styles.exploreTitle}>Festivals & Ceremonies</div>
          <div className={styles.exploreDesc}>Plan visits around Buddha Purnima (April/May) for processions, and December for major chanting ceremonies and longer retreats.</div>
        </div>
        <div className={styles.exploreCard}>
          <div className={styles.exploreTitle}>Pilgrim Life</div>
          <div className={styles.exploreDesc}>Pilgrims from across Asia bring an international character to Bodh Gaya — you'll hear multiple languages and see varied devotional styles.</div>
        </div>
      </div>
      <p style={{marginTop: '2rem', color: '#666', textAlign: 'center'}}>
        Quick links: <a href="/gallery" rel="noopener noreferrer">Gallery</a> • <a href="/travel-details" rel="noopener noreferrer">Plan your trip</a>
      </p>
    </>
  );

  return (
    <div className={styles.exploreSection} id="explore">
      {isStandalonePage && (
        <Helmet>
          <title>What to Explore in Bodh Gaya | Travel Guide & Tips</title>
          <meta name="description" content="Discover what to explore in Bodh Gaya: international monasteries, meditation retreats, Sujata Kuti, markets, festivals, and pilgrim life. Complete travel guide." />
          <meta name="keywords" content="Bodh Gaya explore, things to do Bodh Gaya, Bodh Gaya travel guide, monasteries Bodh Gaya, meditation retreats" />
          <link rel="canonical" href={pageUrl} />
          <meta property="og:title" content="What to Explore in Bodh Gaya | Travel Guide & Tips" />
          <meta property="og:description" content="Discover what to explore in Bodh Gaya: international monasteries, meditation retreats, and cultural experiences." />
          <meta property="og:url" content={pageUrl} />
          <meta property="og:type" content="website" />
        </Helmet>
      )}
      {isStandalonePage ? (
        <PageContainer>
          {content}
        </PageContainer>
      ) : (
        content
      )}
    </div>
  );
}

export default Explore;