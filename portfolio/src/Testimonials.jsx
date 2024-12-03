import React from 'react';

function testimonials() {
  return (
    <>
      <section className="Testimonials" id="testimonials">
        <header className="testimonials-header">
          <h2>What they say about me</h2>
          {/* <p>These testimonials show how other people view my services and skills.</p> */}
          <span><hr /><hr /><hr /></span>
		    </header>
        <div className="testimonies">
          <div className="test">
            <div className="user">
              <img src={"/images/Screenshot 2024-12-03 105847.png"} alt="Twitter user profile pic" />
              <div className="user-info">
                <h5>Stephen Matyre</h5><i className="fa-brands fa-twitter"></i>
                <small>@Matyre_steve</small>
					    </div>
				    </div>
            <p>I have been very happy with the customer service and the attention to detail offered. I look forwar for more services.</p>
          </div>
          <div className="test">
            <div className="user">
              <img src={"/images/Screenshot 2024-12-03 105932.png"} alt="Twitter user profile pic" />
              <div className="user-info">
                <h5>L. Wawira</h5><i className="fa-brands fa-twitter"></i>
                <small>@Wawira</small>
              </div>
            </div>
            <p>It is amazing how his photos capture such detail: they really show off the space and setup. The lighting is absolutely perfect in every single photo. I'm still so amazed by the care and quality of his work.</p>
          </div>
          <div className="test">
            <div className="user">
              <img src={"/images/Screenshot 2024-12-03 110019.png"} alt="Twitter user profile pic" />
              <div className="user-info">
                <h5>Anthony Tobias</h5><i className="fa-brands fa-twitter"></i>
                <small>@Antobias</small>
              </div>
            </div>
            <p>I'm glad I decided to work with you. It's really great how easy your websites are to update and manage. I never have any problem at all. My new site is so much faster and easier to work with than my old site.</p>
          </div>
		    </div>
        {/* <div id="more-testimonals">
          <p onmouseout="hideText()" onmouseover="displayText()"><a href="hobby.html">More testimonials</a></p>
          <p id="demo"></p>
        </div>		 */}
	    </section>
    </>
  )
}

export default testimonials;