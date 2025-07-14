import React, { useState } from "react";
// import { FaEye, FaThumbsUp, FaGithub, FaRegBookmark } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { timeAgo } from "./timeAgo";

const ProjectCard = ({ project }) => {
  // const [likes, setLikes] = useState(project.likes || 0);
  // const [views, setViews] = useState(project.views || 0);
  // const [bookmarks, setBookmarks] = useState(project.bookmarks || 0);
  const [showFull, setShowFull] = useState(false);
  const [showFullDate, setShowFullDate] = useState(false);

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

  // const handleView = () => setViews((prev) => prev + 1);
  // const handleLike = () => setLikes((prev) => prev + 1);
  // const handleBookmark = () => setBookmarks((prev) => prev + 1);

  return (
    <div className="project-card">
      <h3>{project.title}</h3>

      <p className="project-description">
        {showFull || project.description.length <= 80
          ? project.description
          : `${project.description.slice(0, 80)}...`}
        {project.description.length > 80 && (
          <button
            className="view-more-btn"
            onClick={() => setShowFull(!showFull)}
          >
            {showFull ? "View Less" : "View More"}
          </button>
        )}
      </p>

      {/* <div className="project-meta">
        <span onClick={handleView} title="Views">
          <FaEye /> {views}
        </span>
        <span onClick={handleLike} title="Likes">
          <FaThumbsUp /> {likes}
        </span>
        <span onClick={handleBookmark} title="Bookmarks">
          <FaRegBookmark /> {bookmarks}
        </span>
      </div> */}

      <div className="project-dates">
        <p>
          <strong>Created:</strong> {formatDate(createdAt)}
        </p>
        <p>
          <strong>Last Modified:</strong> {formatDate(updatedAt)}
        </p>
        <button
          className="toggle-date-btn"
          onClick={() => setShowFullDate((prev) => !prev)}
        >
          {showFullDate ? "Show Relative" : "Show Full Date"}
        </button>
      </div>

      <div className="project-links">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn github"
            // onClick={handleView}
          >
            <FaGithub /> GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn demo"
            // onClick={handleView}
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
