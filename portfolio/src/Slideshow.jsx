// import React from 'react';
// import { plusSlides, currentSlide } from './public/assets/js/script';

// function Slideshow() {
//   return (
//     <>
//       <section className="slideShow">
//         <div className="gallery">
//           <header className="gallery-header">
//             <h3 className="pictorials">Pictorials</h3>
//             <span><hr /><hr /><hr /></span>
// 			    </header>
//           <hr id="image-gal-hr" />
//           <div className="slideshow-container">
//             <div className="slide fade first-child">
//               <div className="number">1 / 6</div>
//               <img src="/assets/images/1672053154170.jpg" alt="my pic" width="100%" height="400px" />
//               {/* <div className="caption">caption</div> */}
//             </div>
//             <div className="slide fade">
//               <div className="number">2 / 6</div>
//               <img src="/assets/images/IMG_7958 (1).JPG" alt="my pic" width="100%" height="400px" />
//               {/* <div className="caption">caption</div> */}
//             </div>
//             <div className="slide fade">
//               <div className="number">3 / 6</div>
//               <img src="/assets/images/IMG_20230211_134435_930.jpg" alt="my pic" width="100%" height="400px" />
//               {/* <div className="caption">caption</div> */}
//             </div>
//             <div className="slide fade">
//               <div className="number">4 / 6</div>
//               <img src="/assets/images/IMG_20220417_104146_015.jpg" alt="my pic" width="100%" height="400px" />
//               {/* <div className="caption">caption</div> */}
//             </div>
//             <div className="slide fade">
//               <div className="number">5 / 6</div>
//               <img src="/assets/images/IMG_20231210_144325.jpg" alt="my pic" width="100%" height="400px" />
//               {/* <div className="caption">caption</div> */}
//             </div>
//             <div className="slide fade">
//               <div className="number">6 / 6</div>
//               <img src="/assets/images/1672053194398.jpg" alt="my pic" width="100%" height="400px" />
//               {/* <div className="caption">caption</div> */}
//             </div>
	
// 				    <span className="prev" onClick={() => plusSlides(-1)}>&#10094;</span>
// 				    <span className="next" onClick={() => plusSlides(1)}>&#10095;</span>
	
//             <div className="dots">
//               <span className="dot" onClick={() => currentSlide(1)}></span>
//               <span className="dot" onClick={() => currentSlide(2)}></span>
//               <span className="dot" onClick={() => currentSlide(3)}></span>
//               <span className="dot" onClick={() => currentSlide(4)}></span>
//               <span className="dot" onClick={() => currentSlide(5)}></span>
//               <span className="dot" onClick={() => currentSlide(6)}></span>
//             </div>
	
// 			    </div>
// 		    </div>
// 	    </section>
//     </>
//   )
// }

// export default Slideshow;

// import React, { useState } from 'react';
// import image1 from 'assets/images/1672053154170.jpg';
// import image2 from 'assets/images/IMG_7958.jpg';
// import image3 from 'assets/images/IMG_20230211_134435_930.jpg';
// import image4 from 'assets/images/IMG_20220417_104146_015.jpg';
// import image5 from 'assets/images/IMG_20231210_144325.jpg';
// import image6 from 'assets/images/1672053194398.jpg';

// const images = [image1, image2, image3, image4, image5, image6];

// function Slideshow() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <section className="slideShow">
//       <div className="gallery">
//         <header className="gallery-header">
//           <h3 className="pictorials">Pictorials</h3>
//           <span><hr /><hr /><hr /></span>
//         </header>
//         <hr id="image-gal-hr" />

//         <div className="slideshow-container">
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className={`slide fade ${index === currentSlide ? 'active' : ''}`}
//               style={{ display: index === currentSlide ? 'block' : 'none' }}
//             >
//               <div className="number">{index + 1} / {images.length}</div>
//               <img src={image} alt={`Slide ${index + 1}`} width="100%" height="400px" />
//             </div>
//           ))}

//           <span className="prev" onClick={prevSlide}>&#10094;</span>
//           <span className="next" onClick={nextSlide}>&#10095;</span>

//           <div className="dots">
//             {images.map((_, index) => (
//               <span
//                 key={index}
//                 className={`dot ${index === currentSlide ? 'active' : ''}`}
//                 onClick={() => goToSlide(index)}
//               ></span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Slideshow;
