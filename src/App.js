import React from 'react';
import { Analytics } from "@vercel/analytics/react";
import './css/dist/styles.css';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import Services from './pages/services/Services';
// import EducationEd from './pages/education/EducationEd';
// import Education from './pages/education/Education';
// import Skills from './pages/skills/Skills';
import SkillsEd from './pages/skills/SkillsEd';
// import Projects from './pages/project/Projects';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import Tweets from './pages/tweets/Tweets';
// import Slideshow from './Slideshow';
// import Testimonials from './pages/testimonials/Testimonials';
// import Faq from './pages/faq/Faq';

function App() {
  return (
    <div className="App">
      <HomePage />
      <AboutPage />
      {/* <EducationEd/> */}
      {/* <Education />  */}
      <SkillsEd />
      {/* <Skills /> */}
      {/* <Projects /> */}
      <Services />
      <Contact />
      <Tweets />
      <Footer />
      <Analytics />
      {/* <Slideshow /> */}
      {/* <Testimonials /> */}
      {/* <Faq /> */}
    </div>
  );
}

export default App;
