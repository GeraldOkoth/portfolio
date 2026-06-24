import React from "react";
import { easeInOut, motion } from "framer-motion";


function Footer() {

  const socialMediaLinks = [
    {
      href: "https://www.linkedin.com/in/geraldokoth/",
      iconClass: "fa-brands fa-linkedin",
      label: "LinkedIn"
    },
    {
      href: "https://github.com/GeraldOkoth",
      iconClass: "fa-brands fa-github",
      label: "GitHub"
    },
    {
      href: "https://www.youtube.com/@geraldokothKE",
      iconClass: "fa-brands fa-youtube",
      label: "YouTube"
    },
    {
      href: "https://x.com/gerald_okothKE",
      iconClass: "fa-brands fa-twitter",
      label: "Twitter"
    },
    {
      href: "https://www.instagram.com/okothgerald449",
      iconClass: "fa-brands fa-instagram",
      label: "Instagram"
    },
    {
      href: "https://www.facebook.com/gerald.okoth.944/",
      iconClass: "fa-brands fa-facebook",
      label: "Facebook"
    }
  ]

  return (
    <section className="footer">
        <hr />
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ transitionTimingFunction: easeInOut, delay: .4 }}
          className="footer-content"
        >
          <p className="copyright">
            &copy; {new Date().getFullYear()}, TechiesKE. All rights reserved.
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
                <i className={link.iconClass}></i>
              </a>
            ))}
          </div>
        </motion.div>
    </section>
  );
}

export default Footer;
