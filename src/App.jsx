import { lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./css/dist/styles.css";

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
      <Suspense fallback={null}>
        <HomePage />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </Suspense>
      {/* Only render Analytics if we are not on localhost */}
      {process.env.NODE_ENV === "production" && <Analytics />}
    </div>
  );
}

export default App;
