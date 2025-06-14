import React from 'react';
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
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Featured />
        <Explore />
        <Gallery />
        <About />
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