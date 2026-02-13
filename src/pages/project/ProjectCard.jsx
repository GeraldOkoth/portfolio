import React, { useState } from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { timeAgo } from "./timeAgo";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project }) => {
  const [showFullDate, setShowFullDate] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const createdAt = new Date(project.createdAt || new Date());
  const updatedAt = new Date(project.updatedAt || new Date());

  const formatDate = (date) =>
    showFullDate
      ? date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : timeAgo(date);

  return (
    <>
      <div className="project-card">
        <div className="project-thumbnail">
          <img 
            src={project.image || "https://via.placeholder.com/400x250"} 
            alt={project.title}
          />
          <div className="thumbnail-overlay"></div>
        </div>

        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>

          <p className="project-description">
            {project.description.length > 100
              ? `${project.description.slice(0, 100)}...`
              : project.description}
            <button
              className="view-more-arrow"
              onClick={() => setIsModalOpen(true)}
              aria-label="View more details"
            >
              <FaArrowRight />
            </button>
          </p>

          <div className="project-tech">
            {project.technologies && project.technologies.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>

          <div className="project-dates">
            <div className="dates-info">
              <p>
                <strong>Created:</strong> {formatDate(createdAt)}
              </p>
              <p>
                <strong>Updated:</strong> {formatDate(updatedAt)}
              </p>
            </div>
            <button
              className="toggle-date-btn"
              onClick={() => setShowFullDate((prev) => !prev)}
            >
              {showFullDate ? "Relative" : "Full Date"}
            </button>
          </div>

          <div className="project-links">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn demo"
              >
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn github"
              >
                <FaGithub /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ProjectModal 
          project={project} 
          onClose={() => setIsModalOpen(false)}
          formatDate={formatDate}
        />
      )}
    </>
  );
};

export default ProjectCard;