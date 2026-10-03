import { lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./css/dist/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const About = lazy(() => import("./pages/about/About"));
const Skills = lazy(() => import("./pages/skills/Skills"));
const Projects = lazy(() => import("./pages/project/Projects"));
const Services = lazy(() => import("./pages/services/Services"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      {/* Only render Analytics if we are not on localhost */}
      {process.env.NODE_ENV === "production" && <Analytics />}
    </div>
  );
}

export default App;
