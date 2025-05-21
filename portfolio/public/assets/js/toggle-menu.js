// Function to toggle the menu open and close
let menu = document.getElementById("menuLinks");
let hamburgerOpenClose = document.getElementByClassName("humburger-btn");

function myFunction(x) {
    x.classList.toggle("change");
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        menu.classList.add("hide");
        setTimeout(() => { menu.style.width = "0px"; }, 300); // Match the transition duration
        hamburgerOpenClose.style.visibility = "visible";
        hamburgerOpenClose.style.visibility = "hidden";
    } else {
        menu.classList.remove("hide");
        menu.style.width = "250px"; // Ensure display is set before adding the show class
        setTimeout(() => { menu.classList.add("show"); }, 10); // Small delay to trigger the transition
        hamburgerOpenClose.style.visibility = "hidden";
        hamburgerOpenClose.style.visibility = "visible";
    }
}