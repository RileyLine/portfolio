// ********************
// *** DECLARATIONS ***
// ********************

// var for hamburger menu (mobile)
const hamburger = document.getElementById("hamburger");

// var for the hidden navigation menu (for mobile)
const dropNav = document.getElementsByClassName("hiddenNav")

// array of the links held within the mobile menu
const hiddenLinks = document.querySelectorAll(".hiddenLink")

// array of the subcategories of weapons' titlebars (i.e. rifle, sniper, heavy, etc..)
const gunTypes = document.querySelectorAll(".titleBar");

// array of the individual weapons' title
const gunsInfo = document.querySelectorAll(".subtitleBar");

// array of the mapPic holders
const mapPics = document.querySelectorAll(".mapPic");

console.log(mapPics);


// ***********************
// *** EVENT LISTENERS ***
// ***********************

// Setting event listener on the links within the mobile menu (clicking a menu link will then hide the menu)
for (i of hiddenLinks) { i.addEventListener("click", hideMenu) }

// Setting event listener on the hamburger menu
hamburger.addEventListener("click", toggleMenu)

window.addEventListener("resize", resizeHide);

// Setting event listeners on the titlebars (main titlebar and gun subtitlebar)
for (i of gunTypes) {
	i.addEventListener("click", toggleGuns)
}
for (i of gunsInfo) {
	i.addEventListener("click", toggleStats)
}

// Setting event listener for the mapPics
for (i of mapPics) {
	i.addEventListener("click", toggleMapStats)
}

// *********************
// ***** FUNCTIONS *****
// *********************

// Hides the mobile menu
function hideMenu() {
	dropNav[0].style.display = "none";
}

// When resizing from mobile to desktop, checks to see if the menu is being displayed. If yes, hide it.
function resizeHide() {	
	var winWidth = window.innerWidth;	
	
	if (winWidth > 768 && dropNav[0].style.display == "flex"){
		hideMenu();
	}	
}

// Toggles mobile menu open and closed
function toggleMenu(e) {
	var x = e.target.parentNode.parentNode.querySelector(".hiddenNav");

	if (x.style.display === "flex") {
		x.style.display = "none";
	} else {
		x.style.display = "flex";
	}
}

// Toggles the weapon categories menus (SMG, Rifle, Heavy, etc..)
function toggleGuns(e) {
	var x = e.target.parentNode.parentNode.querySelector(".weaponsHolder");

	if (x.style.display === "flex") {
		resetStats(x);
		x.style.display = "none";
	} else {
		x.style.display = "flex";
	}
}

// Toggles the stats (tables) of the individual weapons
function toggleStats() {
	var x = this.parentNode.querySelector(".statsHolder");

	if (x.style.display === "flex") {
		x.style.display = "none";
	} else {
		x.style.display = "flex";
	}
}

// Resets any open stats menus (tables) when closing the main menus
function resetStats(clickedTitle) {
	var activeModules = clickedTitle.querySelectorAll(".statsHolder");

	for (i of activeModules) {
		i.style.display = "none";
	}
}

// Toggles the additional information for the maps
function toggleMapStats() {
	var x = this.parentNode.querySelectorAll(".mapStats")[0];

	highlightActive(x.parentNode.querySelectorAll(".mapTitle")[0]);

	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

// Highlights the map(s) that are currently active (viewing map stats).
function highlightActive(clickedMap) {
	clickedMap.classList.toggle("activeBar");
	clickedMap.parentNode.classList.toggle("activeBorder");
}
