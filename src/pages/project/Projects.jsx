import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const allProjects = [
  {
    id: "p1",
    type: "frontend",
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built with React and Sass. This portfolio showcases my frontend and ui/ux skills, projects and services.",
    likes: 0,
    views: 0,
    createdAt: "2024-10-22T10:00:00Z",
    updatedAt: "2025-07-06T15:30:00Z",
    demo: "https://geraldokoth.vercel.app",
    github: "https://github.com/GeraldOkoth/portfolio",
  },
  // {
  //   id: "p2",
  //   type: "uiux",
  //   title: "Figma Webpage Design",
  //   description: "UI/UX design to simulate a Figma Webpage Design.",
  //   likes: 0,
  //   views: 0,
  //   date: "2025-06-15",
  //   github:
  //     "https://github.com/GeraldOkoth/alx_html_css/tree/main/css_advanced",
  // },
  {
    id: "p3",
    type: "frontend",
    title: "To Do List App",
    description:
      "A simple to-do list application to implement local storage functionality - persists tasks even after page reload.",
    likes: 0,
    views: 0,
    createdAt: "2025-06-22T10:00:00Z",
    updatedAt: "2025-06-26T15:30:00Z",
    github: "https://github.com/GeraldOkoth/dynamic-to-do-list-js",
  },
];

const categoryTabs = ["frontend", "uiux", "graphic"];
const sortTabs = ["latest", "oldest", "popular"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [sortType, setSortType] = useState("latest");

  const filtered = allProjects
    .filter((p) => p.type === activeCategory)
    .sort((a, b) => {
      if (sortType === "latest") return new Date(b.date) - new Date(a.date);
      if (sortType === "oldest") return new Date(a.date) - new Date(b.date);
      if (sortType === "popular") return b.likes - a.likes;
      return 0;
    });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  return (
    <section className="project-section" id="projects">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="tabs"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="category-tabs">
          {categoryTabs.map((tab) => (
            <button
              key={tab}
              className={tab === activeCategory ? "active" : ""}
              onClick={() => setActiveCategory(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="sort-tabs">
          {sortTabs.map((sort) => (
            <button
              key={sort}
              className={sort === sortType ? "active" : ""}
              onClick={() => setSortType(sort)}
            >
              {sort.charAt(0).toUpperCase() + sort.slice(1)}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="carousel-wrapper"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {filtered.length === 0 ? (
          <div className="no-project-message">
            <p>No project available in this category.</p>
          </div>
        ) : (
          <Slider {...sliderSettings}>
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Slider>
        )}
      </motion.div>
    </section>
  );
}

export default Projects;
