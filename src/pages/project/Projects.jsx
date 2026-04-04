import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const allProjects = [
  {
    id: "p1",
    type: "frontend",
    scale: "mini",
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built with React and Sass. This portfolio showcases my frontend and ui/ux skills, projects and services.",
    technologies: ["React", "Sass", "Framer Motion", "JavaScript"],
    image: "/images/portfolio.png",
    features: [
      "Responsive design for all devices",
      "Smooth animations and transitions",
      "Project showcase with filtering",
      "Contact form integration",
    ],
    likes: 0,
    views: 0,
    createdAt: "2024-10-22T10:00:00Z",
    updatedAt: "2026-04-04T21:11:10Z",
    demo: "https://geraldokoth.vercel.app",
    github: "https://github.com/GeraldOkoth/portfolio",
  },
  {
    id: "p2",
    type: "frontend",
    scale: "mini",
    title: "Weather Dashboard",
    description:
      "A weather dashboard application that displays current weather information and forecasts for various locations. Built with React, Tailwind CSS and integrated with a weather API.",
    technologies: ["React", "JavaScript", "REST API", "Tailwind CSS"],
    image: "/images/weather-dashboard.png",
    features: [
      "Real-time weather data fetching",
      "Search functionality for different locations",
      "5-day weather forecast display",
      "Responsive design with Tailwind CSS",
    ],
    likes: 0,
    views: 0,
    createdAt: "2025-06-22T10:00:00Z",
    updatedAt: "2026-02-13T15:30:00Z",
    github: "https://github.com/GeraldOkoth/weather-dashboard",
    demo: "https://weather-dashboard-ke.vercel.app/dashboard",
  },
  {
    id: "p3",
    type: "frontend",
    scale: "mini",
    title: "HTML & CSS Landing Page",
    description:
      "A responsive landing page built with HTML and CSS. This project demonstrates modern web design principles, including semantic HTML, CSS Grid and Flexbox layouts, and responsive design techniques.",
    technologies: ["HTML", "CSS", "Responsive Design"],
    image: "/images/html-css-landing-page.png",
    features: [
      "Semantic HTML structure",
      "Modern CSS techniques (Grid, Flexbox)",
      "Responsive design for mobile and desktop",
      "Clean and minimalist design",
    ],
    likes: 0,
    views: 0,
    createdAt: "2025-06-22T10:00:00Z",
    updatedAt: "2026-02-13T15:30:00Z",
    github: "https://github.com/GeraldOkoth/alx_html_css",
    demo: "https://alx-html-css-psi.vercel.app/",
  },
  {
    id: "p4",
    type: "frontend",
    scale: "mini",
    title: "Simple To Do List App",
    description:
      "A simple to-do list application that allows users to add, display, and remove tasks. This project focuses on utilizing advanced DOM manipulation techniques to interact dynamically with the webpage, persist data using localStorage, ensuring that tasks are saved even after the browser is closed.",
    technologies: ["JavaScript", "HTML", "CSS", "LocalStorage"],
    image: "/images/simple-to-do.png",
    features: [
      "Add, edit, and delete tasks",
      "Persistent storage using localStorage",
      "Filter tasks by status",
      "Responsive design",
    ],
    likes: 0,
    views: 0,
    createdAt: "2025-06-22T10:00:00Z",
    updatedAt: "2025-06-26T15:30:00Z",
    github: "https://github.com/GeraldOkoth/dynamic-to-do-list-js",
    demo: "https://dynamic-to-do-list-js-peach.vercel.app/",
  },
  {
    id: "p5",
    type: "frontend",
    scale: "mini",
    title: "Advanced To do List App",
    description:
      "Developed an interactive web application focused on dynamic content generation, data persistence, and JSON handling. The project highlights advanced DOM manipulation, browser storage (localStorage & sessionStorage), and efficient JSON data management.",
    technologies: ["JavaScript", "JSON", "SessionStorage", "DOM API"],
    image: "/images/advanced-to-do.png",
    features: [
      "Dynamic content generation",
      "JSON data handling",
      "Browser storage implementation",
      "Advanced DOM manipulation",
    ],
    likes: 0,
    views: 0,
    createdAt: "2025-07-21T11:20:00Z",
    updatedAt: "2025-07-21T11:20:00Z",
    github:
      "https://github.com/GeraldOkoth/alx_fe_javascript/tree/main/dom-manipulation",
    demo: "https://advanced-to-do-list-nu.vercel.app/",
  },
  {
    id: "p6",
    type: "frontend",
    scale: "mini",
    title: "GitHub User Profile Search",
    description:
      "A GitHub User Profile Search Application developed using React and Tailwindcss. This application enables users to search for GitHub profiles and view detailed information including repositories, followers, and activity.",
    technologies: ["React", "Tailwind CSS", "GitHub API", "REST API"],
    image: "/images/github-user-search.png",
    features: [
      "Real-time GitHub profile search",
      "Repository listing and filtering",
      "User statistics display",
      "Responsive design with Tailwind",
    ],
    likes: 0,
    views: 0,
    createdAt: "2025-08-20T10:08:21Z",
    updatedAt: "2025-08-22T15:02:37Z",
    demo: "https://github-userprofile-search.vercel.app/",
    github:
      "https://github.com/GeraldOkoth/alx-fe-reactjs/tree/main/github-user-search",
  },
  {
    id: "p7",
    type: "uiux",
    scale: "mini",
    title: "Portfolio Website Replica UI Design",
    description:
      "This is a UI design for a portfolio website replica created using Figma to replicate a pixel perfect design. The design showcases a modern web layout user experience and visual appeal.",
    technologies: ["Figma", "UI Design", "UX Design", "Prototyping"],
    image: "/images/popular-tutorials.png",
    features: [
      "Modern and clean interface",
      "Responsive layout design",
      "Interactive prototypes",
      "User-centered design approach",
    ],
    likes: 0,
    views: 0,
    createdAt: "2025-06-15T10:00:00Z",
    updatedAt: "2025-06-15T10:00:00Z",
    demo: "https://www.figma.com/proto/yfdgqxEwlKfLn0VniPR1Bw/Homepage--Copy-?node-id=3558-0&p=f&t=qxPSwRJODEMjHunt-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: "p8",
    type: "uiux",
    scale: "mini",
    title: "ALX ehub Login Page Clone",
    description:
      "This is a UI figma file designed to replicate ALX ehub login page. The aim of building this project is to enhance my UI/UX design skills and to create a visually appealing and user-friendly login interface.",
    technologies: ["Figma", "UI Design", "Prototyping"],
    image: "/images/alx-ehub-login.png",
    features: [
      "Pixel-perfect design replication",
      "Interactive login flow",
      "Responsive design",
      "Modern UI elements",
    ],
    likes: 0,
    views: 0,
    createdAt: "2025-06-15T10:00:00Z",
    updatedAt: "2025-06-15T10:00:00Z",
    demo: "https://www.figma.com/proto/42jg1O8qpxNUVZ5DqrCJfo/alx_ehub_login_prototype?node-id=2-2&p=f&t=CVYcshduHnTXPh24-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: "p9",
    type: "uiux",
    scale: "mini",
    title: "Portfolio Website replica UI Design",
    description:
      "This is a UI design for a portfolio website replica created using Figma. The design showcases a modern and responsive layout, focusing on user experience and visual appeal.",
    technologies: ["Figma", "UI Design", "UX Design", "Prototyping"],
    image: "/images/alx-ui-ux-design.png",
    features: [
      "Modern and clean interface",
      "Responsive layout design",
      "Interactive prototypes",
      "User-centered design approach",
    ],
    likes: 0,
    views: 0,
    createdAt: "2025-06-15T10:00:00Z",
    updatedAt: "2026-02-13T10:00:00Z",
    demo: "https://www.figma.com/proto/9XnDkxThivZIAQu7ODeNLu/headphones--Copy-?node-id=0-2&p=f&t=joEfmfZWZj1SVAYl-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: "p10",
    type: "uiux",
    scale: "mini",
    title: "Weather Dashboard UI Design",
    description:
      "This is a UI design for a weather dashboard created using Figma. The design showcases a modern and responsive layout, focusing on user experience and visual appeal.",
    technologies: ["Figma", "UI Design", "UX Design", "Prototyping"],
    image: "/images/weather-dashboard.png",
    features: [
      "Modern and clean interface",
      "Responsive layout design",
      "Interactive prototypes",
      "User-centered design approach",
    ],
    likes: 0,
    views: 0,
    createdAt: "2025-06-15T10:00:00Z",
    updatedAt: "2025-09-15T10:00:00Z",
    demo: "https://www.figma.com/design/9oydJHmDDljDJ6yKl7MxnZ/Untitled?node-id=0-1&t=VeOt0lvOxIxB5FZk-1",
  },
  {
    id: "p11",
    type: "graphic",
    scale: "mini",
    title: "Recollection Poster",
    description:
      "A visually striking poster design created using Canva. This project demonstrates effective use of typography, composition, and color harmony to create an engaging and memorable visual experience.",
    technologies: ["canva", "Graphic Design", "Poster Design"],
    image: "/images/recollection.png",
    features: [
      "Visually striking design",
      "Effective use of typography",
      "Balanced composition",
      "Color harmony",
    ],
    likes: 0,
    views: 0,
    createdAt: "2025-06-15T10:00:00Z",
    updatedAt: "2025-11-15T10:00:00Z",
    demo: "https://www.canva.com/design/DAG6eMuCDEI/-5_Vd8ehf61k12ITgU1cBg/view?utm_content=DAG6eMuCDEI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h981fd4f8fa",
  },
  {
    id: "p12",
    type: "graphic",
    scale: "mini",
    title: "Choir recruitment Poster",
    description:
      "A visually striking poster design created using Canva. This project demonstrates effective use of typography, composition, and color harmony to create an engaging and memorable visual experience.",
    technologies: ["canva", "Graphic Design", "Poster Design"],
    image: "/images/choir-recruitment.png",
    features: [
      "Visually striking design",
      "Effective use of typography",
      "Balanced composition",
      "Color harmony",
    ],
    likes: 0,
    views: 0,
    createdAt: "2025-06-15T10:00:00Z",
    updatedAt: "2025-09-15T10:00:00Z",
    demo: "https://www.canva.com/design/DAGwZr5TnIg/F0UI1vZPUXykGkVczuyzeQ/view?utm_content=DAGwZr5TnIg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h68ea20605a",
  },
];

