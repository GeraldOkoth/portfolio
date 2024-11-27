let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// // let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slidesTest = document.getElementsByClassName("test");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slidesTest[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slidesTest.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     slidesTest[i].className = slidesTest[i].className.replace(" active", "");
//   }
//   slidesTest[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }


// let x = document.getElementById("more-testimonals");
// let y = document.getElementById('demo');

//     x.addEventListener("mouseover", displayText);
//     x.addEventListener("mouseout", hideText);

// function displayText(){
//     document.getElementById('demo').innerHTML = "Click this button to view more testimonial in the testimonial tab in hobby page.";
// }

// function hideText(){
//   document.getElementById('demo').style.visibility = "hidden";
// }
// document.addEventListener('DOMContentLoaded', function() {
//     const nav = document.getElementById('menuLinks');
//     const links = nav.getElementsByTagName('a');
    
//     for (let i = 0; i < links.length; i++) {
//       links[i].addEventListener('click', function() {
//         // Remove the active class from all links
//         for (let j = 0; j < links.length; j++) {
//           links[j].classList.remove('active');
//         }
//         // Add the active class to the clicked link
//         this.classList.add('active');
//       });
//     }
//   });

