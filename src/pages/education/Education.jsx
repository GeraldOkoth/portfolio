import React from "react";
import "./Education.css"; // Import the CSS for styling

// EducationCard Component
const EducationCard = ({level, institution, certificate, years }) => {
  return (
    <div className="education-card">
      <h4>{level}</h4>
      <p>
        <strong>Institution:</strong> {institution}
      </p>
      {certificate && (
        <p>
          <strong>Certificate:</strong> {certificate}
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
      institution: "ALX Africa",
      certificate: "Front-End Web Development",
      years: "2025 Jan - present",
    },
    {
      level: "University",
      institution: "Machakos University",
      certificate: "Bachelor of Science in Mathematics and Computer Science",
      years: "2020 - present",
    },
    {
      level: "Secondary School",
      institution: "St. Anthony Dago Kokore Sec. School",
      certificate: "Kenya Certificate of Secondary Education (KCSE)",
      years: "2016 - 2019",
    },
    {
      level: "Primary School",
      institution: "St. Paul's Primary School",
      certificate: "Kenya Certificate of Primary Education (KCPE)",
      years: "2005 - 2015",
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
