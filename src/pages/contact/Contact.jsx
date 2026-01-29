import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";


function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
  };

  return (
    <>
      <section className="contact" id="contact">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ transitionTimingFunction: easeInOut, delay: 0.6 }}
          className="contact-header"
        >
          <h2>Let's Talk</h2>
          <p>
            I would love to respond to your queries/concerns. It is always a
            pleasure chatting with you. Let's get in touch.
          </p>
        </motion.div>
        <div className="contact-section">
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ transitionTimingFunction: easeInOut, delay: 1 }}
            className="contact-address"
          >
            <div className="location">
              <i className="fa-solid fa-location-dot"></i>
              <span>Nairobi, Kenya</span>
            </div>
            <div className="phone">
              <i className="fa-solid fa-phone"></i>
              <span>
                <a href="tel: +254790598519?body=Hello">Call/Text Me</a> or{" "}
                {
                  <a
                    href="https://wa.me/+254778852760"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp Me
                  </a>
                }
              </span>
            </div>
            <div className="email">
              <i className="fa-solid fa-envelope"></i>
              <span>
                <a href="mailto: okothgerald449@gmail.com">
                  Send Me a direct Email
                </a>
              </span>
            </div>
            <div className="map">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d934.1450044461311!2d36.90277473537391!3d-1.3081756361423016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1386ceb2c1ff%3A0x36a2dbb6d06e7232!2sNyayo%20Estate%20Embakasi!5e1!3m2!1sen!2ske!4v1769698341643!5m2!1sen!2ske"
                title="Location Map"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ transitionTimingFunction: easeInOut, delay: 1 }}
            className="contact-form"
          >
            <form method="post" action="" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-name">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-contact">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="someone@gmail.com"
                    required
                  />
                </div>
              </div>
              <div className="form-message">
                <div className="form-subject">
                  <input
                    type="text"
                    name="mesgSubject"
                    id="mesgSubject"
                    placeholder="Subject"
                  />
                </div>
                <textarea
                  name="message"
                  id="message"
                  rows="10"
                  placeholder="Type your message here..."
                  required
                ></textarea>
                <button type="submit" className="submit-button">
                  Send Message<i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
              <span id="feedback">{message}</span>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Contact;
