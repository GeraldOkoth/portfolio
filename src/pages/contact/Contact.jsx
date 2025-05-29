import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Contact() {

  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
  }; 
  
  return (
    <>
      <section className="contact" id="contact">
        <header className="contact-header">
          <h2>Get in touch</h2>
          <span><hr /><hr /><hr /></span>
          <p>I would love to respond to your queries. It is always my pleasure serving you. Let's get in touch. <span> :&#41;</span>!</p>
		    </header>
        <div className="contact-section">
          <div className="contact-address">
            <div className="location">
              <i className="fa-solid fa-location-dot"></i>
              <span>Machakos, Kenya</span>
            </div>
            <div className="phone">
              <i className="fa-solid fa-phone"></i>
					    <span>+254790598519</span>
				    </div>
            <div className="email">
              <i className="fa-solid fa-envelope"></i>
              <span>okothgerald449@gmail.com</span>
            </div>
            <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7976.785593850559!2d37.262054699999986!3d-1.531655799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1694436889790!5m2!1sen!2ske" title='Location Map' width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
			    </div>
          <div className="contact-form">
            <form method="post" action="../Php/contact.php" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-name">
                <input type="text" name="firstname" id="firstname" placeholder="First Name" />
              </div>
              <div className="form-contact">
                <input type="email" name="email" id="email" placeholder="someone@gmail.com" />
                <input type="tel" name="number" id="number" placeholder="+254712345678" />
              </div>
            </div>
            <div className="form-message">
              <div className="form-subject">
                <input type="text" name="mesgSubject" id="mesgSubject" placeholder="Subject" />
              </div>
              <textarea name="message" id="message" rows="10" ></textarea>
              <button type="submit" className="submit-button">submit<i className="fa-solid fa-paper-plane"></i></button>
            </div>
            <span id="msg">{message}</span>
            
            </form>
          </div>
		    </div>
	    </section>
    </>
  )
}

export default Contact;