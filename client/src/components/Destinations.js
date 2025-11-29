import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import PageContainer from './PageContainer';
import SectionHeader from './SectionHeader';

function Destinations() {
  const location = useLocation();
  const isStandalonePage = location.pathname === '/destinations';
  const pageUrl = 'https://budhgaya.com/destinations';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Destinations in Gaya and Bodh Gaya',
    description: 'Sacred sites and cultural highlights across Gaya and Bodh Gaya including temples, monasteries, and historical sites',
    itemListElement: [
      {
        '@type': 'TouristDestination',
        name: 'Vishnupad Temple, Gaya',
        description: 'Riverside shrine on the Falgu, famed for the footprint impression in basalt'
      },
      {
        '@type': 'TouristDestination',
        name: 'Mahabodhi Temple & Bodhi Tree',
        description: 'UNESCO-listed temple complex where the Buddha attained enlightenment'
      },
      {
        '@type': 'TouristDestination',
        name: '80 ft Buddha Statue',
        description: 'An iconic 25 m seated Buddha consecrated in 1989'
      }
    ]
  };

  const destinations = [
    { title: 'Vishnupad Temple, Gaya', description: 'Riverside shrine on the Falgu, famed for the footprint impression in basalt and Pind Daan rituals. The current temple was rebuilt by Ahilyabai Holkar (18th c.).' },
    { title: 'Bodhgaya — Mahabodhi Temple & Bodhi Tree', description: 'UNESCO-listed temple complex where the Buddha attained enlightenment. Highlights include Vajrasana, ancient railings, votive stupas, and the sacred Bodhi Tree succession.' },
    { title: '80 ft Buddha Statue', description: 'An iconic 25 m seated Buddha consecrated in 1989. A photogenic landmark near the Mahabodhi complex and a popular stop for pilgrims and visitors.' },
    { title: 'Archaeological Museum (Bodh Gaya)', description: 'Collections of Buddhist and Hindu sculptures from Bodh Gaya and nearby sites. Note: typically closed on Fridays; check hours before visiting.' },
    { title: 'Thai Monastery', description: 'One of the earliest international monasteries in Bodh Gaya, with ornate Thai-style architecture, murals of the Buddha\'s life, and a tranquil reflection pool.' },
    { title: 'Sujata Garh / Sujata Village', description: 'Across the river from Bodh Gaya, this stupa and village commemorate Sujata\'s milk-rice offering prior to the Buddha\'s enlightenment; a serene rural excursion.' },
    { title: 'Dungeshwari Hill (Prag Bodhi)', description: 'Cave shrines where Siddhartha is believed to have practiced austerities for years. Features an emaciated Buddha image and hilltop views; modest footwear and water recommended.' },
    { title: 'Baba Koteshwarnath Temple', description: 'A revered Shiva temple near the confluence of Morhar and Dargha rivers, associated with a Sahasra-linga legend; peak crowds during the monsoon month of Sawan.' }
  ];

  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
  ];

  const content = (
    <>
      <SectionHeader
        title="Destinations"
        subtitle="Sacred sites and cultural highlights across Gaya and Bodh Gaya"
        id="destinations"
      />
      <p style={{color: '#555', marginBottom: '2rem', textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem', lineHeight: '1.7'}}>
        Explore sacred sites and cultural highlights across Gaya and Bodh Gaya. Below are key places of interest with brief notes to help plan your visit.
      </p>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginTop: 24}}>
        {destinations.map((dest, index) => {
          const gradient = gradients[index % gradients.length];
          return (
            <article key={index} style={{
              border: '2px solid transparent',
              borderRadius: 16,
              padding: '1.5rem',
              background: 'linear-gradient(white, white), ' + gradient,
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
            }}>
              <h3 style={{margin: '0 0 8px', background: gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>{dest.title}</h3>
              <p style={{margin: 0, color: '#555', lineHeight: '1.7'}}>{dest.description}</p>
            </article>
          );
        })}
      </div>

      <p style={{marginTop: 24, color: '#666', fontSize: 14, textAlign: 'center'}}>
        Source: <a href="https://gaya.nic.in/places-of-interest/" target="_blank" rel="noopener noreferrer">Gaya District — Places of Interest</a>
      </p>
    </>
  );

  return (
    <>
      {isStandalonePage && (
        <Helmet>
          <title>Destinations in Gaya & Bodh Gaya | Sacred Sites & Attractions</title>
          <meta name="description" content="Explore sacred sites and cultural highlights across Gaya and Bodh Gaya. Discover temples, monasteries, and historical sites including Vishnupad Temple, Mahabodhi Temple, and more." />
          <meta name="keywords" content="Bodh Gaya destinations, Gaya attractions, Mahabodhi Temple, Vishnupad Temple, Buddhist sites, Bodh Gaya places to visit" />
          <link rel="canonical" href={pageUrl} />
          <meta property="og:title" content="Destinations in Gaya & Bodh Gaya | Sacred Sites & Attractions" />
          <meta property="og:description" content="Explore sacred sites and cultural highlights across Gaya and Bodh Gaya." />
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
        <div style={{padding: '4rem 2rem', maxWidth: 1100, margin: '0 auto'}}>
          {content}
        </div>
      )}
    </>
  );
}

export default Destinations;

