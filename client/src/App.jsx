import React from 'react';
import Gallery from './components/Gallery';
import About from './components/About';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Timeline />
      <Reviews />
      <Booking />
      <Contact />
    </div>
  );
};

export default App;