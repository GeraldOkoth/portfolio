import React from "react";
import { easeInOut, motion } from "framer-motion";


function Footer() {
  return (
    <>
      <footer>
        <section className="footer">
          <hr />
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ transitionTimingFunction: easeInOut, delay: .4 }}
            className="footer-content"
          >
            <p>
              &copy; {new Date().getFullYear()}, All rights reserved. Powered by
              TechiesKE.
            </p>
            <div className="social-media-icons">
              <a
                href="https://www.linkedin.com/in/geraldokoth/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/GeraldOkoth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.youtube.com/@geraldokothKE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a
                href="https://x.com/gerald_okothKE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/okothgerald449"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/gerald.okoth.944/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </motion.div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
