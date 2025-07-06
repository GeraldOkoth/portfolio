import React from 'react';
import { Analytics } from "@vercel/analytics/react";
import './css/dist/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './pages/home/HomePage';
import About from './pages/about/About';
import Services from './pages/services/Services';
// import EducationEd from './pages/education/EducationEd';
// import Education from './pages/education/Education';
// import SkillsEd from './pages/skills/SkillsEd';
import Skills from './pages/skills/Skills';
import Projects from './pages/project/Projects';
import Tweets from './pages/tweets/Tweets';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
// import Slideshow from './Slideshow';
// import Testimonials from './pages/testimonials/Testimonials';
// import Faq from './pages/faq/Faq';

function App() {
  return (
    <div className="App">
      <HomePage />
      <About />
      {/* <EducationEd/> */}
      {/* <Education />  */}
      {/* <SkillsEd /> */}
      <Skills />
      <Projects />
      <Services />
      <Tweets />
      <Contact />
      <Footer />
      <Analytics />
      {/* <Slideshow /> */}
      {/* <Testimonials /> */}
      {/* <Faq /> */}
    </div>
  );
}

export default App;
