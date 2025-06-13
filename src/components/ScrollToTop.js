import React, { useState, useEffect } from 'react';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return visible ? (
    <button
      className="scroll-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  ) : null;
}

export default ScrollToTop;

<head>
  <Helmet>
    <meta charset="UTF-8" />
    <title>Bodh Gaya Travel Guide | Sacred Sites, Attractions & Travel Info</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Discover Bodh Gaya: sacred Buddhist sites, top attractions, local cuisine, festivals, and travel tips. Plan your spiritual journey to India's enlightenment capital." />
    <meta name="keywords" content="Bodh Gaya, travel guide, Buddhist, Mahabodhi Temple, attractions, India, pilgrimage, cuisine, festivals" />
    <meta property="og:title" content="Bodh Gaya Travel Guide" />
    <meta property="og:description" content="Explore Bodh Gaya's sacred sites, attractions, and travel info. Your complete guide to India's spiritual heart." />
    <meta property="og:image" content="https://yourdomain.com/path-to-hero-image.jpg" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://yourdomain.com/" />
    <!-- ...other tags... -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": "Bodh Gaya",
        "description": "A sacred Buddhist site in India, home to the Mahabodhi Temple and other attractions.",
        "image": "https://yourdomain.com/path-to-hero-image.jpg",
        "url": "https://yourdomain.com/"
      }
    </script>
  </Helmet>
</head>

<h2>What to Explore in Bodh Gaya</h2>
<img src={exploreBanner} alt="Bodh Gaya Monastery and Temples" />
<img src={imgSrc} alt="Mahabodhi Temple in Bodh Gaya, India" />

body {
  background: var(--bg), url('https://www.transparenttextures.com/patterns/symphony.png');
  background-repeat: repeat;
}

section, .featured, .explore-section, .gallery-section, .about-section, .travel-details, .faq-section, .cuisine-section, .events-section {
  position: relative;
  margin-bottom: 64px;
}
section:not(:first-child)::before,
.featured:not(:first-child)::before,
.explore-section:not(:first-child)::before,
.gallery-section:not(:first-child)::before,
.about-section:not(:first-child)::before,
.travel-details:not(:first-child)::before,
.faq-section:not(:first-child)::before,
.cuisine-section:not(:first-child)::before,
.events-section:not(:first-child)::before {
  content: "";
  display: block;
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #005fa3 0%, #ffb347 100%);
  border-radius: 2px;
  margin: 0 auto 32px auto;
  opacity: 0.18;
}

.quicklink {
  box-shadow: 0 2px 12px #005fa322, 0 0 0 0 #ffb347;
  transition: box-shadow .18s, background .18s, color .18s, transform .15s;
}
.quicklink:hover {
  box-shadow: 0 8px 32px #ffb34755, 0 0 0 4px #ffb34733;
}

.card {
  transition: transform .22s cubic-bezier(.4,2,.6,1), box-shadow .22s;
  box-shadow: 0 4px 24px rgba(0,95,163,0.09);
}
.card:hover {
  transform: translateY(-16px) scale(1.04) rotate(-1deg);
  box-shadow: 0 16px 54px rgba(0,95,163,0.22), 0 2px 16px #ffb34733;
  border: 2.5px solid #ffb347;
}
.card-img {
  filter: brightness(0.98) saturate(1.13) drop-shadow(0 2px 8px #005fa344);
  transition: filter .22s;
}
.card:hover .card-img {
  filter: brightness(1.08) saturate(1.22) drop-shadow(0 4px 16px #ffb34744);
}

.main-header {
  background: linear-gradient(90deg, #005fa3 0%, #ffb347 100%);
  box-shadow: 0 4px 24px rgba(0,0,0,0.09);
  position: sticky;
  top: 0;
  z-index: 10;
  animation: headerfade 1.2s;
}
@keyframes headerfade {
  from { opacity: 0; transform: translateY(-20px);}
  to   { opacity: 1; transform: translateY(0);}
}
.nav .logo {
  color: #fff !important;
  text-shadow: 1px 3px 8px #005fa3cc;
}
.nav .logo span {
  color: #ffb347 !important;
}