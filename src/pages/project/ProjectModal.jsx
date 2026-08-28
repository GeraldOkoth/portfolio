import React, { useEffect } from "react";
import {
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaCode,
  FaLightbulb,
  FaExclamationTriangle,
} from "react-icons/fa";
import { timeAgo } from "./timeAgo";

const ProjectModal = ({ project, onClose, formatDate }) => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!project) return null;

  const createdAt = new Date(project.createdAt || Date.now());
  const updatedAt = new Date(project.updatedAt || Date.now());

  const getRelativeTime = (date) =>
    Number.isNaN(date.getTime()) ? "Unknown" : timeAgo(date);
  const getFullDate = (date) =>
    Number.isNaN(date.getTime())
      ? "Unknown"
      : typeof formatDate === "function"
        ? formatDate(date)
        : date.toLocaleDateString();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        {/* Modal Body - Side by Side Layout */}
        <div className="modal-body-wrapper">
          {/* Left Side - Image */}
          <div className="modal-left">
            <div className="modal-image-container">
              <img
                src={project.image || "https://via.placeholder.com/500x400"}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="modal-image"
              />
            </div>

            {/* Action Buttons */}
            <div className="modal-actions">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn demo-btn"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn github-btn"
                >
                  <FaGithub /> View Code
                </a>
              )}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="modal-right">
            {/* Title */}
            <h2 className="modal-title">{project.title}</h2>

            {/* Technologies */}
            <div className="modal-section">
              <h4 className="section-title">Technologies</h4>
              <div className="tech-badges">
                {Array.isArray(project.technologies) &&
                  project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
              </div>
            </div>

            {/* Description */}
            <div className="modal-section">
              <h4 className="section-title">
                <FaCode className="section-icon" /> About
              </h4>
              <p className="section-text">{project.description}</p>
            </div>

            {/* Reason for Building */}
            {project.reasonForBuilding && (
              <div className="modal-section">
                <h4 className="section-title">
                  <FaLightbulb className="section-icon" /> Why I Built This
                </h4>
                <p className="section-text">{project.reasonForBuilding}</p>
              </div>
            )}

            {/* Challenges */}
            {project.challengesFaced && (
              <div className="modal-section">
                <h4 className="section-title">
                  <FaExclamationTriangle className="section-icon" /> Challenges
                </h4>
                <p className="section-text">{project.challengesFaced}</p>
              </div>
            )}

            {/* Problem Solved */}
            {project.problemSolves && (
              <div className="modal-section">
                <h4 className="section-title">
                  <FaLightbulb className="section-icon" /> Problem Solved
                </h4>
                <p className="section-text">{project.problemSolves}</p>
              </div>
            )}

            {/* Key Features */}
            {project.features && (
              <div className="modal-section">
                <h4 className="section-title">Key Features</h4>
                <ul className="features-list">
                  {Array.isArray(project.features) &&
                    project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                </ul>
              </div>
            )}

            {/* Dates */}
            <div className="modal-section dates-section">
              <div className="date-item">
                <FaCalendarAlt className="date-icon" />
                <div>
                  <p className="date-label">Created</p>
                  <p className="date-value">{getRelativeTime(createdAt)}</p>
                  <p className="date-full">{getFullDate(createdAt)}</p>
                </div>
              </div>
              <div className="date-item">
                <FaCalendarAlt className="date-icon" />
                <div>
                  <p className="date-label">Last Updated</p>
                  <p className="date-value">{getRelativeTime(updatedAt)}</p>
                  <p className="date-full">{getFullDate(updatedAt)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
