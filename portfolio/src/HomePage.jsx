import React from 'react'

function HomePage() {
  const myFunction = () => {
    // Define toggle logic here
  };
  return (
    <>
      <section className="home-page">
      <div className="navbar">
        <div className="logo">
          <a href="index.html"><span id="G">G</span><span id="e">e</span><span id="r">r</span><span id="o">o</span></a>
        </div>
        <nav className="menu">
          <ul id="menuLinks">
            <li><a href="index.html" target="_self" className="active" title="Home"><i className="fa-solid fa-house"></i>Home</a></li>
					  <li><a href="#about" target="_self" title="About me"><i className="fa-solid fa-user"></i>About</a></li>
					  <li><a href="#services" className="onhover" target="_self" title="services"><i className="fa-brands fa-shopify"></i>Services</a>
						{/*  <div className="drop-down-content">
							<a href="">Skills/Experiences</a>
							<a href="">Hobby</a>
						</div>  */}
					  </li>
					  <li><a href="#testimonials" target="_self" title="Testimonials"><i className="fa-solid fa-bookmark"></i>Testimonials</a></li>
					  <li><a href="#contact" target="_self" title="Contact me"><i className="fa-solid fa-phone"></i>Contact</a></li>
				  </ul>
          <div className="humburger-btn" onClick={() => myFunction()}>
            <div className="bar1"></div>
					  <div className="bar2"></div>
					  <div className="bar3"></div>
				  </div>
			  </nav>
		  </div>

		  <div className="hero">
        <div className="hero-image">
          <img src={"/images/profile.jpg"} id="hero-image" alt="my profile pic" width="300px" height="300px" />
        <div className="loader"></div>
        </div>
        <div className="hero-info">
          <div className="hero-text">
            <h1 className="typing-text">Start something that matters</h1>
            <p><span id="orange"> Hi there</span>, <br />i am <span id="blue">Gerald Okoth</span>, a <span id="pink">tech enthusiast, a front-end web developer</span> with passion for creating <span className="orange-1">intuitive</span> and <span className="orange-1">visually</span> appealing user interfaces.
            I am looking forward to collaboration with other tech-enthusiasts on <span className="orange-1">GitHub</span> code spaces.</p>
            <span id="cheers">cheers 🎉</span>
				  </div>
          <div className="hero-btns">
            <a href="#about"><span></span>About Me</a>
            <a href="#null" id="DownloadBtn"><span></span>Download Resume</a>
          </div>
          <div className="wrapper">
            <div className="icon ln">
              <a href="https://www.linkedin.com/in/geraldokoth/"><i className="fab fa-linkedin"></i></a>
              <span>Linkedin</span>
            </div>
            <div className="icon fb">
					    <a href="https://www.facebook.com/gerald.okoth.14"><i className="fab fa-facebook-f"></i></a>
					    <span>Facebook</span>
            </div>
            <div className="icon tw">
						  <a href="https://x.com/gerald_okothKE"><i className="fab fa-twitter"></i></a>
					    <span>Twitter</span>
					  </div>
					  <div className="icon in">
						  <a href="https://www.instagram.com/okothgerald449"><i className="fab fa-instagram"></i></a>
					    <span>Instagram</span>
					  </div>
					  <div className="icon git">
						  <a href="https://github.com/GeraldOkoth"><i className="fab fa-github"></i></a>
					    <span>Github</span>
					  </div>
					  <div className="icon yt">
						  <a href="https://www.youtube.com/@geraldokothKE"><i className="fab fa-youtube"></i></a>
					    <span>YouTube</span>
					  </div>
				  </div>         
			  </div>
		  </div>
      {/* <div className="bubble">
        <img src={"/images/bubble.png"} alt="bubble" />
        <img src={"/images/bubble.png"} alt="bubble" />
        <img src={"/images/bubble.png"} alt="bubble" />
        <img src={"/images/bubble.png"} alt="bubble" />
        <img src={"/images/bubble.png"} alt="bubble" />
        <img src={"/images/bubble.png"} alt="bubble" />
        <img src={"/images/bubble.png"} alt="bubble" />
        <img src={"/images/bubble.png"} alt="bubble" />
        <img src={"/images/bubble.png"} alt="bubble" />
      </div>  */}
	    </section>
    </>
  )
}

export default HomePage;