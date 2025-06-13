import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Explore from './components/Explore';
import Gallery from './components/Gallery';
import About from './components/About';
import TravelDetails from './components/TravelDetails';     
import Footer from './components/Footer';
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