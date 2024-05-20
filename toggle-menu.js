// Function to toggle the menu open and close
function toggleMenu() {
    var menu = document.getElementById("menuLinks");
    var hamburgerOpen = document.getElementById("hamburgerOpen");
    var hamburgerClose = document.getElementById("hamburgerClose");

    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        menu.classList.add("hide");
        setTimeout(() => { menu.style.display = "none"; }, 300); // Match the transition duration
        hamburgerOpen.style.visibility = "visible";
        hamburgerClose.style.visibility = "hidden";
    } else {
        menu.classList.remove("hide");
        menu.style.display = "block"; // Ensure display is set before adding the show class
        setTimeout(() => { menu.classList.add("show"); }, 10); // Small delay to trigger the transition
        hamburgerOpen.style.visibility = "hidden";
        hamburgerClose.style.visibility = "visible";
    }
}	
// function changeTheme(){
// 	javascript: void(document.body.style.backgroundColor = 'red')
// }