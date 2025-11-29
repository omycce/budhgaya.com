import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Featured from './Featured';
import Explore from './Explore';
import Gallery from './Gallery';
import About from './About';
import { Routes, Route } from 'react-router-dom';
import Cuisine from './Cuisine';
import Events from './Events';
import FAQ from './FAQ';
import TravelDetails from './TravelDetails';
import Destinations from './Destinations';
import Books from './Books';
import Trips from './Trips';
import Stories from './Stories';
// Encyclopedia and LiveData were intentionally removed from the client-side
// single-page app. A static `encyclopedia.html` is available in `public/`.
import Chatbot from './Chatbot';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'en'; // Default to English
    i18n.changeLanguage(lang); // Change language dynamically
  }, [i18n]);

  // Scroll to section if hash is present (for /explore page)
  useEffect(() => {
    if (window.location.pathname === '/explore' && window.location.hash) {
      const el = document.getElementById(window.location.hash.replace('#', ''));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="App">
      <Helmet>
        <title>Bodh Gaya Tourism - Buddhist Pilgrimage Site & Travel Guide</title>
        <meta name="description" content="Discover Bodh Gaya (Budhgaya) — Mahabodhi Temple, Bodhi tree, pilgrimage guides, travel tips, events, and cultural information for visitors to Gaya, Bihar." />
        <meta name="keywords" content="Bodh Gaya, Budhgaya, Gaya, Bodhgaya, Mahabodhi Temple, bodhi tree, Buddhist pilgrimage, travel guide" />
        <link rel="alternate" href="https://budhgaya.com" hreflang="en" />
        <link rel="alternate" href="https://budhgaya.com?lang=hi" hreflang="hi" />
        <meta property="og:title" content="Bodh Gaya Tourism - Buddhist Pilgrimage Site & Travel Guide" />
        <meta property="og:description" content="Discover Bodh Gaya, India's sacred Buddhist pilgrimage site. Plan your visit to Mahabodhi Temple, explore local cuisine, find accommodation, and learn about cultural events." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://budhgaya.com" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <main>
        <Routes>
          {/* Dedicated minimal pages for each section */}
          <Route path="/attractions" element={<Featured />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/cuisine" element={<Cuisine />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/books" element={<Books />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/travel-details" element={<TravelDetails />} />
          {/* The original explore page with all sections */}
          <Route path="/all" element={
            <>
              <Featured />
              <Gallery />
              <About />
              <Events />
              <Cuisine />
              <Explore />
              <FAQ />
              <TravelDetails />
            </>
          } />
          <Route path="/" element={
            <>
              <Hero />
              <Featured />
            </>
          } />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
      <ScrollToTop />
    </div>
  );
}

export default App;