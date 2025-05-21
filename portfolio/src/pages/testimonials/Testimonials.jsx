import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./testimonials.css";

// Individual Carousel Item Component
const CarouselItem = ({ isActive, image, name, username, feedback }) => {
  return (
    <div className={`carousel-item ${isActive ? "active" : ""}`}>
      <div className="user">
        <img src={image} alt="Twitter user profile pic" />
        <div className="user-info">
          <h5>{name}</h5>
          <i className="fa-brands fa-twitter"></i>
          <small>@{username}</small>
        </div>
      </div>
      <p>{feedback}</p>
    </div>
  );
};

// Main Testimonials Component
const Testimonials = () => {
  const testimonies = [
    {
      image: "/images/Screenshot 2024-12-03 105847.png",
      name: "Stephen Matyre",
      username: "Matyre_steve",
      feedback:
        "I have been very happy with the customer service and the attention to detail offered. I look forward to more services.",
      isActive: true,
    },
    {
      image: "/images/Screenshot 2024-12-03 105932.png",
      name: "L. Wawira",
      username: "Wawira",
      feedback:
        "It is amazing how his photos capture such detail: they really show off the space and setup. The lighting is absolutely perfect in every single photo.",
      isActive: false,
    },
    {
      image: "/images/Screenshot 2024-12-03 110019.png",
      name: "Anthony Tobias",
      username: "Antobias",
      feedback:
        "I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.",
      isActive: false,
    },
  ];

  return (
    <section className="Testimonials" id="testimonials">
      <div className="testimonies">
        <h2 className="text-center">What our customers say</h2>
        <div
          id="myCorousel"
          className="carousel slide"
          data-ride="carousel"
          data-interval="5000"
        >
          <ol className="carousel-indicators">
            {testimonies.map((_, index) => (
              <li
                key={index}
                data-target="#myCorousel"
                data-slide-to={index}
                className={index === 0 ? "active" : ""}
              ></li>
            ))}
          </ol>
          <div className="carousel-inner">
            {testimonies.map((testimonial, index) => (
              <CarouselItem key={index} {...testimonial} />
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#myCorousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#myCorousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
