import React from 'react';
import './testimonials.css';

function testimonials() {
  return (
    <>
      <section className="Testimonials" id="testimonials">
        <div className="testimonies">
          <h2 className='text-center'>What our customers say</h2>
          <div id='myCorousel' className="carousel slide text-center" data-ride="carousel">
              <ol className='carousel-indicators'>
                  <li data-target="#myCorousel" data-slide-to="0"></li>
                  <li data-target="#myCorousel" data-slide-to="1"></li>
                  <li data-target="#myCorousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner" role='listbox'>
                <div className="item test active">
                  <div className="user">
                    <img src={"/images/Screenshot 2024-12-03 105847.png"} alt="Twitter user profile pic" />
                    <div className="user-info">
                      <h5>Stephen Matyre</h5><i className="fa-brands fa-twitter"></i>
                      <small>@Matyre_steve</small>
                    </div>
                  </div>
                  <p>I have been very happy with the customer service and the attention to detail offered. I look forwar for more services.</p>
                </div>
                <div className="item test">
                  <div className="user">
                    <img src={"/images/Screenshot 2024-12-03 105932.png"} alt="Twitter user profile pic" />
                    <div className="user-info">
                      <h5>L. Wawira</h5><i className="fa-brands fa-twitter"></i>
                      <small>@Wawira</small>
                    </div>
                  </div>
                  <p>It is amazing how his photos capture such detail: they really show off the space and setup. The lighting is absolutely perfect in every single photo. I'm still so amazed by the care and quality of his work.</p>
                </div>
                <div className="item test">
                  <div className="user">
                    <img src={"/images/Screenshot 2024-12-03 110019.png"} alt="Twitter user profile pic" />
                    <div className="user-info">
                      <h5>Anthony Tobias</h5><i className="fa-brands fa-twitter"></i>
                      <small>@Antobias</small>
                    </div>
                  </div>
                  <p>I'm glad I decided to work with you. It's really great how easy your websites are to update and manage. I never have any problem at all. My new site is so much faster and easier to work with than my old site.</p>
                </div>

                <a className='left carousel-control' href="#myCorousel" role='button' data-slide="prev">
                    <span className='glyphicon glyphicon-chevron-left' aria-hidden="true"></span>
                    <span className='sr-only'>Previous</span>
                </a>
                <a className='right carousel-control' href="#myCorousel" role='button' data-slide="next">
                    <span className='glyphicon glyphicon-chevron-right' aria-hidden="true"></span>
                    <span className='sr-only'>Next</span>
                </a>
              </div>
            </div>
          </div>
	    </section>
    </>
  )
}

export default testimonials;