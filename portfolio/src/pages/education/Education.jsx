import React from "react";
import "./Education.css"; // Import the CSS for styling

// EducationCard Component
const EducationCard = ({ level, school, degree, years }) => {
  return (
    <div className="education-card">
      <h4>{level}</h4>
      <p>
        <strong>School:</strong> {school}
      </p>
      {degree && (
        <p>
          <strong>Degree:</strong> {degree}
        </p>
      )}
      <p>
        <strong>Years:</strong> {years}
      </p>
    </div>
  );
};

const Education = () => {
  const educationLevels = [
    {
      level: "Primary School",
      school: "St. Paul's Primary School",
      years: "2005 - 2015",
    },
    {
      level: "Secondary School",
      school: "St. Anthony Dago Kokore Sec. School",
      years: "2016 - 2019",
    },
    {
      level: "University",
      school: "Machakos University",
      degree: "Bachelor of Science in Computer Science",
      years: "2020 - present",
    },
  ];

  return (
    <div className="education-container">
      <h3>Education</h3>
      {educationLevels.map((edu, index) => (
        <EducationCard key={index} {...edu} />
      ))}
    </div>
  );
};

export default Education;
