import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaDollarSign, 
  FaStar, 
  FaCalendarCheck, 
  FaArrowRight,
  FaCode,
  FaPaintBrush,
  FaPalette,
  FaVideo,
  FaMusic
} from "react-icons/fa";

// ServiceItem Component with enhanced interactions
const ServiceItem = ({ image, alt, title, description, icon, index }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <motion.div 
      className={`service-card ${isActive ? 'active' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={toggleActive}
    >
      <div className="service-card-inner">
        {/* Image Container */}
        <div className="service-image-wrapper">
          <img src={image} alt={alt} className="service-image" />
          <div className={`service-overlay ${isActive ? 'show' : ''}`}>
            <div className="overlay-content">
              <div className="service-icon-large">{icon}</div>
              <h3 className="overlay-title">{title}</h3>
              <div className="title-underline"></div>
              <p className="overlay-description">{description}</p>
              <button className="learn-more-btn">
                Learn More <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Card Footer (Always Visible) */}
        <div className="service-card-footer">
          <div className="service-icon-small">{icon}</div>
          <h3 className="service-title">{title}</h3>
          <button className="toggle-btn" aria-label={`View ${title} details`}>
            <FaArrowRight className={`arrow-icon ${isActive ? 'rotated' : ''}`} />
  </button>
        </div>
      </div>
    </motion.div>
  );
};

// ServiceFeature Component (formerly ServiceDescription)
const ServiceFeature = ({ icon, title, description, index }) => {
  return (
    <motion.div
      className="service-feature"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="feature-icon-wrapper">
        <div className="feature-icon">{icon}</div>
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </motion.div>
  );
};

// Main Services Component
const Services = () => {
  const serviceFeatures = [
    {
      icon: <FaDollarSign />,
      title: "Affordable Pricing",
      description:
        "High-quality services at competitive rates, ensuring the best value for your investment.",
    },
    {
      icon: <FaStar />,
      title: "Quality Guaranteed",
      description:
        "Delivering excellence in every project with attention to detail and client satisfaction.",
    },
    {
      icon: <FaCalendarCheck />,
      title: "Easy Booking",
      description:
        "Schedule consultations and book services seamlessly at your convenience.",
    },
  ];

  const services = [
    {
      image: "/images/Screenshot 2024-05-03 121917.png",
      alt: "Web Development Services",
      title: "Web Development",
      description:
        "Building modern, responsive, and high-performance websites tailored to your needs using cutting-edge technologies.",
      icon: <FaCode />,
    },
    {
      image: "/images/ui-ux-design.png",
      alt: "UI/UX Design Services",
      title: "UI/UX Design",
      description:
        "Creating intuitive, user-centered designs that transform ideas into beautiful digital experiences with seamless interactions.",
      icon: <FaPaintBrush />,
    },
    {
      image: "/images/Screenshot 2023-11-23 222732.png",
      alt: "Graphic Design Services",
      title: "Graphic Design",
      description:
        "Crafting visual identities that captivate and communicate. From logos to marketing materials, designs that make you say WOW!",
      icon: <FaPalette />,
    },
    {
      image: "/images/video_editting.png",
      alt: "Video Editing Services",
      title: "Video Editing",
      description:
        "Professional video editing that brings your stories to life. Transforming raw footage into cinematic masterpieces with precision.",
      icon: <FaVideo />,
    },
    {
      image: "/images/istockphoto-182428014-1024x1024.jpg",
      alt: "Music Lessons",
      title: "Music Lessons",
      description:
        "Comprehensive music education from fundamentals to advanced composition. Learn, create, and master your musical journey.",
      icon: <FaMusic />,
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        {/* Header */}
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="services-title">
            My <span className="highlight">Services</span>
          </h2>
          <p className="services-subtitle">
            Comprehensive solutions tailored to bring your vision to life
          </p>
        </motion.div>

        {/* Service Features */}
        <div className="services-features">
          {serviceFeatures.map((feature, index) => (
            <ServiceFeature key={index} {...feature} index={index} />
          ))}
        </div>

        {/* Services Grid */}
        <motion.div
          className="services-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} index={index} />
          ))}
        </motion.div>

        {/* Mobile Hint */}
        <motion.p
          className="mobile-hint"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Tap on any service to view details
        </motion.p>
      </div>
    </section>
  );
};

export default Services;