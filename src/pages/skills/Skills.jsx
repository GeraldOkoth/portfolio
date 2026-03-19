import { useState, useEffect, useRef } from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaVideo,
} from "react-icons/fa";
import {
  SiTypescript,
  SiWordpress,
  SiInvision,
  SiTailwindcss,
  SiCanva,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [animated, setAnimated] = useState(false);
  const skillsRef = useRef(null);

  const skillCategories = {
    Frontend: [
      { name: "HTML5", icon: <FaHtml5 />, level: 100, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "#1572B6" },
      { name: "Sass", icon: <FaSass />, level: 80, color: "#CC6699" },
      { name: "Bootstrap", icon: <FaBootstrap />, level: 75, color: "#7952B3" },
      { name: "JavaScript", icon: <FaJs />, level: 88, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, level: 75, color: "#3178C6" },
      { name: "React", icon: <FaReact />, level: 70, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90, color: "#06B6D4" },
    ],
    Design: [
      { name: "Figma", icon: <FaFigma />, level: 85, color: "#F24E1E" },
      { name: "InVision", icon: <SiInvision />, level: 70, color: "#FF3366" },
      { name: "WordPress", icon: <SiWordpress />, level: 75, color: "#21759B" },
      { name: "Canva", icon: <SiCanva />, level: 95, color: "#00C4CC" },
    ],
    Tools: [
      { name: "Git", icon: <FaGitAlt />, level: 90, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, level: 90, color: "#181717" },
      { name: "DaVinci Resolve", icon: <FaVideo />, level: 65, color: "#FF6B6B" },
    ],
  };

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  // Reset animation when tab changes
  useEffect(() => {
    setAnimated(false);
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <div className="skills-container-wrapper">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="skills-title">
            My <span className="highlight">Skills</span>
          </h2>
          <p className="skills-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          className="skills-tabs"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              className={`tab-btn ${activeTab === category ? "active" : ""}`}
              onClick={() => setActiveTab(category)}
            >
              <span className="tab-text">{category}</span>
              <span className="tab-count">
                {skillCategories[category].length}
              </span>
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {skillCategories[activeTab].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                variants={cardVariants}
              >
                <div className="skill-card-inner">
                  <div className="skill-header">
                    <div
                      className="skill-icon"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <div className="skill-level-badge">
                      {animated ? `${skill.level}%` : "0%"}
                    </div>
                  </div>

                  <h4 className="skill-name">{skill.name}</h4>

                  <div className="progress-container">
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={{
                          width: animated ? `${skill.level}%` : 0,
                        }}
                        transition={{
                          duration: 1.2,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                        style={{
                          background: `linear-gradient(135deg, ${skill.color}dd, ${skill.color})`,
                        }}
                      >
                        <div className="progress-glow"></div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="skill-footer">
                    <span className="proficiency-label">
                      {skill.level >= 90
                        ? "Expert"
                        : skill.level >= 75
                        ? "Advanced"
                        : skill.level >= 60
                        ? "Intermediate"
                        : "Beginner"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;