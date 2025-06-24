import React from "react";
// import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <section className="footer">
          <hr />
          <div className="footer-content">
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
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
