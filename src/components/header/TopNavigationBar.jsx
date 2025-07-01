import { Link } from "react-scroll";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleSetActive = (section) => {
    setActive(section);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src="/images/logo.png" alt="logo" width={40} height={40} />
      </div>

      <div
        className={`nav-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${isOpen ? "show" : ""}`}>
        {["home", "about", "skills", "services", "tweets", "contact"].map(
          (section) => (
            <li key={section}>
              <Link
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onSetActive={handleSetActive}
                onClick={closeMenu}
                className={active === section ? "active" : ""}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
