// Function to toggle the menu open and close
let menu = document.getElementById("menuLinks");
let hamburgerOpen = document.getElementById("hamburgerOpen");
// let hamburgerClose = document.getElementById("hamburgerClose");

function toggleMenu() {
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        menu.classList.add("hide");
        setTimeout(() => { menu.style.width = "0px"; }, 300); // Match the transition duration
        hamburgerOpen.style.visibility = "visible";
        // hamburgerClose.style.visibility = "hidden";
    } else {
        menu.classList.remove("hide");
        menu.style.width = "250px"; // Ensure display is set before adding the show class
        setTimeout(() => { menu.classList.add("show"); }, 10); // Small delay to trigger the transition
        hamburgerOpen.style.visibility = "hidden";
        // hamburgerClose.style.visibility = "visible";
    }
}	
// function changeTheme(){
// 	javascript: void(document.body.style.backgroundColor = 'red')
// }