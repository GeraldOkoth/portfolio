let menu: HTMLElement | null = document.getElementById("menuLinks");
let hamburgerOpen: HTMLElement | null = document.getElementById("hamburgerOpen");
let hamburgerClose: HTMLElement | null = document.getElementById("hamburgerClose");

function toggleMenu(): void {
    if (menu?.classList.contains("show")) {
        menu.classList.remove("show");
        menu.classList.add("hide");
        setTimeout(() => {
            if (menu) menu.style.height = "";
        }, 300);
        if (hamburgerOpen) hamburgerOpen.style.visibility = "visible";
        if (hamburgerClose) hamburgerClose.style.visibility = "hidden";
    } else {
        if (menu) {
            menu.classList.remove("hide");
            menu.style.height = "100vh"; // Ensure display is set before adding the show class
            setTimeout(() => { menu?.classList.add("show"); }, 10); // Small delay to trigger the transition
        }
        if (hamburgerOpen) hamburgerOpen.style.visibility = "hidden";
        if (hamburgerClose) hamburgerClose.style.visibility = "visible";
    }
}
