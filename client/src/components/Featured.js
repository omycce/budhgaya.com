import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import styles from './Featured.module.css';
import PageContainer from './PageContainer';
import SectionHeader from './SectionHeader';
// Import images
import mahabodhiTemple from '../assets/images/mahabodhi-temple.jpg';
import bodhiTree from '../assets/images/bodhi-tree.jpg';
import buddhaStatue from '../assets/images/buddha-statue.jpg';

// Attractions data (from scraped content)
const attractions = [
  {
    title: 'Mahabodhi Temple',
    description: 'The Mahabodhi Temple is a UNESCO World Heritage Site marking the location where the Buddha is said to have attained enlightenment. The temple complex includes the sacred Bodhi Tree, Vajrasana (Diamond Throne), and numerous ancient stupas and shrines.',
    image: mahabodhiTemple
  },
  {
    title: 'Bodhi Tree',
    description: 'The sacred Bodhi Tree (Ficus religiosa) is a direct descendant of the original tree under which Siddhartha Gautama attained enlightenment. The current tree is believed to be the fourth or fifth generation descendant.',
    image: bodhiTree
  },
  {
    title: 'Great Buddha Statue',
    description: 'The 80-foot (25-meter) Great Buddha Statue was consecrated in 1989 and is one of the largest Buddha statues in India. Made of red granite and sandstone, it depicts the Buddha in the earth-touching pose.',
    image: buddhaStatue
  },
  {
    title: 'Thai Monastery (Wat Thai Buddhagaya)',
    description: 'Built in 1956, the Thai Monastery features traditional Thai architecture with ornate golden roofs, intricate carvings, and beautiful murals depicting the life of the Buddha.',
    image: null
  },
  {
    title: 'Japanese Monastery (Indosan Nipponji)',
    description: 'The Japanese Monastery, established in 1972, features minimalist Zen architecture. It includes a meditation hall, a beautiful garden, and offers meditation retreats.',
    image: null
  },
  {
    title: 'Tibetan Monasteries',
    description: 'Several Tibetan monasteries surround the Mahabodhi Temple, including Gaden Phelgayling, Karma Tharjay, and others. These monasteries feature traditional Tibetan architecture with colorful prayer flags.',
    image: null
  },
  {
    title: 'Sujata Kuti (Sujata Garh)',
    description: 'Located across the Niranjana River, Sujata Kuti commemorates the place where Sujata offered milk-rice to the Buddha before his enlightenment.',
    image: null
  },
  {
    title: 'Dungeshwari Hill (Prag Bodhi)',
    description: 'Also known as Prag Bodhi, these cave shrines are where Siddhartha practiced severe austerities for six years before realizing the Middle Way.',
    image: null
  }
];

function Featured() {
  const location = useLocation();
  const isStandalonePage = location.pathname === '/attractions';
  const pageUrl = 'https://budhgaya.com/attractions';
  const showAll = isStandalonePage;
  const displayedAttractions = showAll ? attractions : attractions.slice(0, 2);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Bodh Gaya Top Attractions',
    description: 'Discover the Mahabodhi Temple and Bodhi Tree - the most sacred Buddhist pilgrimage sites where the Buddha attained enlightenment.',
    url: pageUrl,
    image: [
      'https://budhgaya.com/assets/images/mahabodhi-temple.jpg',
      'https://budhgaya.com/assets/images/bodhi-tree.jpg'
    ],
    containsPlace: attractions.map(attr => ({
      '@type': 'Place',
      name: attr.title,
      description: attr.description.substring(0, 200)
    })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bodh Gaya',
      addressRegion: 'Bihar',
      addressCountry: 'IN'
    }
  };

  const content = (
    <>
      {isStandalonePage && (
        <SectionHeader
          title="Top Attractions in Bodh Gaya"
          subtitle="Discover the most sacred Buddhist pilgrimage sites where the Buddha attained enlightenment"
          id="top-attractions"
        />
      )}
      <div className={`${styles.cardGrid} fade-up`}>
        {displayedAttractions.map((attraction, index) => (
          <article key={index} className={`${styles.card} fade-up`}>
            {attraction.image ? (
              <div className={styles.cardImageWrapper}>
                <img 
                  className={styles.cardImage} 
                  src={attraction.image}
                  alt={attraction.title} 
                  loading="lazy"
                />
                <div className={styles.cardOverlay}>
                  <div className={styles.cardOverlayTitle}>{attraction.title}</div>
                  <div className={styles.cardOverlayText}>{attraction.description.substring(0, 150)}...</div>
                </div>
              </div>
            ) : (
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{attraction.title}</h3>
                <p className={styles.cardDesc}>{attraction.description}</p>
              </div>
            )}
          </article>
        ))}
      </div>
      {!isStandalonePage && (
        <div className={styles.ctaWrap}>
          <a className={styles.exploreBtn} href="/attractions">See all attractions</a>
        </div>
      )}
    </>
  );

  return (
    <section className={styles.featuredSection} id="top-attractions">
      {isStandalonePage && (
        <Helmet>
          <title>Top Attractions in Bodh Gaya | Mahabodhi Temple & Bodhi Tree</title>
          <meta name="description" content="Explore the top attractions in Bodh Gaya: Mahabodhi Temple (UNESCO World Heritage Site) and the sacred Bodhi Tree where the Buddha attained enlightenment." />
          <meta name="keywords" content="Bodh Gaya attractions, Mahabodhi Temple, Bodhi Tree, Buddhist pilgrimage, UNESCO World Heritage, Bodh Gaya tourism" />
          <link rel="canonical" href={pageUrl} />
          <meta property="og:title" content="Top Attractions in Bodh Gaya | Mahabodhi Temple & Bodhi Tree" />
          <meta property="og:description" content="Discover the Mahabodhi Temple and Bodhi Tree - the most sacred Buddhist pilgrimage sites where the Buddha attained enlightenment." />
          <meta property="og:url" content={pageUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://budhgaya.com/assets/images/mahabodhi-temple.jpg" />
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Helmet>
      )}
      {isStandalonePage ? (
        <PageContainer>
          {content}
        </PageContainer>
      ) : (
        content
      )}
    </section>
  );
}

export default Featured;