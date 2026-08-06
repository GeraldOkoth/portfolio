import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const allProjects = [
  {
    id: "p1",
    type: "frontend",
    scale: "mini",
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built with React and Sass showcasing frontend and UI/UX skills, projects and services.",
    technologies: ["React", "Sass", "Framer Motion", "JavaScript"],
    image: "/images/portfolio.png",
    features: [
      "Responsive design for all devices",
      "Smooth animations and transitions",
      "Project showcase with filtering",
      "Contact form integration",
    ],
    reasonForBuilding: "To showcase my frontend development and UI/UX design skills with a modern, interactive portfolio that stands out to potential employers.",
    challengesFaced: "Creating responsive layouts, implementing smooth animations, integrating theme toggle system, optimizing performance for mobile devices.",
    problemSolves: "Provides a centralized platform for potential clients and employers to view my projects, skills, and services in an engaging and professional manner.",
    createdAt: "2024-10-22T10:00:00Z",
    updatedAt: "2026-08-5T21:12:00Z",
    demo: "https://geraldokoth.vercel.app",
    github: "https://github.com/GeraldOkoth/portfolio",
  },
  {
    id: "p2",
    type: "frontend",
    scale: "mini",
    title: "Weather Dashboard",
    description:
      "A weather dashboard application displaying current weather information and forecasts for various locations using REST API.",
    technologies: ["React", "JavaScript", "REST API", "Tailwind CSS"],
    image: "/images/weather-dashboard.png",
    features: [
      "Real-time weather data fetching",
      "Search functionality for different locations",
      "5-day weather forecast display",
      "Responsive design with Tailwind CSS",
    ],
    reasonForBuilding: "To practice API integration, state management, and create a useful tool for users to check weather information across different locations.",
    challengesFaced: "Handling API rate limits, parsing complex JSON responses, implementing search debouncing, handling location-based data efficiently.",
    problemSolves: "Allows users to quickly check current weather conditions and forecasts for any location with a clean, intuitive interface.",
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
      "A responsive landing page demonstrating modern web design principles with semantic HTML, CSS Grid, and Flexbox.",
    technologies: ["HTML", "CSS", "Responsive Design"],
    image: "/images/html-css-landing-page.png",
    features: [
      "Semantic HTML structure",
      "Modern CSS techniques (Grid, Flexbox)",
      "Responsive design for mobile and desktop",
      "Clean and minimalist design",
    ],
    reasonForBuilding: "To master fundamental HTML and CSS skills while creating a beautiful, responsive landing page without JavaScript.",
    challengesFaced: "Creating flexible layouts without frameworks, ensuring cross-browser compatibility, optimizing for various screen sizes without media queries complexity.",
    problemSolves: "Demonstrates solid foundation in semantic HTML and CSS, proving ability to create responsive designs from scratch.",
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
      "A to-do list application with advanced DOM manipulation, localStorage persistence, and dynamic task management.",
    technologies: ["JavaScript", "HTML", "CSS", "LocalStorage"],
    image: "/images/simple-to-do.png",
    features: [
      "Add, edit, and delete tasks",
      "Persistent storage using localStorage",
      "Filter tasks by status",
      "Responsive design",
    ],
    reasonForBuilding: "To practice DOM manipulation and localStorage API while creating a practical productivity tool.",
    challengesFaced: "Managing state without frameworks, handling localStorage limitations, creating efficient DOM updates, ensuring data persistence.",
    problemSolves: "Provides users with a lightweight, persistent task management application that works without internet connection.",
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
      "An interactive web application focusing on dynamic content generation, data persistence, and JSON handling.",
    technologies: ["JavaScript", "JSON", "SessionStorage", "DOM API"],
    image: "/images/advanced-to-do.png",
    features: [
      "Dynamic content generation",
      "JSON data handling",
      "Browser storage implementation",
      "Advanced DOM manipulation",
    ],
    reasonForBuilding: "To advance JavaScript skills with JSON data handling, session management, and complex DOM operations.",
    challengesFaced: "Parsing and stringifying JSON, managing multiple storage types, handling large data sets efficiently, debugging complex interactions.",
    problemSolves: "Demonstrates advanced JavaScript capabilities and provides a feature-rich task management application with multiple storage options.",
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
      "A GitHub User Profile Search Application using React and Tailwindcss for viewing detailed user information and repositories.",
    technologies: ["React", "Tailwind CSS", "GitHub API", "REST API"],
    image: "/images/github-user-search.png",
    features: [
      "Real-time GitHub profile search",
      "Repository listing and filtering",
      "User statistics display",
      "Responsive design with Tailwind",
    ],
    reasonForBuilding: "To practice API integration with React, implement search functionality, and create a tool for exploring GitHub profiles.",
    challengesFaced: "GitHub API rate limiting, handling real-time search, managing async operations, displaying large data sets efficiently.",
    problemSolves: "Enables developers to quickly search and view GitHub user profiles and repositories without leaving your app.",
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
      "A UI design for a portfolio website replica created in Figma, showcasing modern web layout and user experience.",
    technologies: ["Figma", "UI Design", "UX Design", "Prototyping"],
    image: "/images/popular-tutorials.png",
    features: [
      "Modern and clean interface",
      "Responsive layout design",
      "Interactive prototypes",
      "User-centered design approach",
    ],
    reasonForBuilding: "To practice UI/UX design principles and create a pixel-perfect portfolio design in Figma.",
    challengesFaced: "Maintaining design consistency, creating responsive layouts in Figma, user testing and feedback implementation.",
    problemSolves: "Provides a reference design for building modern portfolio websites with excellent UX.",
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
      "A UI Figma design replicating ALX ehub login page with focus on visual appeal and user-friendly interface.",
    technologies: ["Figma", "UI Design", "Prototyping"],
    image: "/images/alx-ehub-login.png",
    features: [
      "Pixel-perfect design replication",
      "Interactive login flow",
      "Responsive design",
      "Modern UI elements",
    ],
    reasonForBuilding: "To enhance UI/UX design skills through design replication and prototype creation.",
    challengesFaced: "Matching exact pixel measurements, creating interactive prototypes, implementing form validation visuals.",
    problemSolves: "Demonstrates UI design proficiency and provides a reference for modern login page design.",
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
      "A modern and responsive portfolio website UI design created in Figma with focus on user experience.",
    technologies: ["Figma", "UI Design", "UX Design", "Prototyping"],
    image: "/images/alx-ui-ux-design.png",
    features: [
      "Modern and clean interface",
      "Responsive layout design",
      "Interactive prototypes",
      "User-centered design approach",
    ],
    reasonForBuilding: "To showcase ability to design complete website layouts with responsive design principles.",
    challengesFaced: "Creating flexible component systems, ensuring design scalability, implementing interactive prototypes.",
    problemSolves: "Provides comprehensive design system and reference for building responsive portfolio websites.",
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
      "A modern and responsive weather dashboard UI design created in Figma with focus on data visualization.",
    technologies: ["Figma", "UI Design", "UX Design", "Prototyping"],
    image: "/images/weather-dashboard.png",
    features: [
      "Modern and clean interface",
      "Responsive layout design",
      "Interactive prototypes",
      "User-centered design approach",
    ],
    reasonForBuilding: "To practice designing data-heavy interfaces with good information hierarchy.",
    challengesFaced: "Organizing complex information, making data readable, creating responsive data visualizations.",
    problemSolves: "Demonstrates ability to design interfaces for complex data presentation.",
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
      "A visually striking poster design created using Canva demonstrating effective use of typography and composition.",
    technologies: ["Canva", "Graphic Design", "Poster Design"],
    image: "/images/recollection.png",
    features: [
      "Visually striking design",
      "Effective use of typography",
      "Balanced composition",
      "Color harmony",
    ],
    reasonForBuilding: "To practice graphic design fundamentals and create engaging visual content.",
    challengesFaced: "Balancing visual hierarchy, choosing complementary colors, creating readable typography.",
    problemSolves: "Demonstrates graphic design skills and provides template for creating engaging posters.",
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
      "A visually striking poster design created using Canva for choir recruitment with focus on visual appeal.",
    technologies: ["Canva", "Graphic Design", "Poster Design"],
    image: "/images/choir-recruitment.png",
    features: [
      "Visually striking design",
      "Effective use of typography",
      "Balanced composition",
      "Color harmony",
    ],
    reasonForBuilding: "To create effective promotional material for a community event.",
    challengesFaced: "Making text readable on complex backgrounds, creating emotional appeal, balancing imagery and text.",
    problemSolves: "Provides effective promotional material for event recruitment.",
    createdAt: "2025-06-15T10:00:00Z",
    updatedAt: "2025-09-15T10:00:00Z",
    demo: "https://www.canva.com/design/DAGwZr5TnIg/F0UI1vZPUXykGkVczuyzeQ/view?utm_content=DAGwZr5TnIg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h68ea20605a",
  },
  {
    id: "p13",
    type: "graphic",
    scale: "mini",
    title: "Juma Keith Campaign Poster",
    description:
      "A campaign poster designed for Machakos University presidential aspirant in his quest for University presidency.",
    technologies: ["Canva", "Graphic Design", "Poster Design"],
    image: "/images/juma-keith.jpg",
    features: [
      "Visually striking design",
      "Balanced composition",
    ],
    reasonForBuilding: "To create effective promotional material for a a presidential aspirant event.",
    challengesFaced: "Making text readable on complex backgrounds, creating emotional appeal, balancing imagery and text.",
    problemSolves: "Provides effective promotional material for presidential aspirant.",
    createdAt: "2025-11-15T10:00:00Z",
    updatedAt: "2026-08-06T10:00:00Z",
    demo: "/images/juma-keith.jpg",
  },
  {
    id: "p14",
    type: "graphic",
    scale: "mini",
    title: "Machakos University Christian Union Event Poster",
    description:
      "Machakos University christian Union event poster",
    technologies: ["Canva", "Graphic Design", "Poster Design"],
    image: "/images/mksu-cu.jpg",
    features: [
      "Visually striking design",
      "Balanced composition",
      ],
    reasonForBuilding: "To create awareness material for a university christian union event.",
    challengesFaced: "",
    problemSolves: "Provides effective promotional material for a university christian union event.",
    createdAt: "2025-02-04T10:00:00Z",
    updatedAt: "2026-08-06T10:00:00Z",
    demo: "/images/mksu-cu.jpg",
  },
  {
    id: "p15",
    type: "graphic",
    scale: "mini",
    title: "Pactum Novum Coalition Campaign Poster",
    description:
      "A campaign poster designed for Machakos University pactum-novum coalition in their quest for University Student goververning council",
    technologies: ["Canva", "Graphic Design", "Poster Design"],
    image: "/images/pactum-novum.jpg",
    features: [
      "Visually striking design",
      "Balanced composition",
      ],
    reasonForBuilding: "To create promotional material for pactum-novum coalitions ambition for student governing council leadership",
    challengesFaced: "Making text readable on complex backgrounds, creating emotional appeal, balancing imagery and text.",
    problemSolves: "Provides effective promotional material for pactum-novum coalitions ambition for student governing council leadership.",
    createdAt: "2025-02-01T10:00:00Z",
    updatedAt: "2026-08-06T10:00:00Z",
    demo: "/images/pactum-novum.jpg",
  },
  {
    id: "p16",
    type: "graphic",
    scale: "mini",
    title: "Papa Smith Campaign Poster",
    description:
      "A campaign poster designed for Machakos University presidential aspirant in his quest for University presidency.",
    technologies: ["Canva", "Graphic Design", "Poster Design"],
    image: "/images/papasmith.jpg",
    features: [
      "Visually striking design",
      "Balanced composition",
      ],
    reasonForBuilding: "To create promotional material for Papa Smith's presidential campaign.",
    challengesFaced: "Making text readable on complex backgrounds, creating emotional appeal, balancing imagery and text.",
    problemSolves: "Provides effective promotional material for Papa Smith's presidential campaign.",
    createdAt: "2025-01-29T10:00:00Z",
    updatedAt: "2026-08-06T10:00:00Z",
    demo: "/images/papasmith.jpg",
  },
  {
    id: "p17",
    type: "graphic",
    scale: "mini",
    title: "Sara Mapi Campaign Poster",
    description:
      "A campaign poster designed for Machakos University TVET representative aspirant.",
    technologies: ["Canva", "Graphic Design", "Poster Design"],
    image: "/images/sara-mapi.jpg",
    features: [
      "Visually striking design",
      "Balanced composition",
      ],
    reasonForBuilding: "To create promotional material for Sara Mapi's TVET representative campaign.",
    challengesFaced: "Making text readable on complex backgrounds, creating emotional appeal, balancing imagery and text.",
    problemSolves: "Provides effective promotional material for Sara Mapi's TVET representative campaign.",
    createdAt: "2025-01-26T10:00:00Z",
    updatedAt: "2026-08-06T10:00:00Z",
    demo: "/images/sara-mapi.jpg",
  },
  {
    id: "p18",
    type: "graphic",
    scale: "mini",
    title: "Sharon Muthoni Campaign Poster",
    description:
      "A campaign poster designed for Machakos University School of Pure and Applied Sciences representative aspirant.",
    technologies: ["Canva", "Graphic Design", "Poster Design"],
    image: "/images/sharon-muthoni.jpg",
    features: [
      "Visually striking design",
      "Balanced composition",
      ],
    reasonForBuilding: "To create promotional material for Sharon Muthoni's School of Pure and Applied Sciences representative campaign.",
    challengesFaced: "Making text readable on complex backgrounds, creating emotional appeal, balancing imagery and text.",
    problemSolves: "Provides effective promotional material for Sharon Muthoni's School of Pure and Applied Sciences representative campaign.",
    createdAt: "2025-02-15T10:00:00Z",
    updatedAt: "2026-08-06T10:00:00Z",
    demo: "/images/sharon-muthoni.jpg",
  },
  {
    id: "p19",
    type: "graphic",
    scale: "mini",
    title: "Vincent Onyango Campaign Poster",
    description:
      "A campaign poster designed for Machakos University School of Pure and Applied Sciences representative aspirant.",
    technologies: ["Canva", "Graphic Design", "Poster Design"],
    image: "/images/vincent-onyango.jpg",
    features: [
      "Visually striking design",
      "Balanced composition",
      ],
    reasonForBuilding: "To create promotional material for Vincent Onyango's School of Pure and Applied Sciences representative campaign.",
    challengesFaced: "Making text readable on complex backgrounds, creating emotional appeal, balancing imagery and text.",
    problemSolves: "Provides effective promotional material for Vincent Onyango's School of Pure and Applied Sciences representative campaign.",
    createdAt: "2025-02-17T10:00:00Z",
    updatedAt: "2026-08-06T10:00:00Z",
    demo: "/images/vincent-onyango.jpg",
  },
];

