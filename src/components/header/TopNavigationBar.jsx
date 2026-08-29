import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaPalette } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const THEMES = {
  dark: {
    name: "Dark",
    icon: <FaMoon />,
    colors: {
      primary: "#ff7b00",
      secondary: "#ff9500",
      background: "#0a0520",
      backgroundAlt: "#1a0f3e",
      backgroundCard: "#0f0a2e",
      text: "#ffffff",
      textMuted: "rgba(255, 255, 255, 0.7)",
      border: "rgba(255, 255, 255, 0.1)",
      success: "#43e97b",
      themeMenu: "#fff",
      themeNavLinks: "#fff",
    },
  },
  light: {
    name: "Light",
    icon: <FaSun />,
    colors: {
      primary: "#ff7b00",
      secondary: "#ff6b00",
      background: "#ffffff",
      backgroundAlt: "#f5f5f5",
      backgroundCard: "#fafafa",
      text: "#0a0520",
      textMuted: "rgba(10, 5, 32, 0.7)",
      border: "rgba(10, 5, 32, 0.1)",
      success: "#22c55e",
      themeMenu: "#353535",
      themeNavLinks: "#000",
    },
  },
  ocean: {
    name: "Ocean",
    icon: <FaPalette />,
    colors: {
      primary: "#00bfff",
      secondary: "#1e90ff",
      background: "#0a1929",
      backgroundAlt: "#1a2332",
      backgroundCard: "#0f1b2a",
      text: "#ffffff",
      textMuted: "rgba(255, 255, 255, 0.7)",
      border: "rgba(255, 255, 255, 0.1)",
      success: "#10b981",
      themeMenu: "rgb(10, 5, 32)",
      themeNavLinks: "#fff",
    },
  },
};

export default function TopNavigationBar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActive(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -50% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  // Handle body blur when menu opens/closes
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.classList.add("menu-open-blur");
  //     document.body.style.overflow = "hidden"; // Prevent scrolling when menu open
  //   } else {
  //     document.body.classList.remove("menu-open-blur");
  //     document.body.style.overflow = "unset";
  //   }

  //   return () => {
  //     document.body.classList.remove("menu-open-blur");
  //     document.body.style.overflow = "unset";
  //   };
  // }, []);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscKey);
      return () => window.removeEventListener("keydown", handleEscKey);
    }
  }, [isOpen]);

  const applyTheme = (themeName) => {
    const theme = THEMES[themeName];
    const root = document.documentElement;

    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--theme-${key}`, value);
    });

    document.body.className = `theme-${themeName}`;
    document.body.setAttribute("data-theme", themeName);
  };

  const handleThemeChange = (themeName) => {
    setCurrentTheme(themeName);
    applyTheme(themeName);
    localStorage.setItem("portfolio-theme", themeName);
    setShowThemeMenu(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleThemeMenu = () => {
    setShowThemeMenu(!showThemeMenu);
  };

  // Handle overlay click to close menu
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <motion.div
          className="nav-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home">
            <img
              src="/images/logo.png"
              alt="Gerald Okoth Logo"
            />
            <span className="logo-text">Gerald Okoth</span>
          </a>
        </motion.div>

        {/* Desktop Navigation Links */}
        <motion.ul
          className={`nav-links ${isOpen ? "show" : ""}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <a
                href={`#${item.id}`}
                onClick={closeMenu}
                className={`nav-link ${active === item.id ? "active" : ""}`}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Theme Toggle & Mobile Menu */}
        <div className="nav-actions">
          {/* Theme Toggle Button */}
          <motion.div
            className="theme-toggle-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              className="theme-toggle-btn"
              onClick={toggleThemeMenu}
              aria-label="Toggle theme"
            >
              {THEMES[currentTheme].icon}
            </button>

            {/* Theme Menu Dropdown */}
            <AnimatePresence>
              {showThemeMenu && (
                <motion.div
                  className="theme-menu"
                  initial={{ opacity: 0, scale: 0.9, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {Object.entries(THEMES).map(([key, theme]) => (
                    <button
                      key={key}
                      className={`theme-option ${currentTheme === key ? "active" : ""}`}
                      onClick={() => handleThemeChange(key)}
                    >
                      <span className="theme-icon">{theme.icon}</span>
                      <span className="theme-name">{theme.name}</span>
                      {currentTheme === key && (
                        <motion.span
                          className="theme-check"
                          layoutId="activeTheme"
                        >
                          ✓
                        </motion.span>
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div
            className={`nav-toggle ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={handleOverlayClick}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}
