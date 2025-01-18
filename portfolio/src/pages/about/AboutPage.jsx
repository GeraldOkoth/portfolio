import React from 'react';

function AboutPage() {
  return (
    <>
      <section className="About" id="about">
        <header className="About-header">
          <h2>About</h2>
          <p>Ask me my friends and you will know who I am</p>
        </header>
        <div className="about-info">
          <div className="about-img">
            <img
              src="/images/IMG_1481_transcprr.jpg"
              alt="my pic"
              width="200px"
              height="350px"
            />
          </div>
          <div className="aboutme">
            <div className="about-me" style={{ textAlign: "left" }}>
              <p>
                I am Gerald Okoth, <br /><br />
                a computer science student, software engineer enthusiast, and a
                web developer. I love programming and coding, and I spend a big
                deal of my day writing codes. I am currently working on
                front-end with a dream to pursue back-end engineering and
                ultimately to being a full-stack engineer. <br />
                Through the invaluable skills <br />
                that I acquire daily, I have been able to design and build a
                front-end responsive website for myself. This has promoted my
                confidence. <br />I look forward to a greater future of coding.{" "}
                <span>
                  <b>Aluta continua!</b>
                </span>
              </p>
            </div>
            <hr />
            <div className="social-links" id="follow-me-links">
              <a href="https://www.linkedin.com/in/geraldokoth/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/GeraldOkoth">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.youtube.com/@geraldokothKE">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="https://x.com/gerald_okothKE">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/okothgerald449">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/gerald.okoth.14/">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;