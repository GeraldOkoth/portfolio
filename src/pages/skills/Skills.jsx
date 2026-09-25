import React, { useState, useEffect, useRef } from "react";
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
  FaInvision,
  FaChevronDown,
  FaFilter,
} from "react-icons/fa";
import {
  SiTypescript,
  SiWordpress,
  SiTailwindcss,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import { TbBrandAdobePremiere } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [animated, setAnimated] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const skillsRef = useRef(null);

  const skillCategories = {
    Frontend: [
      {
        id: "html5",
        name: "HTML5",
        icon: <FaHtml5 />,
        level: 100,
        color: "#E34F26",
      },
      {
        id: "css3",
        name: "CSS3",
        icon: <FaCss3Alt />,
        level: 90,
        color: "#1572B6",
      },
      {
        id: "sass",
        name: "Sass",
        icon: <FaSass />,
        level: 80,
        color: "#CC6699",
      },
      {
        id: "bootstrap",
        name: "Bootstrap",
        icon: <FaBootstrap />,
        level: 75,
        color: "#7952B3",
      },
      {
        id: "javascript",
        name: "JavaScript",
        icon: <FaJs />,
        level: 88,
        color: "#F7DF1E",
      },
      {
        id: "typescript",
        name: "TypeScript",
        icon: <SiTypescript />,
        level: 75,
        color: "#3178C6",
      },
      {
        id: "react",
        name: "React",
        icon: <FaReact />,
        level: 70,
        color: "#61DAFB",
      },
      {
        id: "tailwindcss",
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        level: 90,
        color: "#06B6D4",
      },
    ],
    Design: [
      {
        id: "figma",
        name: "Figma",
        icon: <FaFigma />,
        level: 85,
        color: "#F24E1E",
      },
      {
        id: "invision",
        name: "InVision",
        icon: <FaInvision />,
        level: 70,
        color: "#FF3366",
      },
      {
        id: "wordpress",
        name: "WordPress",
        icon: <SiWordpress />,
        level: 75,
        color: "#21759B",
      },
      {
        id: "canva",
        name: "Canva",
        icon: <FaFigma />,
        level: 95,
        color: "#00C4CC",
      },
    ],
    Tools: [
      {
        id: "git",
        name: "Git",
        icon: <FaGitAlt />,
        level: 90,
        color: "#F05032",
      },
      {
        id: "github",
        name: "GitHub",
        icon: <FaGithub />,
        level: 90,
        color: "#24292E",
      },
      {
        id: "davinci",
        name: "DaVinci Resolve",
        icon: <FaVideo />,
        level: 65,
        color: "#FF6B6B",
      },
      {
        id: "adobepremierepro",
        name: "Adobe Premiere Pro",
        icon: <TbBrandAdobePremiere />,
        level: 50,
        color: "#31A8FF",
      },
      {
        id: "adobephotoshop",
        name: "Adobe Photoshop",
        icon: <DiPhotoshop />,
        level: 50,
        color: "#31A8FF",
      },
      {
        id: "vercel",
        name: "Vercel",
        icon: <SiVercel />,
        level: 80,
        color: "#24292E",
      },
      {
        id: "netlify",
        name: "Netlify",
        icon: <SiNetlify />,
        level: 60,
        color: "#014847",
      },
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
      { threshold: 0.2 },
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

  const categories = [
    {
      id: "Frontend",
      label: "Frontend",
      count: skillCategories.Frontend.length,
    },
    { id: "Design", label: "Design", count: skillCategories.Design.length },
    { id: "Tools", label: "Tools", count: skillCategories.Tools.length },
  ];

  const getFilteredSkills = () => {
    return skillCategories[activeTab] || [];
  };

  const filteredSkills = getFilteredSkills();
  const selectedCategory = categories.find((cat) => cat.id === activeTab);

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
    setIsDropdownOpen(false);
  };

  const handleCategorySelect = (categoryId) => {
    setActiveTab(categoryId);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest(".skills-filter-container")) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <section className="skills-section" id="skills" ref={skillsRef}>
      <div className="skills-container-wrapper">
        {/* Header */}
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

        <div className="skills-filter-container">
          <motion.button
            className="skills-filter-btn"
            onClick={handleFilterToggle}
            aria-label="Toggle filter menu"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <FaFilter />
          </motion.button>

          {isFilterOpen && (
            <motion.div
              className="skills-category-btn-wrapper"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <button
                className="skills-category-btn"
                onClick={toggleDropdown}
                aria-label="Select skill category"
                aria-expanded={isDropdownOpen}
              >
                <span className="category-text">Select Category</span>
                <FaChevronDown
                  className={`chevron-icon ${isDropdownOpen ? "rotated" : ""}`}
                />
              </button>

              {isDropdownOpen && (
                <motion.div
                  className="skills-dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleOutsideClick}
                >
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`dropdown-option ${
                        activeTab === category.id ? "active" : ""
                      }`}
                      onClick={() => handleCategorySelect(category.id)}
                    >
                      <span className="option-label">{category.label}</span>
                      <span className="option-count">{category.count}</span>
                      {activeTab === category.id && (
                        <span className="checkmark">✓</span>
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
        {/* Display Selected Category with Count Badge */}
        {activeTab && (
          <motion.div
            className="selected-category-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <span className="badge-label">{selectedCategory?.label}</span>
            <span className="badge-count">{selectedCategory?.count}</span>
          </motion.div>
        )}

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            className="skills-grid"
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                variants={cardVariants}
              >
                <div className="skill-card-inner">
                  {/* Skill Header */}
                  <div className="skill-header">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <div className="skill-level-badge">
                      {animated ? `${skill.level}%` : "0%"}
                    </div>
                  </div>

                  {/* Skill Name */}
                  <h4 className="skill-name">{skill.name}</h4>
                  {/* Progress Bar */}
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
