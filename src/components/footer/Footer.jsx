import React from "react";
import { easeInOut, motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  const socialMediaLinks = [
    {
      href: "https://www.linkedin.com/in/geraldokoth/",
      label: "LinkedIn",
      icon: <FaLinkedin />,
    },
    {
      href: "https://github.com/GeraldOkoth",
      abel: "GitHub",
      icon: <FaGithub />,
    },
    {
      href: "https://www.youtube.com/@geraldokothKE",
      label: "YouTube",
      icon: <FaYoutube />,
    },
    {
      href: "https://x.com/gerald_okothKE",
      label: "Twitter",
      icon: <FaTwitter />,
    },
    {
      href: "https://www.instagram.com/okothgerald449",
      label: "Instagram",
      icon: <FaInstagram />,
    },
    {
      href: "https://www.facebook.com/gerald.okoth.944/",
      label: "Facebook",
      icon: <FaFacebook />,
    },
  ];

  return (
    <section className="footer">
      <hr />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ transitionTimingFunction: easeInOut, delay: 0.4 }}
        className="footer-content"
      >
        <p className="copyright">
          &copy; {new Date().getFullYear()} TechiesKE. All rights reserved.
        </p>
        <div className="social-media-icons">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Footer;