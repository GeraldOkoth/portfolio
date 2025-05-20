import React, { useState, useRef, useEffect } from "react";
import "./TopNavigationBar.css";
function TopNavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="top-nav">
        <div className="top-navigation-links">
          <div className="logo">
            <a href="index.html" className="navbar-brand">
              Gerald Okoth
            </a>
          </div>
          <div
            className={`menu-links ${isMenuOpen ? "show" : ""}`}
            ref={menuRef}
          >
            <ul id="menu-list">
              <li>
                <a
                  href="index.html"
                  target="_self"
                  className="active"
                  title="Home"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#about" target="_self" title="About me">
                  About
                </a>
              </li>
              <li>
                <a href="#education" target="_self" title="Education">
                  Education
                </a>
              </li>
              <li>
                <a href="#skills" target="_self" title="My skills">
                  Skills
                </a>
              </li>
              {/* <li className="dropdown nav-item">
                <a
                  href="#projects"
                  target="_self"
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                  title="My projects"
                >
                  Projects
                </a>
                <ul className="dropdown">
                  <li className="dropdown-menu">
                    <a
                      href="#mini-projects"
                      className="dropdown-item disabled"
                      target="_self"
                      title="My projects"
                    >
                      Mini Projects
                    </a>
                  </li>
                  <li className="dropdown-menu">
                    <a
                      href="#major-services"
                      className="dropdown-item disabled"
                      target="_self"
                      title="Services"
                    >
                      Major Projects
                    </a>
                  </li>
                </ul>
              </li> */}
              <li>
                <a href="#services" target="_self" title="Services">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" target="_self" title="Contact me">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <i class="bi bi-brightness-high"></i>
            <i class="bi bi-moon-fill"></i>
          </div>
          <div
            className={`hamburger-btn ${isMenuOpen ? "change" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TopNavigationBar;
