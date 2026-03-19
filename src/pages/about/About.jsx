import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 }
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.h2
          className="about-title"
          {...fadeInUp}
        >
          About <span className="highlight">Me</span>
        </motion.h2>

        <div className="about-content">
          {/* Image Section with Mission Overlay */}
          <motion.div
            className="about-image-wrapper"
            {...fadeInLeft}
          >
            <div className="image-container">
              <img
                src="/images/about.jpg"
                alt="Gerald Okoth - Frontend Developer"
                className="about-image"
              />
              <div className="mission-overlay">
                <div className="mission-content">
                  <h3>Mission Statement</h3>
                  <p>
                    To be a person of integrity, championing a just society that 
                    recognizes, upholds, and protects human rights and freedoms, 
                    while inspiring others through my strengths and talent to 
                    achieve a better quality of life.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="quick-stats">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Learning</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Dedication</span>
              </div>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            className="about-info"
            {...fadeInRight}
          >
            <div className="info-header">
              <h3>Frontend Developer & UI/UX Designer</h3>
              <p className="tagline">
                Crafting beautiful, user-centered digital experiences
              </p>
            </div>

            <div className={`about-text ${isExpanded ? 'expanded' : 'collapsed'}`}>
              <p className="intro">
                I'm a passionate <strong>Frontend Developer</strong> and <strong>UI/UX Designer</strong> currently 
                enrolled in the <strong>ALX Software Engineering Program</strong>, where I'm building expertise 
                in creating responsive, accessible, and visually compelling web applications.
              </p>

              <p className="para-1">
                My focus is on translating design concepts into clean, efficient code using modern technologies 
                like <strong>React, JavaScript, TypeScript, and Sass</strong>. I combine technical skills with 
                design thinking to deliver intuitive user interfaces that prioritize both aesthetics and functionality.
              </p>

              <p className="para-2">
                What sets me apart is my dual expertise in <strong>development and design</strong>. I work 
                seamlessly with tools like <strong>Figma and InVision</strong> to prototype and refine user 
                experiences before bringing them to life with code. This end-to-end approach ensures pixel-perfect 
                implementations that match design intent.
              </p>

              {/* Content that shows on expand */}
              <div className="expandable-content">
                <p className="para-3">
                  My journey into software engineering stems from a genuine curiosity about how technology 
                  shapes user behavior and solves real-world problems. I thrive on transforming ideas from 
                  wireframes to interactive prototypes to production-ready applications.
                </p>

                <p className="para-4">
                  Beyond technical skills, my background in <strong>leadership and team collaboration</strong> has 
                  equipped me with strong communication abilities and the capacity to work effectively in diverse, 
                  cross-functional teams—essential skills for modern software development.
                </p>

                <p className="para-5">
                  I believe the best digital products are built at the intersection of <strong>empathy, 
                  creativity, and technical excellence</strong>. I'm committed to creating accessible, 
                  user-focused solutions that not only meet business objectives but also enhance people's 
                  daily lives.
                </p>
              </div>
            </div>

            {/* Read More Button - Only visible on mobile/tablet */}
            <button 
              className="read-more-btn" 
              onClick={toggleExpand}
              aria-expanded={isExpanded}
              aria-label={isExpanded ? "Read less" : "Read more"}
            >
              {isExpanded ? (
                <>
                  Read Less <FaChevronUp />
                </>
              ) : (
                <>
                  Read More <FaChevronDown />
                </>
              )}
            </button>

            {/* Key Skills Highlight */}
            <div className="skills-highlight">
              <h4>Core Competencies</h4>
              <div className="skills-tags">
                <span className="skill-tag">React Development</span>
                <span className="skill-tag">UI/UX Design</span>
                <span className="skill-tag">Responsive Design</span>
                <span className="skill-tag">JavaScript/TypeScript</span>
                <span className="skill-tag">Figma Prototyping</span>
                <span className="skill-tag">Accessibility (A11y)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;