import React from "react";
import "./skillsEd.css"; 

const skillsData = [
  {
    category: "Front-End Technologies",
    skills: ["HTML", "CSS", "SASS", "Bootstrap", "JavaScript", "React.js"]
  },
  {
    category: "Design Tools",
    skills: ["Figma", "Miro", "Canva"]
  },
  {
    category: "Low-code no-code Tools",
    skills: ["Wordpress", "Webflow",]
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
  }
];

function SkillsEd() {
  return (
    <section className="skills" id="skills">
      <h1 className="heading">Skills</h1>
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

export default SkillsEd;
