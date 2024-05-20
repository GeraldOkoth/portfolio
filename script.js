let x = document.getElementById("more-testimonals");
let y = document.getElementById('demo');

    x.addEventListener("mouseover", displayText);
    x.addEventListener("mouseout", hideText);

function displayText(){
    document.getElementById('demo').innerHTML = "Click this button to view more testimonial in the testimonial tab in hobby page.";
}

function hideText(){
  document.getElementById('demo').style.visibility = "hidden";
}
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('menuLinks');
    const links = nav.getElementsByTagName('a');
    
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function() {
        // Remove the active class from all links
        for (let j = 0; j < links.length; j++) {
          links[j].classList.remove('active');
        }
        // Add the active class to the clicked link
        this.classList.add('active');
      });
    }
  });