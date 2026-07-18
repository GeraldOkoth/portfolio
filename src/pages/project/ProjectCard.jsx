import React, { useState } from "react";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { timeAgo } from "./timeAgo";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const createdAt = new Date(project.createdAt || new Date());
  const updatedAt = new Date(project.updatedAt || new Date());

  const formatDate = (date) =>
    date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const handleImageClick = (e) => {
    e.stopPropagation();
    if (project.demo) {
      window.open(project.demo, "_blank", "noopener,noreferrer");
    }
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div 
        className="project-card"
        onClick={handleCardClick}
      >
        {/* Thumbnail Container */}
        <div className="project-thumbnail-wrapper">
          <img 
            src={project.image || "https://via.placeholder.com/400x300"} 
            alt={project.title}
            className="project-thumbnail-image"
            onClick={handleImageClick}
          />
          
          {/* Hover Overlay */}
          <div className="thumbnail-hover-overlay">
            <div className="overlay-content">
              <FaExternalLinkAlt className="overlay-icon" />
              <p className="overlay-text">Click to view live demo</p>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="project-card-content">
          <h3 className="project-title">{project.title}</h3>
          
          <p className="project-description">
            {project.description.length > 80
              ? `${project.description.slice(0, 80)}...`
              : project.description}
          </p>

          <div className="project-meta">
            <p className="project-date">
              Updated: {timeAgo(updatedAt)}
            </p>
          </div>

          <button className="view-details-btn">
            View Details <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Modal */}
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