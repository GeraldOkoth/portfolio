import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  FaLinkedinIn, 
  FaGithub, 
  FaTwitter, 
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaDownload,
  FaEye,
  FaArrowRight
} from "react-icons/fa";
import TopNavigationBar from "../../components/header/TopNavigationBar";
import ScrollProgress from "./ScrollProgress";

// Move roles array outside component to avoid ESLint dependency warning
const ROLES = [
  "Frontend Developer",
  "UI/UX Designer",
  "React Specialist",
  "Creative Problem Solver"
];

const SOCIAL_LINKS = [
  { 
    icon: <FaLinkedinIn />, 
    name: "LinkedIn", 
    url: "https://www.linkedin.com/in/geraldokoth/",
    color: "#0077b5"
  },
  { 
    icon: <FaGithub />, 
    name: "GitHub", 
    url: "https://github.com/GeraldOkoth",
    color: "#333"
  },
  { 
    icon: <FaTwitter />, 
    name: "Twitter", 
    url: "https://x.com/gerald_okothKE",
    color: "#1da1f2"
  },
  { 
    icon: <FaInstagram />, 
    name: "Instagram", 
    url: "https://www.instagram.com/okothgerald449",
    color: "#E4405F"
  },
  { 
    icon: <FaYoutube />, 
    name: "YouTube", 
    url: "https://www.youtube.com/@geraldokothKE",
    color: "#ff0000"
  },
  { 
    icon: <FaFacebookF />, 
    name: "Facebook", 
    url: "https://web.facebook.com/gerald.okoth.944/",
    color: "#1877f2"
  }
];

function HomePage() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  // Typing animation effect - now with no dependency warnings
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array is now correct since ROLES is constant

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Simulate download
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/assets/gerald_okoth_resume.pdf';
      link.download = 'Gerald_Okoth_Resume.pdf';
      link.click();
      
      setIsDownloading(false);
    }, 1000);
  };

  const handleViewResume = () => {
    window.open('/assets/gerald_okoth_resume.pdf', '_blank');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7 }
  };

  return (
    <>
      <TopNavigationBar />
      <ScrollProgress />
      
      <section className="home-page" id="home">
        <div className="hero-container">
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-content">
              <motion.div
                className="hero-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="badge-dot"></span>
                Available for opportunities
              </motion.div>

              <motion.h1
                className="hero-title"
                {...fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Hi, I'm <span className="highlight">Gerald Okoth</span>
              </motion.h1>

              <motion.div
                className="hero-subtitle"
                {...fadeInUp}
                transition={{ delay: 0.4 }}
              >
                <span className="subtitle-text">I'm a </span>
                <span className="animated-role" key={currentRole}>
                  {ROLES[currentRole]}
                </span>
              </motion.div>

              <motion.p
                className="hero-description"
                {...fadeInUp}
                transition={{ delay: 0.6 }}
              >
                Crafting beautiful, user-centered web applications with modern 
                technologies. Currently advancing my skills at{" "}
                <strong>ALX Software Engineering Program</strong>, transitioning 
                from frontend development and UI/UX design to full-stack engineering.
              </motion.p>

              <motion.div
                className="value-proposition"
                {...fadeInUp}
                transition={{ delay: 0.8 }}
              >
                <h3>What I Bring</h3>
                <ul className="value-list">
                  <li>
                    <FaArrowRight className="list-icon" />
                    <span>Pixel-perfect UI implementations from Figma to code</span>
                  </li>
                  <li>
                    <FaArrowRight className="list-icon" />
                    <span>Responsive, accessible web applications (React, TypeScript)</span>
                  </li>
                  <li>
                    <FaArrowRight className="list-icon" />
                    <span>User-focused design thinking and problem-solving</span>
                  </li>
                  <li>
                    <FaArrowRight className="list-icon" />
                    <span>Collaborative teamwork and clean, maintainable code</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="opportunities-section"
                {...fadeInUp}
                transition={{ delay: 1 }}
              >
                <h4>Open to</h4>
                <div className="opportunities-tags">
                  <span className="opp-tag">Internships</span>
                  <span className="opp-tag">Freelance</span>
                  <span className="opp-tag">Collaborations</span>
                  <span className="opp-tag">Mentorship</span>
                </div>
              </motion.div>

              <motion.div
                className="hero-actions"
                {...fadeInUp}
                transition={{ delay: 1.2 }}
              >
                <a href="#projects" className="btn btn-primary">
                  View Projects
                  <FaArrowRight className="btn-icon" />
                </a>
                
                <div className="resume-buttons">
                  <button 
                    className="btn btn-secondary"
                    onClick={handleViewResume}
                  >
                    <FaEye className="btn-icon" />
                    View Resume
                  </button>
                  
                  <button 
                    className="btn btn-download"
                    onClick={handleDownload}
                    disabled={isDownloading}
                  >
                    {isDownloading ? (
                      <>
                        <span className="spinner"></span>
                        Downloading...
                      </>
                    ) : (
                      <>
                        <FaDownload className="btn-icon" />
                        Download
                      </>
                    )}
                  </button>
                </div>
              </motion.div>

              <motion.div
                className="social-links"
                {...fadeInUp}
                transition={{ delay: 1.4 }}
              >
                <p className="social-label">Connect with me</p>
                <div className="social-icons">
                  {SOCIAL_LINKS.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      style={{ '--social-color': social.color }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                      aria-label={social.name}
                    >
                      {social.icon}
                      <span className="social-tooltip">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              className="hero-image-wrapper"
              {...fadeInRight}
              transition={{ delay: 0.5 }}
            >
              <div className="image-container">
                <div className="image-backdrop"></div>
                <div className="image-border"></div>
                <img
                  src="/images/profile.JPG"
                  alt="Gerald Okoth - Frontend Developer & UI/UX Designer"
                  className="hero-image"
                />
                <div className="image-glow"></div>
              </div>

              {/* Floating Elements */}
              <div className="floating-element element-1">
                <span className="element-icon">💻</span>
                <span className="element-text">Frontend Dev</span>
              </div>
              <div className="floating-element element-2">
                <span className="element-icon">🎨</span>
                <span className="element-text">UI/UX Design</span>
              </div>
              <div className="floating-element element-3">
                <span className="element-icon">⚛️</span>
                <span className="element-text">React</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <p>Scroll to explore</p>
        </motion.div>
      </section>
    </>
  );
}

export default HomePage;