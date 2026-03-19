import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaPaperPlane,
  FaWhatsapp 
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFeedback("Thank you! Your message has been sent successfully.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
      
      // Clear feedback after 5 seconds
      setTimeout(() => setFeedback(""), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      details: "Nairobi, Kenya",
      link: null
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      details: "+254 790 598 519",
      link: "tel:+254790598519",
      extraLinks: [
        {
          text: "WhatsApp Me",
          url: "https://wa.me/+254778852760",
          icon: <FaWhatsapp />
        }
      ]
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "okothgerald449@gmail.com",
      link: "mailto:okothgerald449@gmail.com"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.div 
          {...fadeInUp}
          className="contact-header"
        >
          <h2 className="contact-title">
            Get In <span className="highlight">Touch</span>
          </h2>
          <p className="contact-description">
            I would love to respond to your queries and concerns. It's always a
            pleasure chatting with you. Let's get in touch.
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Information */}
          <motion.div 
            {...fadeInLeft}
            className="contact-info"
          >
            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="info-card"
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="info-link"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p>{info.details}</p>
                    )}
                    {info.extraLinks && info.extraLinks.map((extra, idx) => (
                      <a
                        key={idx}
                        href={extra.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="extra-link"
                      >
                        {extra.icon} {extra.text}
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="map-wrapper"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d149911.88527910504!2d36.764995573196195!3d-1.3032076027232717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e1!3m2!1sen!2ske!4v1773081654078!5m2!1sen!2ske"
                title="Nairobi, Kenya - Location Map"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            {...fadeInRight}
            className="contact-form-section"
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="8"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="send-icon" />
                  </>
                )}
              </button>

              {feedback && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="feedback-message"
                >
                  {feedback}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;