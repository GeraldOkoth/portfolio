import React from "react";
import { easeInOut, motion } from "framer-motion";

const skillsData = [
  {
    category: "Front-End Technologies",
    skills: ["HTML", "CSS", "SASS", "Bootstrap", "JavaScript", "React.js"]
  },
  {
    category: "Design Tools",
    skills: ["Figma", "inVision", "Canva"]
  },
  {
    category: "Low code no code Tools",
    skills: ["Wordpress", "Google sites",]
  },
  {
    category: "Other Technologies",
    skills: ["C", "C++", "Java", "PHP"]
  },
  {
    category: "Database Technologies",
    skills: ["MS Access", "SQL"]
  },
  {
    category: "Version Control System",
    skills: ["Git", "GitHub"]
  },
  {
    category: "Video Editing",
    skills: ["Adobe Premiere Pro", "Davinci Resolve"]
  }
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ transitionTimingFunction: easeInOut, delay: .6 }}
        className="heading"
      >
        Skills
      </motion.h2>
      <div className="skills-container">
        {skillsData.map((skillCategory, index) => (
          <div className="skills-box" key={index}>
            <div className="skill-info">
              <h4 className="heading">{skillCategory.category}</h4>
              <ul>
                {skillCategory.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;