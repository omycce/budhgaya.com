import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import styles from './About.module.css';
import SectionHeader from './SectionHeader';
import PageContainer from './PageContainer';

function About() {
  const location = useLocation();
  const isStandalonePage = location.pathname === '/about';
  const pageUrl = 'https://budhgaya.com/about';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Bodh Gaya',
    description: 'The site where Siddhartha Gautama attained enlightenment beneath the Bodhi Tree. The Mahabodhi Temple Complex is a UNESCO World Heritage Site.',
    url: pageUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bodh Gaya',
      addressRegion: 'Bihar',
      postalCode: '824231',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '24.6961',
      longitude: '84.9914'
    },
    containedInPlace: {
      '@type': 'Place',
      name: 'Gaya District',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Bihar',
        addressCountry: 'IN'
      }
    }
  };

  const content = (
    <>
      <SectionHeader
        title="About Bodh Gaya"
        subtitle="The place of the Buddha's enlightenment"
        id="about"
      />
      <div className={styles.content}>
        <p style={{fontSize: '1.08rem', color: '#444', marginBottom: '1.5rem', lineHeight: '1.8'}}>
          Bodh Gaya (Bodh Gayā) is the site where Siddhartha Gautama attained
          enlightenment beneath the Bodhi Tree. The Mahabodhi Temple Complex here
          is a UNESCO World Heritage Site and remains the most important pilgrimage
          destination in Buddhism, with temples and monasteries maintained by many
          international Buddhist traditions.
        </p>
        
        <h3 style={{fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-dark)'}}>Historical Significance</h3>
        <p style={{fontSize: '1rem', color: '#555', marginBottom: '1.5rem', lineHeight: '1.8'}}>
          Bodh Gaya has been a center of Buddhist pilgrimage for over 2,500 years. The site's history
          dates back to the 6th century BCE when Prince Siddhartha Gautama, after years of spiritual
          seeking, sat in meditation under a pipal tree (Ficus religiosa) and achieved enlightenment,
          becoming the Buddha. The current Mahabodhi Temple structure dates to the 5th-6th century CE,
          though it has been restored and rebuilt multiple times throughout history.
        </p>

        <h3 style={{fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-dark)'}}>The Mahabodhi Temple Complex</h3>
        <p style={{fontSize: '1rem', color: '#555', marginBottom: '1.5rem', lineHeight: '1.8'}}>
          The Mahabodhi Temple Complex encompasses the main temple, the sacred Bodhi Tree, Vajrasana
          (the Diamond Throne marking the exact spot of enlightenment), and numerous ancient stupas,
          shrines, and meditation areas. The temple's central tower rises 54 meters high and is
          surrounded by smaller towers and intricate stone carvings. The complex was designated a
          UNESCO World Heritage Site in 2002, recognizing its outstanding universal value.
        </p>

        <h3 style={{fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-dark)'}}>International Buddhist Presence</h3>
        <p style={{fontSize: '1rem', color: '#555', marginBottom: '1.5rem', lineHeight: '1.8'}}>
          Today, Bodh Gaya is home to monasteries and temples built by Buddhist communities from
          around the world, including Thailand, Japan, Tibet, Bhutan, Myanmar, Sri Lanka, China, and
          Vietnam. Each monastery reflects the architectural and cultural traditions of its country,
          creating a unique international Buddhist community. These monasteries offer meditation
          retreats, teachings, and accommodation for pilgrims.
        </p>

        <h3 style={{fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-dark)'}}>Pilgrimage and Tourism</h3>
        <p style={{fontSize: '1rem', color: '#555', marginBottom: '1.5rem', lineHeight: '1.8'}}>
          Bodh Gaya attracts millions of pilgrims and tourists annually, especially during Buddhist
          festivals like Buddha Purnima (Vesak). The site offers a profound spiritual experience
          for Buddhists and non-Buddhists alike, with opportunities for meditation, learning about
          Buddhist history and philosophy, and experiencing the rich cultural heritage of one of
          the world's most important religious sites.
        </p>
      </div>
    </>
  );

  return (
    <div className={styles.aboutSection} id="about">
      {isStandalonePage && (
        <Helmet>
          <title>About Bodh Gaya | History & Significance of the Buddhist Pilgrimage Site</title>
          <meta name="description" content="Learn about Bodh Gaya, the place where the Buddha attained enlightenment. Discover the history and significance of the Mahabodhi Temple, a UNESCO World Heritage Site." />
          <meta name="keywords" content="Bodh Gaya history, Buddha enlightenment, Mahabodhi Temple history, Buddhist pilgrimage, UNESCO World Heritage" />
          <link rel="canonical" href={pageUrl} />
          <meta property="og:title" content="About Bodh Gaya | History & Significance" />
          <meta property="og:description" content="Learn about Bodh Gaya, the place where the Buddha attained enlightenment beneath the Bodhi Tree." />
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
    </div>
  );
}

export default About;