const categoryTabs = ["frontend", "uiux", "graphic"];
const sortTabs = ["latest", "oldest"];
const scaleTabs = ["all", "major", "mini"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [sortType, setSortType] = useState("latest");
  const [activeScale, setActiveScale] = useState("mini");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [gridSize, setGridSize] = useState({ cols: 3, rows: 3 });

  // Set grid size based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setGridSize({ cols: 3, rows: 3 });
      } else if (window.innerWidth >= 768) {
        setGridSize({ cols: 2, rows: 2 });
      } else {
        setGridSize({ cols: 1, rows: 1 });
      }
      setCurrentSlide(0); // Reset to first slide on resize
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const projectsPerSlide = gridSize.cols * gridSize.rows;
  const totalSlides = Math.ceil(filtered.length / projectsPerSlide);
  const startIndex = currentSlide * projectsPerSlide;
  const endIndex = startIndex + projectsPerSlide;
  const currentProjects = filtered.slice(startIndex, endIndex);

  const handleNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <section className="project-section" id="projects">
      <div className="projects-container">
        {/* Header */}
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
            Explore my work across frontend development, UI/UX design, and graphic design
          </p>
        </motion.div>

        {/* Filters */}
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
                  onClick={() => {
                    setActiveScale(scale);
                    setCurrentSlide(0);
                  }}
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
                  onClick={() => {
                    setActiveCategory(tab);
                    setCurrentSlide(0);
                  }}
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
                  onClick={() => {
                    setSortType(sort);
                    setCurrentSlide(0);
                  }}
                >
                  {sort.charAt(0).toUpperCase() + sort.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects-grid-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {filtered.length === 0 ? (
            <div className="no-project-message">
              <div className="empty-state">
                <FaStar className="empty-icon" />
                {/* <h3>No {activeScale} projects yet</h3> */}
                <p>
                  {activeScale === "major"
                    ? "Projects in this category are available upon request. Please contact me for more information."
                    : "Major projects are coming soon! Check out my mini projects in the meantime."}
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
                  {filtered.length} {filtered.length === 1 ? "Project" : "Projects"}
                </span>
              </div>

              {/* Grid Container */}
              <div className="projects-grid-container">
                <AnimatePresence mode="fade">
                  <motion.div
                    key={currentSlide}
                    className="projects-grid"
                    style={{
                      gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
                      gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {currentProjects.map((project, index) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Pagination Controls */}
              {totalSlides > 1 && (
                <div className="pagination-controls">
                  <button
                    className="pagination-btn prev-btn"
                    onClick={handlePrevSlide}
                    disabled={currentSlide === 0}
                    aria-label="Previous slide"
                  >
                    <FaChevronLeft />
                  </button>

                  <div className="pagination-dots">
                    {Array.from({ length: totalSlides }).map((_, idx) => (
                      <button
                        key={idx}
                        className={`dot ${currentSlide === idx ? "active" : ""}`}
                        onClick={() => goToSlide(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        aria-current={currentSlide === idx ? "page" : undefined}
                      />
                    ))}
                  </div>

                  <button
                    className="pagination-btn next-btn"
                    onClick={handleNextSlide}
                    disabled={currentSlide === totalSlides - 1}
                    aria-label="Next slide"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              )}

              {/* Slide Indicator */}
              <p className="slide-indicator">
                Slide {currentSlide + 1} of {totalSlides}
              </p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;