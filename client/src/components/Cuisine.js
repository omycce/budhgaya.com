import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import styles from './Cuisine.module.css';
import SectionHeader from './SectionHeader';
import PageContainer from './PageContainer';

// Cuisine data (from scraped content)
const cuisineItems = [
  {
    name: 'Litti Chokha',
    description: 'A traditional Bihari dish consisting of wheat flour balls (litti) stuffed with sattu (roasted gram flour) and spices, served with chokha (mashed vegetables like brinjal, potato, or tomato). It\'s a hearty, nutritious meal that\'s a staple in Bihar.',
    origin: 'Bihar',
    bestPlaces: 'Street vendors, local restaurants near the temple'
  },
  {
    name: 'Thukpa',
    description: 'A Tibetan noodle soup with vegetables, meat (optional), and aromatic spices. Perfect for cold weather, this warming dish is popular in monasteries and Tibetan restaurants around Bodh Gaya.',
    origin: 'Tibet',
    bestPlaces: 'Tibetan restaurants, monastery cafes'
  },
  {
    name: 'Momos',
    description: 'Steamed or fried dumplings filled with vegetables or meat, served with spicy chutney. A favorite snack among pilgrims and tourists, available at street stalls and restaurants throughout Bodh Gaya.',
    origin: 'Tibet/Nepal',
    bestPlaces: 'Street vendors, Tibetan cafes, restaurant menus'
  },
  {
    name: 'Samosas',
    description: 'Crispy fried pastries filled with spiced potatoes, peas, or lentils. A popular snack available everywhere, especially during festivals and in market areas.',
    origin: 'India',
    bestPlaces: 'Street vendors, tea stalls, restaurants'
  },
  {
    name: 'Khaja',
    description: 'A traditional Bihari sweet made of refined flour, sugar, and ghee. These flaky, layered pastries are crispy on the outside and sweet inside. A must-try local delicacy.',
    origin: 'Bihar',
    bestPlaces: 'Sweet shops, local markets'
  },
  {
    name: 'Jalebi',
    description: 'Orange-colored, spiral-shaped sweets made by deep-frying batter and soaking in sugar syrup. Served hot, especially popular during festivals and as a breakfast item.',
    origin: 'India',
    bestPlaces: 'Sweet shops, street vendors'
  },
  {
    name: 'Peda',
    description: 'Soft, milk-based sweets flavored with cardamom, saffron, or other ingredients. A popular offering at temples and a favorite among pilgrims.',
    origin: 'India',
    bestPlaces: 'Sweet shops, temple vendors'
  },
  {
    name: 'Kulhad Chai',
    description: 'Traditional Indian tea served in small clay cups (kulhad). The earthy flavor of the clay enhances the spiced tea, making it a favorite morning beverage.',
    origin: 'India',
    bestPlaces: 'Tea stalls, street vendors, restaurants'
  },
  {
    name: 'Tibetan Butter Tea',
    description: 'A traditional Tibetan beverage made with tea, salt, and yak butter. An acquired taste, this tea is served in monasteries and Tibetan restaurants.',
    origin: 'Tibet',
    bestPlaces: 'Tibetan monasteries, Tibetan restaurants'
  },
  {
    name: 'Biryani',
    description: 'Fragrant rice dish cooked with spices, vegetables, or meat. Available in many restaurants, especially popular for lunch and dinner.',
    origin: 'India',
    bestPlaces: 'Restaurants, hotels'
  }
];

function Cuisine() {
  const location = useLocation();
  const isStandalonePage = location.pathname === '/cuisine';
  const pageUrl = 'https://budhgaya.com/cuisine';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Bodh Gaya Local Cuisine',
    description: 'Must-try local foods in Bodh Gaya including Litti Chokha, Thukpa, Momos, and traditional sweets',
    itemListElement: [
      {
        '@type': 'FoodEstablishment',
        name: 'Litti Chokha',
        description: 'A hearty local staple: wheat balls with spiced mashed vegetables'
      },
      {
        '@type': 'FoodEstablishment',
        name: 'Thukpa & Momos',
        description: 'Himalayan-style soups and steamed dumplings'
      },
      {
        '@type': 'FoodEstablishment',
        name: 'Sweets & Street Food',
        description: 'From khaja to jalebi, sugar and spice on every corner'
      }
    ]
  };

  const displayedItems = isStandalonePage ? cuisineItems : cuisineItems.slice(0, 3);

  const content = (
    <>
      <SectionHeader
        icon="🍲"
        title="Cuisine"
        subtitle="Local food to try in Bodh Gaya"
        id="cuisine"
      />
      <div style={{display: 'grid', gap: '1.5rem', marginTop: '2rem'}}>
        {displayedItems.map((item, index) => {
          const gradients = [
            'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
            'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
          ];
          const gradient = gradients[index % gradients.length];
          return (
          <div key={index} style={{
            border: '2px solid transparent',
            borderRadius: '16px',
            padding: '1.5rem',
            background: 'linear-gradient(white, white), ' + gradient,
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
          }}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem'}}>
              <h3 style={{fontSize: '1.5rem', margin: 0, color: 'var(--color-dark)'}}>{item.name}</h3>
              <span style={{
                fontSize: '0.875rem',
                color: 'var(--color-muted)',
                fontWeight: 500
              }}>{item.origin}</span>
            </div>
            <p style={{color: '#555', marginBottom: '0.75rem', lineHeight: '1.7'}}>{item.description}</p>
            <p style={{fontSize: '0.875rem', color: '#666', margin: 0}}>
              <strong>Best places:</strong> {item.bestPlaces}
            </p>
          </div>
          );
        })}
      </div>
      {!isStandalonePage && (
        <p style={{textAlign: 'center', marginTop: '1.5rem'}}>
          <a href="/cuisine" style={{color: 'var(--color-primary)', fontWeight: 600}}>See all cuisine options →</a>
        </p>
      )}
    </>
  );

  return (
    <section className={styles.cuisineSection} id="cuisine">
      {isStandalonePage && (
        <Helmet>
          <title>Local Cuisine of Bodh Gaya | Must-Try Food in Bodh Gaya</title>
          <meta
            name="description"
            content="Discover the best local cuisine in Bodh Gaya. Try Litti Chokha, Momos, Samosas, Thukpa, and traditional sweets when you visit Bodh Gaya."
          />
          <meta
            name="keywords"
            content="Bodh Gaya, local cuisine, food, Litti Chokha, Momos, Samosas, Thukpa, sweets, Bodh Gaya restaurants"
          />
          <link rel="canonical" href={pageUrl} />
          <meta property="og:title" content="Local Cuisine of Bodh Gaya | Must-Try Food" />
          <meta property="og:description" content="Discover the best local cuisine in Bodh Gaya. Try Litti Chokha, Momos, and traditional sweets." />
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
        content
      )}
    </section>
  );
}

export default Cuisine;