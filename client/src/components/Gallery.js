import React from 'react';
import styles from './Gallery.module.css';

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
      <h2 className={styles.sectionTitle}>Photo Gallery</h2>
      <div className={styles.galleryGrid}>
        {galleryItems.map((item) => (
          <div key={item.id} className={styles.galleryItem}>
            <img
              src={item.image}
              alt={item.title}
              className={styles.galleryImage}
              onError={(e) => { e.target.onerror = null; e.target.src = item.external; }}
            />
            <div className={styles.galleryOverlay}>
              <h3 className={styles.galleryTitle}>{item.title}</h3>
              <p className={styles.galleryDesc}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className={styles.attribution}>Photos: Courtesy of <a href="https://bodhgayatemple.com" target="_blank" rel="noopener">Bodhgaya Temple</a></p>
    </section>
  );
}

export default Gallery;