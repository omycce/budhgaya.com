import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Hero from './Hero';
import Featured from './Featured';
import Explore from './Explore';
import Gallery from './Gallery';
import About from './About';
import Cuisine from './Cuisine';
import Events from './Events';
import FAQ from './FAQ';
import TravelDetails from './TravelDetails';
import LiveData from './LiveData';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
      <Helmet>
        <title>Bodh Gaya Tourism - Buddhist Pilgrimage Site & Travel Guide</title>
        <meta name="description" content="Discover Bodh Gaya, India's sacred Buddhist pilgrimage site. Plan your visit to Mahabodhi Temple, explore local cuisine, find accommodation, and learn about cultural events." />
        <meta name="keywords" content="Bodh Gaya, Buddhist pilgrimage, Mahabodhi Temple, Buddhism, India tourism, Bihar tourism, meditation retreat, spiritual tourism" />
        <meta property="og:title" content="Bodh Gaya Tourism - Buddhist Pilgrimage Site & Travel Guide" />
        <meta property="og:description" content="Discover Bodh Gaya, India's sacred Buddhist pilgrimage site. Plan your visit to Mahabodhi Temple, explore local cuisine, find accommodation, and learn about cultural events." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://budhgaya.com" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <Featured />
        <Explore />
        <Gallery />
        <About />
        <LiveData />
        <Cuisine />
        <Events />
        <FAQ />
        <TravelDetails />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;