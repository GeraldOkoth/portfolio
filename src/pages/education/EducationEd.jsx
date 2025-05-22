import React from "react";
import "./EducationEd.css"; 

const educationData = [
  {
    date: "2025",
    title: "Africa Leadership Experience",
    description:
      "Currently enrolled in the Africa Leadership Experience program, a transformative initiative designed to cultivate professional and technical skills and foster a deep understanding of Africa's socio-economic and digital landscape. This program emphasizes experiential learning, equipping participants with the skills to drive positive change in their communities and beyond.",
  },
  {
    date: "2020 - 2025",
    title: "Machakos University",
    description:
      "Pursued a Bachelor's degree in Mathematics and Computer Science. Acquired professional employer-sought skills such as leadership among others. Gained technical expertise for several programming languages including: C, C++, Java, Html, Css, Javascript among others. Collaborated in developing software projects, including a ride-hailing app for the final year.",
  },
  {
    date: "2015 - 2019",
    title: "St. Anthony Dago Kokore Sec. School",
    description:
      "Excelled in sciences and computer studies. Participated in school debates and developed courage, confidence, communication, and teamwork skills. Engaged in extracurricular activities, including sports and community service. Represented the school in mathematics and business contests",
  },
  {
    date: "2005 - 2015",
    title: "St. Paul's Kanyakwar Pri. School",
    description:
      "Built a strong academic foundation with a passion zeal for learning. Represented the school in math contests and co-curricular activities. Developed a love for technology and problem-solving.",
  },
];

function EducationEd() {
  return (
    <section className="education" id="education">
      <h2 className="heading">Education</h2>
      <div className="timeline-items">
        {educationData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationEd;
