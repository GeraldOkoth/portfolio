import React from 'react';
import './styles.css';
import HomePage from './pages/home/HomePage';
// import Slideshow from './Slideshow';
import AboutPage from './pages/about/AboutPage';
import Services from './pages/services/Services';
import Testimonials from './pages/testimonials/Testimonials';
import Faq from './pages/faq/Faq';
import Contact from './pages/contact/Contact';
import Footer from './pages/footer/Footer';

function App() {
  return (
    <div className="App">
      <HomePage />
      <AboutPage />
      {/* <Slideshow /> */}
      <Services />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
