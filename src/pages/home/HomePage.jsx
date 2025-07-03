import React, { useEffect } from "react";
import textAnimate from "./text-animation";
import TopNavigationBar from "../../components/header/TopNavigationBar";
import { easeInOut, generateLinearEasing, motion } from "framer-motion";
import { linearGradient } from "framer-motion/client";

// import { Helmet } from "react-helmet";

function HomePage() {
  useEffect(() => {
    if (typeof textAnimate === "function") {
      textAnimate();
    }
  }, []);

  // resolve status after download is ready
  function downloadCv () {
    const btn = document.getElementById('downloadBtn');
    btn.innerText = "Downloading...";
  }

  return (
    <>
      <TopNavigationBar />
      <section className="home-page" id="home">
        <div className="hero">
          <div className="hero-info">
            <div className="hero-text-intro">
              <h2>
                Hello, I am
                <span className="orange"> Gerald Okoth</span>
              </h2>
              <h3 className="text-animation">
                A <span id="dynamic-text"></span>
              </h3>
              <motion.div
                className="hero-text-ul"
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  transitionTimingFunction: generateLinearEasing,
                  delay: 1,
                }}
              >
                <h5>Actively open to:</h5>
                <ul>
                  <li>
                    Remote or in-person internships in UI/UX and web development
                  </li>
                  <li>Collaborative side projects</li>
                  <li>Freelance opportunities</li>
                  <li>Mentorship and community-driven tech initiatives</li>
                </ul>
              </motion.div>
              {/* <Helmet>
                <script
                  src="./text-animation.js"
                  type="text/javascript"
                ></script>
              </Helmet> */}
            </div>
            <motion.div
              className="hero-btns"
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ transitionTimingFunction: easeInOut, delay: 2 }}
            >
              <a href="#about" className="btn btn-primary" role="button">
                About Me
              </a>
              <a
                href="/assets/gerald_okoth_resume.pdf"
                className="btn btn-primary"
                role="button"
                id="downloadBtn"
                onClick={downloadCv}
              >
                <span className="spinner-grow spinner-grow-sm"></span>Hire Me...
              </a>
            </motion.div>
            <motion.div
              className="wrapper"
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                transitionTimingFunction: linearGradient,
                delay: 2.5,
              }}
            >
              <div className="icon ln">
                <a href="https://www.linkedin.com/in/geraldokoth/">
                  <i className="fab fa-linkedin"></i>
                </a>
                <span>Linkedin</span>
              </div>
              <div className="icon fb">
                <a href="https://web.facebook.com/gerald.okoth.944/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <span>Facebook</span>
              </div>
              <div className="icon tw">
                <a href="https://x.com/gerald_okothKE">
                  <i className="fab fa-twitter"></i>
                </a>
                <span>Twitter</span>
              </div>
              <div className="icon in">
                <a href="https://www.instagram.com/okothgerald449">
                  <i className="fab fa-instagram"></i>
                </a>
                <span>Instagram</span>
              </div>
              <div className="icon git">
                <a href="https://github.com/GeraldOkoth">
                  <i className="fab fa-github"></i>
                </a>
                <span>Github</span>
              </div>
              <div className="icon yt">
                <a href="https://www.youtube.com/@geraldokothKE">
                  <i className="fab fa-youtube"></i>
                </a>
                <span>YouTube</span>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ transitionTimingFunction: easeInOut, delay: 2.5 }}
          >
            <img
              src="/images/profile.JPG"
              id="hero-image"
              alt="my profile pic"
              width="400px"
              height="400px"
            />
            {/* <div className="loader"></div> */}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
