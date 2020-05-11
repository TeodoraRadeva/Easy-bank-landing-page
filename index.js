let navBar = document.getElementById("nav-bar");
let menuButton = document.getElementById("hamburger");
let closebutton = document.getElementById("close");

menuButton.onclick = function() {
	showNavBar();	
	hideMenuButton();
	showCloseButton();
}

function showNavBar() {
	navBar.classList.add("mobile-device");
}

function hideMenuButton() {
	menuButton.style.display = "none";
}

function showCloseButton() {
	closebutton.style.display = "inline-block";
}

closebutton.onclick = function () {
	navBar.classList.remove("mobile-device");
	menuButton.style.display = "inline-block";
	closebutton.style.display = "none";
}
