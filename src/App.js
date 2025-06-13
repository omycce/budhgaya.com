import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Explore from './components/Explore';
import Gallery from './components/Gallery';
import About from './components/About';
import Cuisine from './components/Cuisine';
import Events from './components/Events';
import FAQ from './components/FAQ';
import TravelDetails from './components/TravelDetails';     
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import myImage from '../assets/images/my-image.jpg';

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
        <TravelDetails />
      </main>
      <Footer />
    </>
  );
}

export default App;

/* CSS for ScrollToTop button */
.scroll-to-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  background: linear-gradient(120deg, #005fa3 0%, #ffb347 100%);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 2em;
  box-shadow: 0 4px 24px #005fa344;
  cursor: pointer;
  z-index: 1000;
  transition: background .2s, box-shadow .2s;
}
.scroll-to-top:hover {
  background: #ffb347;
  color: #005fa3;
  box-shadow: 0 8px 32px #ffb34755;
}