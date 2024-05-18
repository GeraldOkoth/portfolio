	// Function to toggle the menu open and close
	function toggleMenu() {
		var menu = document.getElementById("menuLinks");

		if (menu.style.display === "block") {
			menu.style.display = "none";
			document.getElementById("hamburgerOpen").style.visibility = "visible";
			document.getElementById("hamburgerClose").style.visibility = "hidden";
			
		} else {
			menu.style.display = "block";
			document.getElementById("hamburgerClose").style.display = "block";
			document.getElementById("hamburgerOpen").style.visibility = "hidden";
		}
	}

	// function changeTheme(){
	// 	javascript: void(document.body.style.backgroundColor = 'red')
	// }