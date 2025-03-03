import React from 'react';
import './css/dist/styles.css';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import Services from './pages/services/Services';
import Education from './pages/education/Education';
import Skills from './pages/skills/Skills';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
// import Slideshow from './Slideshow';
// import Testimonials from './pages/testimonials/Testimonials';
// import Faq from './pages/faq/Faq';

function App() {
  return (
    <div className="App">
      <HomePage />
      <AboutPage />
      <Education /> 
      <Skills />
      <Services />
      <Contact />
      <Footer />
      {/* <Slideshow /> */}
      {/* <Testimonials /> */}
      {/* <Faq /> */}
    </div>
  );
}

export default App;
