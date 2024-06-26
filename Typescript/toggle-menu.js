var menu = document.getElementById("menuLinks");
var hamburgerOpen = document.getElementById("hamburgerOpen");
var hamburgerClose = document.getElementById("hamburgerClose");
function toggleMenu() {
    if (menu === null || menu === void 0 ? void 0 : menu.classList.contains("show")) {
        menu.classList.remove("show");
        menu.classList.add("hide");
        setTimeout(function () {
            if (menu)
                menu.style.height = "";
        }, 300);
        if (hamburgerOpen)
            hamburgerOpen.style.visibility = "visible";
        if (hamburgerClose)
            hamburgerClose.style.visibility = "hidden";
    }
    else {
        if (menu) {
            menu.classList.remove("hide");
            menu.style.height = "100vh"; // Ensure display is set before adding the show class
            setTimeout(function () { menu === null || menu === void 0 ? void 0 : menu.classList.add("show"); }, 10); // Small delay to trigger the transition
        }
        if (hamburgerOpen)
            hamburgerOpen.style.visibility = "hidden";
        if (hamburgerClose)
            hamburgerClose.style.visibility = "visible";
    }
}
