import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <>
      <section className="my-footer">
        <div className="footer-links">
          <div className="social-media-links">
            <h3>Social media links</h3>
            <ul>
              <li><a href="https://www.linkedin.com/in/geraldokoth/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i>linkedin</a></li>
					    <li><a href="https://github.com/GeraldOkoth" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i>github</a></li>
					    <li><a href="https://www.youtube.com/@geraldokothKE" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i>youtube</a></li>
					    <li><a href="https://x.com/gerald_okothKE" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i>twitter</a></li>
					    <li><a href="https://www.instagram.com/okothgerald449" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i>instagram</a></li>
					    <li><a href="https://www.facebook.com/gerald.okoth.944/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i>facebook</a></li>            
				    </ul>
          </div>
          <div className="useful-links">
            <h3>useful links</h3>
            <ul>
              <li><a href="null" onClick={(e) => e.preventDefault()}><i className="fa-solid fa-images"></i>Images</a></li>
              <li><a href="https://www.youtube.com/@geraldokothKE"><i className="fa-solid fa-clapperboard"></i>Videos</a></li>
              <li><a href="hobby.html"><i className="fa-solid fa-clapperboard"></i>Hobbies</a></li>
              <li><a href="null" onClick={(e) => e.preventDefault()}><i className="fa-solid fa-blog"></i>Blogs</a></li>
            </ul>
          </div>
          <div className="top">
            <a href="#top"><i className="fa-solid fa-arrow-up"></i> Back to top</a>
          </div>
        </div>
        <hr />
        <div className="footer-txt">
          <p>&copy; {new Date().getFullYear()} All rights reserved. Powered by clean master.</p>
        </div>
	    </section>
    </>
  )
}

export default Footer;