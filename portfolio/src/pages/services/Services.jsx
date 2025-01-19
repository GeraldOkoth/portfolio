import React from "react";
import "./services.css"; // Include your CSS for styling

// ServiceItem Component for each individual service
const ServiceItem = ({ image, alt, title, description }) => {
  return (
    <div className="image">
      <div className="photography-img">
        <img src={image} alt={alt} width="200px" height="200px" />
        <div className="overlay"></div>
      </div>
      <div className="service-description">
        <h3>{title}</h3>
        <hr />
        <p>{description}</p>
      </div>
    </div>
  );
};

// ServiceDescription Component for service descriptions like Affordable Cost, Quality Services, etc.
const ServiceDescription = ({ image, alt, title, description }) => {
  return (
    <div
      className={`service-description-item ${alt
        .toLowerCase()
        .replace(" ", "-")}`}
    >
      <img src={image} alt={alt} width="150px" height="150px" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Main Services Component
const Services = () => {
  const serviceDescriptions = [
    {
      image: "/images/Screenshot 2023-11-22 141107.png",
      alt: "Affordable cost",
      title: "Affordable Cost",
      description:
        "I offer the best services to clients in need at the most affordable cost.",
    },
    {
      image: "/images/Screenshot 2023-11-22 141831.png",
      alt: "Quality services",
      title: "Quality Services",
      description:
        "Customer satisfaction is key to sustaining any business. With me quality services are guaranteed.",
    },
    {
      image: "/images/Screenshot 2023-11-22 143059.png",
      alt: "Online booking",
      title: "Online Booking",
      description:
        "My services are accessible to you at the palm of your hands, book with me today.",
    },
  ];

  const services = [
    {
      image: "/images/Screenshot 2024-05-03 121917.png",
      alt: "Web design",
      title: "Web Design",
      description: "Connect up with me for amazing website designs.",
    },
    {
      image: "/images/459-background.png",
      alt: "Videography",
      title: "Videography",
      description:
        "Editing feels almost like sculpting or a form of continuing with the writing process.",
    },
    {
      image: "/images/istockphoto-182428014-1024x1024.jpg",
      alt: "Music lessons",
      title: "Music Lessons",
      description: "Music is nourishment, and a comforting elixir.",
    },
    {
      image: "/images/tommao-wang-hbkdjPI9594-unsplash.jpg",
      alt: "Photography",
      title: "Photography",
      description: "I don't just capture the moment, I capture the feeling.",
    },
    {
      image: "/images/Screenshot 2023-11-23 222732.png",
      alt: "Graphic design",
      title: "Graphic Design",
      description:
        "There are three responses to a piece of design - yes, no, and WOW! Wow is the one I aim for.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <header className="services-header">
          <h3>Explore my Services</h3>
          <p>
            My pleasure is to offer better and quality services that are
            tailored to your expectations!
          </p>
        </header>
        <div className="services-cta">
          {serviceDescriptions.map((service, index) => (
            <ServiceDescription key={index} {...service} />
          ))}
        </div>
        <div className="my-services">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
