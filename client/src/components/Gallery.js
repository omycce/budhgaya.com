import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import styles from './Gallery.module.css';
import SectionHeader from './SectionHeader';
import PageContainer from './PageContainer';

function Gallery() {
  const location = useLocation();
  const isStandalonePage = location.pathname === '/gallery';
  const pageUrl = 'https://budhgaya.com/gallery';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Bodh Gaya Gallery',
    description: 'A collection of images showcasing the Mahabodhi Temple, Bodhi Tree, and sacred moments in Bodh Gaya',
    url: pageUrl,
    image: [
      'https://budhgaya.com/assets/images/bodh-day1.png',
      'https://budhgaya.com/assets/images/bodh-night1.png',
      'https://budhgaya.com/assets/images/bodh-vajrasana.png'
    ]
  };
  const galleryItems = [
    {
      id: 1,
      image: "/assets/images/bodh-day1.png",
      external: "https://bodhgayatemple.com/wp-content/uploads/2021/04/Day1.png",
      title: "Day View",
      description: "Daytime view of the Mahabodhi complex"
    },
    {
      id: 2,
      image: "/assets/images/bodh-night1.png",
      external: "https://bodhgayatemple.com/wp-content/uploads/2021/04/Night1.png",
      title: "Night View",
      description: "The temple illuminated at night"
    },
    {
      id: 3,
      image: "/assets/images/bodh-vajrasana.png",
      external: "https://bodhgayatemple.com/wp-content/uploads/2021/04/Vajrasana-1.png",
      title: "Vajrasana",
      description: "The Vajrasana shrine inside the Mahabodhi Temple"
    },
    {
      id: 4,
      image: "/assets/images/bodh-1.jpg",
      external: "https://bodhgayatemple.com/wp-content/uploads/2021/12/1.jpg",
      title: "Temple Slider",
      description: "One of the featured slider images from the temple site"
    },
    {
      id: 5,
      image: "/assets/images/bodh-misc1.png",
      external: "https://bodhgayatemple.com/wp-content/uploads/2020/12/Animesha-Lochana-Chaitya.png",
      title: "Chaitya",
      description: "Animesha Lochana Chaitya from the temple grounds"
    }
  ];

  const content = (
    <>
      <SectionHeader
        title="Gallery"
        subtitle="Bodh Gaya in pictures — Mahabodhi Temple, Bodhi Tree and sacred moments"
        id="gallery"
      />
      <p style={{color: '#555', maxWidth: 780, margin: '0.75rem auto 2rem', padding: '0 1rem', textAlign: 'center'}}>
        A selection of images that capture Bodh Gaya's spiritual heart:
        the Mahabodhi Temple complex, the Bodhi Tree and the international
        monasteries that surround the sacred grounds. Each image tells a story
        of devotion, history, and the timeless beauty of this sacred place.
      </p>

      <div className={styles.galleryGrid}>
        {galleryItems.map((item) => (
          <div key={item.id} className={`${styles.galleryItem} fade-up`}>
            <figure>
              <img
                src={item.image}
                srcSet={`${item.image} 1x, ${item.external} 2x`}
                alt={item.title + ' — ' + item.description}
                className={styles.galleryImage}
                loading="lazy"
                decoding="async"
                onError={(e) => { e.target.onerror = null; e.target.src = item.external; }}
              />
              <figcaption className={styles.galleryOverlay}>
                <h3 className={styles.galleryTitle}>{item.title}</h3>
                <p className={styles.galleryDesc}>{item.description}</p>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <section className={styles.gallerySection} id="gallery">
      {isStandalonePage && (
        <Helmet>
          <title>Bodh Gaya Photo Gallery | Mahabodhi Temple Images</title>
          <meta name="description" content="Explore stunning photos of Bodh Gaya: Mahabodhi Temple, Bodhi Tree, and sacred moments. Day and night views of this UNESCO World Heritage Site." />
          <meta name="keywords" content="Bodh Gaya photos, Mahabodhi Temple images, Bodhi Tree pictures, Bodh Gaya gallery, Buddhist pilgrimage photos" />
          <link rel="canonical" href={pageUrl} />
          <meta property="og:title" content="Bodh Gaya Photo Gallery | Mahabodhi Temple Images" />
          <meta property="og:description" content="Explore stunning photos of Bodh Gaya: Mahabodhi Temple, Bodhi Tree, and sacred moments." />
          <meta property="og:url" content={pageUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://budhgaya.com/assets/images/bodh-day1.png" />
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

export default Gallery;