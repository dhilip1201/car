import React from 'react';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import './Home.css';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;