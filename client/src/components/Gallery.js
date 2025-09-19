import React from 'react';
import styles from './Gallery.module.css';
import SectionHeader from './SectionHeader';

function Gallery() {
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

  return (
    <section className={styles.gallerySection} id="gallery">
        <SectionHeader
          title="Gallery"
          subtitle="Bodh Gaya in pictures — Mahabodhi Temple, Bodhi Tree and sacred moments"
          id="gallery"
        />
      <p style={{color: '#555', maxWidth: 780, margin: '0.6rem auto 0'}}>
        A small selection of images that capture Bodh Gaya's spiritual heart:
        the Mahabodhi Temple complex, the Bodhi Tree and the international
        monasteries that surround the sacred grounds. Click each image for a
        closer view and short caption.
      </p>

      <div className={styles.galleryGrid}>
        {galleryItems.slice(0,2).map((item) => (
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
    </section>
  );
}

export default Gallery;