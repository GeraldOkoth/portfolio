import React, { useEffect } from "react";
import textAnimate from "./text-animation";
// import { Helmet } from "react-helmet";

function HomePage() {
  const myFunction = () => {
    // Define toggle logic here
  };

  useEffect(() => {
    textAnimate();
  }, []);

  return (
    <>
      <section className="home-page" id="top">
        <div className="navbar">
          <div className="logo">
            <a href="index.html">
              Gerald <span id="o">Okoth</span>
            </a>
          </div>
          <nav className="menu">
            <ul id="menuLinks">
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
                <a
                  href="#services"
                  className="onhover"
                  target="_self"
                  title="services"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" target="_self" title="Testimonials">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" target="_self" title="Contact me">
                  Contact
                </a>
              </li>
            </ul>
            <div className="humburger-btn" onClick={() => myFunction()}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </nav>
        </div>

        <div className="hero">
          <div className="hero-info">
            <div className="hero-text">
              <h1>
                Hi there, It's
                <span id="orange"> Gerald</span>
              </h1>
              <h3 className="text-animation">
                I am a <span id="dynamic-text"></span>
              </h3>
              <p>
                with passion for creating intuitive and visually appealing user
                interfaces. I am looking forward to collaboration with other
                tech-enthusiasts on GitHub code spaces.
              </p>
              {/* <Helmet>
                <script
                  src="./text-animation.js"
                  type="text/javascript"
                ></script>
              </Helmet> */}
            </div>
            <div className="hero-btns">
              <a href="#about" className="btn btn-primary" role="button">
                <span></span>About Me
              </a>
              <a
                href="/assets/gerald_okoth_myjobmag_curriculum_vitae.pdf"
                className="btn btn-primary disabled"
                role="button"
                id="DownloadBtn"
              >
                <span></span>Hire Me
              </a>
            </div>
            <div className="wrapper">
              <div className="icon ln">
                <a href="https://www.linkedin.com/in/geraldokoth/">
                  <i className="fab fa-linkedin"></i>
                </a>
                <span>Linkedin</span>
              </div>
              <div className="icon fb">
                <a href="https://www.facebook.com/gerald.okoth.14">
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
            </div>
          </div>
          <div className="hero-image">
            <img
              src={"/images/profile.jpg"}
              id="hero-image"
              alt="my profile pic"
              width="300px"
              height="300px"
            />
            {/* <div className="loader"></div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
