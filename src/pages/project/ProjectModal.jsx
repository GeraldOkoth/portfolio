import React, { useEffect } from "react";
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectModal = ({ project, onClose, formatDate }) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const createdAt = new Date(project.createdAt || new Date());
  const updatedAt = new Date(project.updatedAt || new Date());

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </button>

        <div className="modal-header">
          <img 
            src={project.image || "https://via.placeholder.com/800x400"} 
            alt={project.title}
            className="modal-image"
          />
        </div>

        <div className="modal-body">
          <h2 className="modal-title">{project.title}</h2>

          <div className="modal-tech">
            {project.technologies && project.technologies.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>

          <div className="modal-description">
            <h3>About This Project</h3>
            <p>{project.description}</p>
          </div>

          {project.features && (
            <div className="modal-features">
              <h3>Key Features</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-dates">
            <div className="date-item">
              <strong>Created:</strong>
              <span>{formatDate(createdAt)}</span>
            </div>
            <div className="date-item">
              <strong>Last Updated:</strong>
              <span>{formatDate(updatedAt)}</span>
            </div>
          </div>

          <div className="modal-actions">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-btn demo"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-btn github"
              >
                <FaGithub /> View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;