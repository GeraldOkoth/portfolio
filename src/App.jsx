import { lazy, Suspense, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./css/dist/styles.css";
import TopNavigationBar from "./components/header/TopNavigationBar";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const About = lazy(() => import("./pages/about/About"));
const Skills = lazy(() => import("./pages/skills/Skills"));
const Projects = lazy(() => import("./pages/project/Projects"));
const Services = lazy(() => import("./pages/services/Services"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <BrowserRouter>
        <ScrollToTop />
        <TopNavigationBar />
        <Suspense fallback={null}>
          <main style={{ flex: "1 0 auto", display: "flex", flexDirection: "column" }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </Suspense>
      </BrowserRouter>
      {/* Only render Analytics if we are not on localhost */}
      {process.env.NODE_ENV === "production" && <Analytics />}
    </div>
  );
}

export default App;
