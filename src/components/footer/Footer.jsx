import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const pageLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/geraldokoth/", icon: <FaLinkedin /> },
  { label: "GitHub", href: "https://github.com/GeraldOkoth", icon: <FaGithub /> },
  { label: "YouTube", href: "https://www.youtube.com/@geraldokothKE", icon: <FaYoutube /> },
  { label: "Twitter", href: "https://x.com/gerald_okothKE", icon: <FaTwitter /> },
  { label: "Instagram", href: "https://www.instagram.com/okothgerald449", icon: <FaInstagram /> },
  { label: "Facebook", href: "https://www.facebook.com/gerald.okoth.944/", icon: <FaFacebook /> },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-intro">
          <Link to="/" className="footer-brand">Gerald Okoth</Link>
          <p>Frontend developer and designer creating thoughtful, user-focused digital experiences.</p>
        </div>

        <nav className="footer-navigation" aria-label="Footer navigation">
          <h2>Explore</h2>
          <ul>
            {pageLinks.map(({ label, to }) => (
              <li key={to}><Link to={to}>{label}</Link></li>
            ))}
          </ul>
        </nav>

        <div className="footer-connect">
          <h2>Connect</h2>
          <p>Have a project or opportunity in mind? Let’s connect.</p>
          <Link to="/contact" className="footer-contact-link">Get in touch <span aria-hidden="true">↗</span></Link>
          <div className="social-media-icons" aria-label="Social media">
            {socialLinks.map(({ label, href, icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Gerald Okoth. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
