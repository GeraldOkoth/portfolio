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
  {
    id: "p2",
    type: "frontend",
    title: "Simple To Do List App",
    description:
      "A simple to-do list application that allows users to add, display, and remove tasks. This project focuses on utilizing advanced DOM manipulation techniques to interact dynamically with the webpage, persist data using localStorage, ensuring that tasks are saved even after the browser is closed. The aim of building this project is to enhance my understanding of JavaScript, DOM manipulation, and localStorage.",
    likes: 0,
    views: 0,
    createdAt: "2025-06-22T10:00:00Z",
    updatedAt: "2025-06-26T15:30:00Z",
    github: "https://github.com/GeraldOkoth/dynamic-to-do-list-js",
    demo: "https://dynamic-to-do-list-js-peach.vercel.app/",
  },
  {
    id: "p3",
    type: "frontend",
    title: "Dynamic Web Application with DOM Manipulation & JSON Data",
    description:
      "Developed an interactive web application focused on dynamic content generation, data persistence, and JSON handling. The project highlights advanced DOM manipulation, browser storage (localStorage & sessionStorage), and efficient JSON data management.",
    likes: 0,
    views: 0,
    createdAt: "2025-07-21T11:20:00Z",
    updatedAt: "2025-07-21T11:20:00Z",
    github:
      "https://github.com/GeraldOkoth/alx_fe_javascript/tree/main/dom-manipulation",
    demo: "https://advanced-to-do-list-nu.vercel.app/",
  },
  {
    id: "p4",
    type: "uiux",
    title: "Portfolio Website UI Design",
    description:
      "This is a UI design for an interactive portfolio website created using Figma. The design showcases a modern and responsive layout, focusing on user experience and visual appeal. The aim of building this project is to enhance my UI/UX design skills and to create a visually appealing and user-friendly portfolio interface.",
    likes: 0,
    views: 0,
    date: "2025-06-15",
    demo: "https://www.figma.com/design/pwN8fphIevGOHwwL2QdXPD/High-FI-portfolio-website?node-id=0-1&t=5qKjgAuy7BVHE950-1",
  },
  {
    id: "p5",
    type: "uiux",
    title: "ALX ehub login page clone",
    description:
      "This is a UI figma file designed to replicate ALX ehub login page. The aim of building this project is to enhance my UI/UX design skills and to create a visually appealing and user-friendly login interface. See the original login page at https://ehub.alxafrica.com/login",
    likes: 0,
    views: 0,
    date: "2025-06-15",
    demo: "https://www.figma.com/proto/42jg1O8qpxNUVZ5DqrCJfo/alx_ehub_login_prototype?node-id=2-2&p=f&t=CVYcshduHnTXPh24-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
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
