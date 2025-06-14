import React from 'react';
import styles from './Gallery.module.css';

function Gallery() {
  const galleryItems = [
    {
      id: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Mahabodhi_Temple_Bodh_Gaya_Bihar.jpg",
      title: "Mahabodhi Temple at Sunset",
      description: "The iconic temple complex illuminated during golden hour"
    },
    {
      id: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bodhi_Tree%2C_Bodh_Gaya%2C_India.jpg",
      title: "Sacred Bodhi Tree",
      description: "The descendant of the original tree under which Buddha attained enlightenment"
    },
    {
      id: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Great_Buddha_Statue%2C_Bodh_Gaya.jpg",
      title: "Great Buddha Statue",
      description: "The towering Buddha statue overlooking the gardens"
    },
    {
      id: 4,
      image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Mahabodhi_Temple_Bodh_Gaya_Bihar.jpg",
      title: "Temple Architecture",
      description: "Intricate details of the ancient temple structure"
    },
    {
      id: 5,
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bodhi_Tree%2C_Bodh_Gaya%2C_India.jpg",
      title: "Meditation Gardens",
      description: "Peaceful gardens where pilgrims meditate"
    },
    {
      id: 6,
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Great_Buddha_Statue%2C_Bodh_Gaya.jpg",
      title: "Evening Prayers",
      description: "Monks gathering for evening ceremonies"
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
            />
            <div className={styles.galleryOverlay}>
              <h3 className={styles.galleryTitle}>{item.title}</h3>
              <p className={styles.galleryDesc}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;