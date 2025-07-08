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
} from "react-icons/fa";
import {
  SiTypescript,
  SiWordpress,
  SiAdobepremierepro,
  SiInvision,
} from "react-icons/si";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [animated, setAnimated] = useState(false);
  const skillsRef = useRef(null);

  const skillCategories = {
    Frontend: [
      { name: "HTML5", icon: <FaHtml5 />, level: 100 },
      { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
      { name: "Sass", icon: <FaSass />, level: 80 },
      { name: "Bootstrap", icon: <FaBootstrap />, level: 75 },
      { name: "JavaScript", icon: <FaJs />, level: 88 },
      { name: "TypeScript", icon: <SiTypescript />, level: 75 },
      { name: "React", icon: <FaReact />, level: 70 },
    ],
    Design: [
      { name: "Figma", icon: <FaFigma />, level: 85 },
      { name: "InVision", icon: <SiInvision />, level: 70 },
      { name: "WordPress", icon: <SiWordpress />, level: 75 },
    ],
    Tools: [
      { name: "Git", icon: <FaGitAlt />, level: 80 },
      { name: "GitHub", icon: <FaGithub />, level: 85 },
      { name: "DaVinci Resolve", icon: <FaVideo />, level: 65 },
      { name: "Adobe Premiere", icon: <SiAdobepremierepro />, level: 70 },
    ]
  };

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <h2>My Skills</h2>

      <div className="skills-tabs">
        {Object.keys(skillCategories).map((category) => (
          <button
            key={category}
            className={`tab-btn ${activeTab === category ? "active" : ""}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skills-container">
        {skillCategories[activeTab].map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h4>{skill.name}</h4>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: animated ? `${skill.level}%` : "0%",
                  transition: `width 1.5s ease ${index * 0.1}s`,
                }}
              ></div>
            </div>
            <span className="skill-level">
              {animated ? `${skill.level}%` : "0%"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
