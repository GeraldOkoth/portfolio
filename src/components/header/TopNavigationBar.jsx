import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaPalette } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const THEMES = {
  dark: {
    name: "Dark",
    icon: <FaMoon />,
    primary: "#ff7b00",
    background: "#0a0520",
    text: "#ffffff"
  },
  light: {
    name: "Light",
    icon: <FaSun />,
    primary: "#ff7b00",
    background: "#ffffff",
    text: "#0a0520"
  },
  ocean: {
    name: "Ocean",
    icon: <FaPalette />,
    primary: "#00bfff",
    background: "#0a1929",
    text: "#ffffff"
  }
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
    { id: "contact", label: "Contact" }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (theme) => {
    const root = document.documentElement;
    const themeConfig = THEMES[theme];
    
    root.style.setProperty("--theme-primary", themeConfig.primary);
    root.style.setProperty("--theme-background", themeConfig.background);
    root.style.setProperty("--theme-text", themeConfig.text);
    
    // Add theme class to body
    document.body.className = `theme-${theme}`;
  };

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    localStorage.setItem("portfolio-theme", theme);
    setShowThemeMenu(false);
  };

  const handleSetActive = (section) => {
    setActive(section);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleThemeMenu = () => {
    setShowThemeMenu(!showThemeMenu);
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
              width={50} 
              height={50} 
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
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onSetActive={handleSetActive}
                onClick={closeMenu}
                className={`nav-link ${active === item.id ? "active" : ""}`}
              >
                {item.label}
              </Link>
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
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}