const categoryTabs = ["frontend", "uiux", "graphic"];
const sortTabs = ["latest", "oldest"];
const scaleTabs = ["all", "major", "mini"];

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <button
    className="slick-arrow slick-next"
    onClick={onClick}
    aria-label="Next project"
  >
    <FaChevronRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="slick-arrow slick-prev"
    onClick={onClick}
    aria-label="Previous project"
  >
    <FaChevronLeft />
  </button>
);

function Projects() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [sortType, setSortType] = useState("latest");
  const [activeScale, setActiveScale] = useState("mini");

  // Filter and sort
  const filtered = allProjects
    .filter((p) => {
      const matchesCategory = p.type === activeCategory;
      const matchesScale = activeScale === "all" || p.scale === activeScale;
      return matchesCategory && matchesScale;
    })
    .sort((a, b) => {
      if (sortType === "latest")
        return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortType === "oldest")
        return new Date(a.createdAt) - new Date(b.createdAt);
      return 0;
    });

  const sliderSettings = {
    dots: true,
    infinite: filtered.length > 2,
    speed: 500,
    slidesToShow: Math.min(3, filtered.length),
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(3, filtered.length),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: Math.min(2, filtered.length),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="project-section" id="projects">
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="projects-title">
            My <span className="highlight">Projects</span>
          </h2>
          <p className="projects-subtitle">
            Explore my work across frontend development, UI/UX design, and
            graphic design
          </p>
        </motion.div>

        <motion.div
          className="projects-filters"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="filter-group scale-filter">
            <h3 className="filter-label">Project Scale</h3>
            <div className="filter-buttons">
              {scaleTabs.map((scale) => (
                <button
                  key={scale}
                  className={`filter-btn ${
                    activeScale === scale ? "active" : ""
                  }`}
                  onClick={() => setActiveScale(scale)}
                >
                  {scale === "major" && <FaStar className="star-icon" />}
                  {scale.charAt(0).toUpperCase() + scale.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group category-filter">
            <h3 className="filter-label">Category</h3>
            <div className="filter-buttons">
              {categoryTabs.map((tab) => (
                <button
                  key={tab}
                  className={`filter-btn ${
                    tab === activeCategory ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group sort-filter">
            <h3 className="filter-label">Sort By</h3>
            <div className="filter-buttons">
              {sortTabs.map((sort) => (
                <button
                  key={sort}
                  className={`filter-btn ${
                    sort === sortType ? "active" : ""
                  }`}
                  onClick={() => setSortType(sort)}
                >
                  {sort.charAt(0).toUpperCase() + sort.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="carousel-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {filtered.length === 0 ? (
            <div className="no-project-message">
              <div className="empty-state">
                <FaStar className="empty-icon" />
                <h3>No {activeScale} projects yet</h3>
                <p>
                  {activeScale === "major"
                    ? "Major projects are coming soon! Check out my mini projects in the meantime."
                    : "Projects in this category are coming soon."}
                </p>
                {activeScale === "major" && (
                  <button
                    className="view-mini-btn"
                    onClick={() => setActiveScale("mini")}
                  >
                    View Mini Projects
                  </button>
                )}
              </div>
            </div>
          ) : (
            <>
              <div className="project-count">
                <span className="count-badge">
                  {filtered.length}{" "}
                  {filtered.length === 1 ? "Project" : "Projects"}
                </span>
              </div>
              <Slider {...sliderSettings}>
                {filtered.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </Slider>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;