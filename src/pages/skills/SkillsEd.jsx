import React from "react";
import "./SkillsEd.css"; // Import the CSS for styling

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
const SkillsEd = () => {
  const skills = [
    { skill: "HTML", percentage: 100 },
    { skill: "CSS", percentage: 100 },
    { skill: "SASS", percentage: 95 },
    { skill: "Bootstrap", percentage: 70 },
    { skill: "JavaScript", percentage: 70 },
    { skill: "React", percentage: 50 },
    { skill: "TypeScript", percentage: 40 },
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

export default SkillsEd;

