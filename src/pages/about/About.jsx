import React from "react";
import { easeIn, easeInOut, motion } from "framer-motion";

const About = () => {
  return (
    <section className="about-section" id="about">
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="container">
        <motion.div
          className="about-img"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ transitionTimingFunction: easeIn, delay: 1 }}
        >
          <img
            src="/images/IMG_7963_transcpr.jpg"
            alt="my pic"
            width="200px"
            height="350px"
          />
          <motion.p
            className="mission-statement"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ transitionTimingFunction: easeIn, delay: 1.5 }}
          >
            <em>
              <strong>Mission Statement:</strong> to be a person of integrity,
              championing a just society that recognizes, upholds, and protects
              human rights and freedoms, while inspiring others through my
              strengths and talent, to achieve a better quality of life.
            </em>
          </motion.p>
        </motion.div>
        <motion.div className="about-info">
          <motion.p
            className="intro"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ transitionTimingFunction: easeInOut, delay: 2 }}
          >
            I’m a front-end developer in training with a strong foundation in
            leadership, empathy, and communication. Currently enrolled in the{" "}
            <strong>ALX Software Engineering Program</strong>, where I’m
            sharpening my technical and creative skills by building responsive,
            user-focused web applications using frontend technologies and UI/UX
            design tools.
          </motion.p>

          <motion.p
            className="para-1"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ transitionTimingFunction: easeInOut, delay: 2.2 }}
          >
            I’m especially drawn to UI/UX design, with a passion for creating
            intuitive digital experiences and clean UI designs that are not only
            functional but also visually compelling and accessible.
          </motion.p>

          <motion.p
            className="para-2"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ transitionTimingFunction: easeInOut, delay: 2.4 }}
          >
            My journey into software engineering was inspired by a deep
            curiosity of technology and a desire to solve real-world problems
            through it. I enjoy taking ideas from concept to interactive
            prototypes and finally turning them into full-fledged applications
            that add value to users’ lives.
          </motion.p>

          <motion.p
            className="para-3"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ transitionTimingFunction: easeInOut, delay: 2.6 }}
          >
            Beyond code, my background in leadership and collaboration — from my
            time at campus has taught me communication skills, working with
            diverse teams, and remaining grounded in purpose.
          </motion.p>
          <motion.p
            className="para-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ transitionTimingFunction: easeInOut, delay: 2.8 }}
          >
            I believe that meaningful tech is created where creativity meets
            community impact. My mission is to use technology not just to build
            apps, but to uplift communities and inspire change. I’m working
            toward becoming a well-rounded developer who creates impactful
            solutions with purpose.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
