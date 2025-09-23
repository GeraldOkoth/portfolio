import { FaDollarSign, FaStar, FaCalendarCheck } from "react-icons/fa";

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
const ServiceDescription = ({ icon, title, description }) => {
  return (
    <div
      className={`service-description-item ${title
        .toLowerCase()
        .replace(" ", "-")}`}
    >
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Main Services Component
const Services = () => {
  const serviceDescriptions = [
    {
      icon: <FaDollarSign className="icon" />,
      title: "Affordable Cost",
      description:
        "I offer the best services to clients in need at the most affordable cost.",
    },
    {
      icon: <FaStar className="icon" />,
      title: "Quality Services",
      description:
        "Customer satisfaction is key to sustaining any business. With me quality services are guaranteed.",
    },
    {
      icon: <FaCalendarCheck className="icon" />,
      title: "Online Booking",
      description:
        "My services are accessible to you at the palm of your hands, book with me today.",
    },
  ];

  const services = [
    {
      image: "/images/Screenshot 2024-05-03 121917.png",
      alt: "Web Development",
      title: "Web Development",
      description: "Connect up with me for amazing website designs.",
    },
    {
      image: "/images/tommao-wang-hbkdjPI9594-unsplash.jpg",
      alt: "UI/UX",
      title: "UI/UX",
      description: "Translate your abstract design into visual aesthetic designs.",
    },
    {
      image: "/images/Screenshot 2023-11-23 222732.png",
      alt: "Graphic design",
      title: "Graphic Design",
      description:
        "There are three responses to a piece of design - yes, no, and WOW! Wow is the one I aim for.",
    },
    {
      image: "/images/459-background.png",
      alt: "Video Editting",
      title: "Video Editting",
      description:
        "Editing feels almost like sculpting or a form of continuing with the writing process.",
    },
    {
      image: "/images/istockphoto-182428014-1024x1024.jpg",
      alt: "Music lessons",
      title: "Music Lessons",
      description:
        "Learn Music from basics to advanced concept, write and compose your own music.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <header className="services-header">
          <h2>Explore Services</h2>
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