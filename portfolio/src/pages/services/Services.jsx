import React from 'react'

function Services() {
  return (
    <>
      <section className="services" id="services">
        <div className="services-container">
          <header className="services-header">
            <h3>Explore my Services</h3>
            <p>My pleasure is to offer better and quality services that is tailored to your expectations!</p>
          </header>
          <div className="services-cta">
            <div className="cheap">
              <img src={"/images/Screenshot 2023-11-22 141107.png"} alt="Affodable cost" width="150px" height="150px" />
              <h3>Affodable cost</h3>
              <p>I offer the best services to clients in need at the most affordable cost.</p>
            </div>
            <div className="quality">
                <img src={"/images/Screenshot 2023-11-22 141831.png"} alt="Quality services" width="150px" height="150px" />
                <h3>Quality Services</h3>
                <p>Customer satisfaction is key to sustaining any bussiness. With me quality services are guaranteed.</p>
            </div>
            <div className="online-booking">
                <img src={"/images/Screenshot 2023-11-22 143059.png"} alt="Online booking" width="150px" height="150px" />
                <h3>Online Booking</h3>
                <p>My services are accessible to you at the palm of your hands, book with me today.</p>
            </div>
          </div>
          <div className="My-services">
            <div className="image">
              <div className="photography-img">
                <img src={"/images/Screenshot 2024-05-03 121917.png"} alt="" width="200px" height="200px" />
              </div>
              <div className="overlay"></div>
              <div className="service-description">
                <h3>Web design</h3>
                <hr />
                <p>Connect up with me for amazing website designs.</p>
              </div>
            </div>
            <div className="image">
              <div className="photography-img">
                <img src={"/images/459-background.png"} alt="Web design" width="200px" height="200px" />
                <div className="overlay"></div>
              </div>
              <div className="service-description">
                <h3>Videography</h3>
                <hr />
                <p>Editing feels almost like sculpting or a form of continuing with writing process.</p>
              </div>
            </div>
            <div className="image">
              <div className="photography-img">
                <img src={"/images/istockphoto-182428014-1024x1024.jpg"} alt="Music lessons" width="200px" height="200px" />
                <div className="overlay"></div>
              </div>
              <div className="service-description">
                <h3>Music lessons</h3>
                <hr />
                <p>Music is nourishment, and a comforting elixir.</p>
              </div>
            </div>
            <div className="image">
              <div className="photography-img">
                <img src={"/images/tommao-wang-hbkdjPI9594-unsplash.jpg"} alt="Photography" width="200px" height="200px" />
              </div>
              <div className="overlay"></div>
              <div className="service-description">
                <h3>Photography</h3>
                <hr />
                <p>I don't just capture the moment, i capture the feeling.</p>
              </div>
            </div>
            <div className="image">
              <div className="photography-img">
                <img src={"/images/Screenshot 2023-11-23 222732.png"} alt="Graphic design" width="200px" height="200px" />
              </div>
              <div className="overlay"></div>
              <div className="service-description">
                <h3>Graphic Design</h3>
                <hr />
                <p>There are three responses to a pieces of design-yes, no and WOW!	. Wow is the one i aim for.</p>
              </div>
            </div>
          </div>
        </div>
	    </section>
    </>
  )
}

export default Services;