import React from 'react';
import './App.css';
import './styles.css';
import HomePage from './HomePage';
import Slideshow from './Slideshow';
import AboutPage from './AboutPage';
import Services from './Services';
import Testimonials from './Testimonials';
import Faq from './Faq';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <HomePage />
      <AboutPage />
      <Slideshow />
      <Services />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
