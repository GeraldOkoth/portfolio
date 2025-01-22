import React from "react";
import "./Skills.css"; // Import the CSS for styling

// SkillBar Component
const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="skill-bar">
      <div className="skill-name">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

// Skills Component
const Skills = () => {
  const skills = [
    { skill: "HTML", percentage: 90 },
    { skill: "CSS", percentage: 70 },
    { skill: "JavaScript", percentage: 50 },
    { skill: "React", percentage: 30 },
    { skill: "TypeScript", percentage: 30 },
  ];

  return (
    <div className="skills-container" id="skills">
      <h3>Technical Skills</h3>
      {skills.map((skill, index) => (
        <SkillBar key={index} {...skill} />
      ))}
    </div>
  );
};

export default Skills;
