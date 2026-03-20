import { Link } from "react-scroll";
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
      success: "#43e97b"
    }
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
      success: "#22c55e"
    }
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
      success: "#10b981"
    }
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

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeName) => {
    const theme = THEMES[themeName];
    const root = document.documentElement;
    
    // Apply all theme colors as CSS variables
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--theme-${key}`, value);
    });
    
    // Add theme class to body for additional styling
    document.body.className = `theme-${themeName}`;
    
    // Also set data attribute for easier CSS targeting
    document.body.setAttribute('data-theme', themeName);
  };

  const handleThemeChange = (themeName) => {
    setCurrentTheme(themeName);
    applyTheme(themeName);
    localStorage.setItem("portfolio-theme", themeName);
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

  // const toggleThemeMenu = () => {
  //   setShowThemeMenu(!showThemeMenu);
  // };

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
            {/* <button 
              className="theme-toggle-btn"
              onClick={toggleThemeMenu}
              aria-label="Toggle theme"
            >
              {THEMES[currentTheme].icon}
            </button> */}

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