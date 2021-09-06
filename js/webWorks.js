// ********************
// ***** PAGE TWO *****
// ********************

const backBtn = document.querySelector(".backHome");

// Project Board elements
const selectedProjectHolder = document.querySelector(".selectedProjectHolder");
const selectedProjectTitle = document.querySelector("#selectedProjectTitle");
const closeBtn = document.querySelector(".closeBtn");
const selectedProjectAbout = document.querySelector("#selectedProjectAbout");
const selectedProjectTech = document.querySelector("#selectedProjectTech");
const selectedProjectLink = document.querySelector("#selectedProjectLink");
const slideshowContainer = document.querySelector(".slideshowContainer");

// Slideshow buttons
const prevBtn = document.querySelector(".prevImg");
const nextBtn = document.querySelector(".nextImg");

// Slide counters/object info
let currentProject;
let imgSlideIndex;

// Slide elements
let slideHolder = document.querySelector(".gallerySlide");
let slideImg = document.querySelector("#slideImg");

//* Details for projects

// Apex
let apexProject = {
	title: "Apex Legends Parallax Website",
	about: "The main requirement for this project involved a parallax scrolling effect. The webpage's content transitions depending on how the user is scrolling through the page. I based the theme off of a video game I enjoy playing: \"Apex Legends\".",
	tech: "Developed using HTML, CSS and JavaScript. The project made use of a dedicated JavaScript parallax scrolling library called <a class=\"techLink\" href=\"www.google.ca\">Paroller</a>",
	images: ["./images/apexProjectImages/fullsizeApex.jpg", "./images/apexProjectImages/fullsizeApex2.jpg", "./images/apexProjectImages/fullsizeApex3.jpg", "./images/apexProjectImages/fullsizeApex4.jpg"],
	url: "./projects/apexParallax/index.html"
}

// Astralis
let astralisProject = {
	title: "Team Astralis Website (two page)",
	about: "This project required us to have two pages included in our final product: A home page, and an additional page which corresponded to content from the home page. This project allowed for some creative freedoms; I used this opportunity to experiment with some different techniques in CSS and content creation. Some things I focused more effort on were <ul><li>uniquely shaped headings (CSS clip-path & ::after selctor)</li><li>Custom content creation (Photoshop & Illustrator)</li></ul>",
	tech: "Developed using HTML, CSS and JavaScript. The project made use of a dedicated JavaScript gallery library called <a class=\"techLink\" href=\"www.google.ca\">LightBox</a>",
	images: ["./images/astralisProjectImages/fullsizeAstralis.jpg", "./images/astralisProjectImages/fullsizeAstralis2.jpg", "./images/astralisProjectImages/fullsizeAstralis3.jpg", "./images/astralisProjectImages/fullsizeAstralis4.jpg", "./images/astralisProjectImages/fullsizeAstralis5.jpg"],
	url: "./projects/astralisProject/index.html"
}

// CSGO Responsive
let csgoProject = {
	title: "CS:GO Responsive Webpage",
	about: "The focus of this project was responsive web design. The webpage was designed for four different viewports including: mobile, tablet, desktop and large desktop. One area I focused a lot of effort was on the navigable menus for the weapons and maps.",
	tech: "Developed using HTML, CSS and JavaScript. The navigable menus and mobile menu were made entirely with vanilla JavaScript",
	images: ["./images/csgoProjectImages/fullsizeCSGO.jpg", "./images/csgoProjectImages/fullsizeCSGO2.jpg", "./images/csgoProjectImages/fullsizeCSGO3.jpg", "./images/csgoProjectImages/fullsizeCSGO4.jpg", "./images/csgoProjectImages/fullsizeCSGO5.jpg"],
	url: "./projects/responsiveCSGO/index.html"
}

// Port Hope Fall Fair Brand Book
let brandBookProject = {
	title: "Port Hope Fall Fair: Brand Book",
	about: "A brand book is a series of rules that a designer must follow when creating materials for a business. This brand book is a complete ruleset developed for The Port Hope Fall Fair. Some of the contents of the book include: <ul><li>Logo (rules, mis/uses, positioning)</li><li>Colour Palette</li><li>Type Selection</li></ul>",
	tech: "Assets developed using Adobe Photoshop and Adobe Illustrator. Project assembled with Illustrator.",
	images: ["./images/phffbbProjectImages/fullsizePHFFBB.jpg", "./images/phffbbProjectImages/fullsizePHFFBB2.jpg", "./images/phffbbProjectImages/fullsizePHFFBB3.jpg", "./images/phffbbProjectImages/fullsizePHFFBB4.jpg", "./images/phffbbProjectImages/fullsizePHFFBB5.jpg", "./images/phffbbProjectImages/fullsizePHFFBB6.jpg", "./images/phffbbProjectImages/fullsizePHFFBB7.jpg"],
	url: "./projects/PHFF-Brandbook/PHFFBrandbook.pdf"
}

// Port Hope Fall Fair Website
let fairWebProject = {
	title: "Port Hope Fall Fair: Website",
	about: "Using the rules set forth in the brand book, a website was developed for the Port Hope Fall Fair that met the stylistic requirements within said brand book. This website was developed for a desktop viewport only. ",
	tech: "Assets developed using Adobe Photoshop and Adobe Illustrator. Website developed using HTML, CSS  and JavaScript. The project made use of two external JavaScript frameworks. For the hero image slider <a class=\"techLink\" href=\"www.google.ca\">Splide.js</a> was used. And for the gallery, <a class=\"techLink\" href=\"www.google.ca\">LightBox</a> was used.",
	images: ["./images/phffWebsiteProjectImages/fullsizePHFFWebsite.jpg", "./images/phffWebsiteProjectImages/fullsizePHFFWebsite2.jpg", "./images/phffWebsiteProjectImages/fullsizePHFFWebsite3.jpg", "./images/phffWebsiteProjectImages/fullsizePHFFWebsite4.jpg"],
	url: "./projects/PHFF-website/index.html"
}

// Animated Clock Project
let animatedClockProject = {
	title: "Customizable Clock App",
	about: "This project is a cleanly designed, analog clock with many customizable options. When hovering on the clock, a digital display is given. The ability to choose between 12-HR or 24-HR has been implemented.",
	tech: "SVG assets (clock parts) designed using Adobe Illustrator. Website developed using HTML, CSS  and JavaScript. The project made use of a dedicated JavaScript animation library called <a class=\"techLink\" href=\"www.google.ca\">GSAP3</a> to adjust the hands of the clock. The clock runs using the JavaScript Date object.",
	images: ["./images/animatedClockProjectImages/fullsizeAnimClock.jpg", "./images/animatedClockProjectImages/fullsizeAnimClock2.jpg", "./images/animatedClockProjectImages/fullsizeAnimClock3.jpg", "./images/animatedClockProjectImages/fullsizeAnimClock4.jpg", "./images/animatedClockProjectImages/fullsizeAnimClock5.jpg"],
	url: "./projects/animatedRealtimeClock/index.html"
}

// Animated SVG Project(One)
let animationP1 = {
	title: "Hard-coded SVG Scrolling Animation",
	about: "One restriction of this project was that all SVG element had to be created by hand, meaning no external software could be used to generate SVG code. On top of this, all animations had to be implemented using CSS only, no external animation libraries were allowed. I attempted to achieve a parallax effect in my animation sequence. From the POV of a moving car on a highway, you (the viewer) see many different objects moving past your view. Some are closer to your viewpoint and some are farther away meaning the speed at which they appear to \"scroll\" across your screen will need to vary to help achieve the parallax effect.",
	tech: "This project was developed using HTML, CSS, CSS animations and SVG elements implemented in the HTML. An updated version of the project uses GSAP to implement some transitions when going back and forth between pages.",
	images: ["./images/animationP1Images/fullsizeAnimP1.jpg"],
	url: "./projects/Animations/index.html"
}

// Animated AI created SVG Project(Two)
let animationP2 = {
	title: "Animated Emojis",
	about: "This project involved creating 12 animated SVG assets. The first 8 had to be Emojis showing a distinct expression. The last 4 were to be a hobby or interest. My four \"interest emojis\" were: <ul><li>CS:GO C4 bomb plant</li><li>CS:GO P250 Pistol firing</li><li>Programming</li><li>Circuit Racing</li></ul>",
	tech: "SVG assets were developed using Adobe Illustrator and their SVG code was taken and implemented in the HTML design. Website developed using HTML, CSS  and JavaScript. The project made use of a dedicated JavaScript animation library called <a class=\"techLink\" href=\"www.google.ca\">GSAP 3</a> to achieve the animations on all 12 emojis.",
	images: ["./images/animationP2Images/fullsizeAnimP2.jpg"],
	url: "./projects/Animations/index.html"
}

// Ongoing RPG-Type Game
let gameProject = {
	title: "RPG Browser Game",
	about: "Games have always had a special place in my heart and creating them has always been a goal of mine. The game is currently in its infancy and likely wont ever be finished, but has allowed me to explore many concepts like OOP, and practice creating modular, efficient and reusable code.",
	tech: "Developed using HTML, CSS and JS. The game is drawn using a grid system implemented via CSS flexbox. The game \"maps\" are an array of digits corressponding to a certain tile colour. Due to the size of the map, (>500 grid squares), creating new maps was going to be a tedious effort, so I had to create an external map editor which allows you to draw the map quickly and generate the array of digits for you. The \"player\" is using JS Classes to function, and using inheritance, I was able to use the player class for the enemies. ",
	images: ["./images/gameProjectImages/fullsizeGame.jpg", "./images/gameProjectImages/fullsizeGame2.jpg", "./images/gameProjectImages/fullsizeGame3.jpg", "./images/gameProjectImages/fullsizeGame4.jpg"],
	url: "./projects/swordAndStaff/index.html"
}

// Animated AI created SVG Project(Two)
let nascarProject = {
	title: "Animated Emojis",
	about: "This project involved creating 12 animated SVG assets. The first 8 had to be Emojis showing a distinct expression. The last 4 were to be a hobby or interest. My four \"interest emojis\" were: <ul><li>CS:GO C4 bomb plant</li><li>CS:GO P250 Pistol firing</li><li>Programming</li><li>Circuit Racing</li></ul>",
	tech: "SVG assets were developed using Adobe Illustrator and their SVG code was taken and implemented in the HTML design. Website developed using HTML, CSS  and JavaScript. The project made use of a dedicated JavaScript animation library called <a class=\"techLink\" href=\"www.google.ca\">GSAP 3</a> to achieve the animations on all 12 emojis.",
	images: ["./images/nascarProjectImages/fullsizeNascar.jpg", "./images/nascarProjectImages/fullsizeNascar2.jpg"],
	url: "./projects/liveNascar/index.html"
}

// Array of all the project objects
let allProjects = [apexProject, astralisProject, csgoProject, brandBookProject, fairWebProject, animatedClockProject, animationP1, animationP2, gameProject, nascarProject]

// Array of all the preview images
let previewImgs = document.querySelectorAll(".previewImg")

// Button to close the project overlay
closeBtn.addEventListener('click', closeProject);

// Closes the project overlay
function closeProject() {
	gsap.to(selectedProjectHolder, {
		opacity: 0,
		duration: 0.25,
		onComplete: function() {
			selectedProjectHolder.style.display = "none";
		}
	})
}

// Adds click listener to all preview images
for (i of previewImgs) {
	i.addEventListener('click', grabProject)
}

function grabProject(event) {
	currentProject = eval(event.target.classList[1])

	// Show the overlay
	selectedProjectHolder.style.display = "block";
	gsap.fromTo(selectedProjectHolder, {
		opacity: 1,
		y: "100vh"
	}, {
		y: 0,
		duration: 0.25,
		ease: Power4.easeIn
	})
	
	// Set the info in the project overlay
	selectedProjectTitle.innerHTML = currentProject.title;
	selectedProjectAbout.innerHTML = currentProject.about;
	selectedProjectTech.innerHTML = currentProject.tech;
	selectedProjectLink.href = currentProject.url;

	// Create the gallery holder
	createGallery()
}

function createGallery() {
	slideImg.src = currentProject.images[0];
	imgSlideIndex = 1;
}

prevBtn.addEventListener('click', prevImgSlide);
nextBtn.addEventListener('click', nextImgSlide);

function prevImgSlide() {

	if (imgSlideIndex == 1) {
		imgSlideIndex = currentProject.images.length;
	} else {
		imgSlideIndex -= 1;
	}

	slideImg.src = currentProject.images[imgSlideIndex-1]
}

function nextImgSlide() {

	if (imgSlideIndex == currentProject.images.length) {
		imgSlideIndex = 1
	} else {
		imgSlideIndex += 1;
	}

	slideImg.src = currentProject.images[imgSlideIndex-1]
}

backBtn.addEventListener('click', () => {
	goBackTL = new gsap.timeline()

	goBackTL.to(backBtn, {
		x: "-60px",
		y: "-60px",
		duration: 0.5,
		ease: Power2.easeIn
	}, 0)

	goBackTL.to(webWorks, {
		x: "-50vw",
		duration: 0.6,
		ease: Power2.easeIn
	}, 0)

	goBackTL.to(designWorks, {
		x: "50vw",
		duration: 0.6,
		ease: Power2.easeIn
	}, 0.3)

	goBackTL.to(animationWorks, {
		x: "-50vw",
		duration: 0.6,
		ease: Power2.easeIn
	}, 0.6)

	goBackTL.to(otherWorks, {
		x: "50vw",
		duration: 0.6,
		ease: Power2.easeIn,
	}, 0.9)

	goBackTL.to(".worksMain", {
		background: "linear-gradient(180deg, rgb(20, 30, 48) 0%, rgb(36, 59, 85) 100%)",
		duration: 1,
		ease: Power4.easeIn,
		onComplete: function() {
			location.href = "./index.html"
		}
	}, 1)
})



// Animations for the 4 seperate content areas
const webWorks = document.querySelector(".webWorks")
const designWorks = document.querySelector(".designWorks")
const animationWorks = document.querySelector(".animationWorks")
const otherWorks = document.querySelector(".otherWorks")

// function webWorksArrows() {
// 	webWorksTL = new gsap.timeline({repeat: -1, repeatDelay: 2})

// 	webWorksTL.to("#leftArrowWeb", {
// 		x: -5,
// 		duration: 0.5,
// 		ease: Power2.easeIn
// 	}, 0)

// 	webWorksTL.to("#leftArrowWeb", {
// 		x: 0,
// 		duration: 0.5,
// 		ease: Power2.easeOut
// 	}, 0.5)

// 	webWorksTL.to("#rightArrowWeb", {
// 		x: 5,
// 		duration: 0.5,
// 		ease: Power2.easeIn
// 	}, 0)

// 	webWorksTL.to("#rightArrowWeb", {
// 		x: 0,
// 		duration: 0.5,
// 		ease: Power2.easeOut
// 	}, 0.5)

// 	webWorksTL.play()
// 	webWorks.removeEventListener('mouseenter', webWorksArrows)
// }
// function stopWebArrows() {
// 	webWorksTL.pause()
// 	webWorks.addEventListener('mouseenter', webWorksArrows)
// }
// webWorks.addEventListener('mouseenter', webWorksArrows)
// webWorks.addEventListener('mouseleave', stopWebArrows)


// function designWorksArrows() {
// 	designWorksTL = new gsap.timeline({repeat: -1, repeatDelay: 2})

// 	designWorksTL.to("#leftArrowDesign", {
// 		x: -5,
// 		duration: 0.5,
// 		ease: Power2.easeIn
// 	}, 0)

// 	designWorksTL.to("#leftArrowDesign", {
// 		x: 0,
// 		duration: 0.5,
// 		ease: Power2.easeOut
// 	}, 0.5)

// 	designWorksTL.to("#rightArrowDesign", {
// 		x: 5,
// 		duration: 0.5,
// 		ease: Power2.easeIn
// 	}, 0)

// 	designWorksTL.to("#rightArrowDesign", {
// 		x: 0,
// 		duration: 0.5,
// 		ease: Power2.easeOut
// 	}, 0.5)

// 	designWorksTL.play()
// 	designWorks.removeEventListener('mouseenter', designWorksArrows)
// }
// function stopDesignArrows() {
// 	designWorksTL.pause()
// 	designWorks.addEventListener('mouseenter', designWorksArrows)
// }
// designWorks.addEventListener('mouseenter', designWorksArrows)
// designWorks.addEventListener('mouseleave', stopDesignArrows)


// function animationWorksArrows() {
// 	animationWorksTL = new gsap.timeline({repeat: -1, repeatDelay: 2})

// 	animationWorksTL.to("#leftArrowAnimation", {
// 		x: -5,
// 		duration: 0.5,
// 		ease: Power2.easeIn
// 	}, 0)

// 	animationWorksTL.to("#leftArrowAnimation", {
// 		x: 0,
// 		duration: 0.5,
// 		ease: Power2.easeOut
// 	}, 0.5)

// 	animationWorksTL.to("#rightArrowAnimation", {
// 		x: 5,
// 		duration: 0.5,
// 		ease: Power2.easeIn
// 	}, 0)

// 	animationWorksTL.to("#rightArrowAnimation", {
// 		x: 0,
// 		duration: 0.5,
// 		ease: Power2.easeOut
// 	}, 0.5)

// 	animationWorksTL.play()
// 	animationWorks.removeEventListener('mouseenter', animationWorksArrows)
// }
// function stopAnimationArrows() {
// 	animationWorksTL.pause()
// 	animationWorks.addEventListener('mouseenter', animationWorksArrows)
// }
// animationWorks.addEventListener('mouseenter', animationWorksArrows)
// animationWorks.addEventListener('mouseleave', stopAnimationArrows)


// function photoWorksArrows() {
// 	photoWorksTL = new gsap.timeline({repeat: -1, repeatDelay: 2})

// 	photoWorksTL.to("#leftArrowPhoto", {
// 		x: -5,
// 		duration: 0.5,
// 		ease: Power2.easeIn
// 	}, 0)

// 	photoWorksTL.to("#leftArrowPhoto", {
// 		x: 0,
// 		duration: 0.5,
// 		ease: Power2.easeOut
// 	}, 0.5)

// 	photoWorksTL.to("#rightArrowPhoto", {
// 		x: 5,
// 		duration: 0.5,
// 		ease: Power2.easeIn
// 	}, 0)

// 	photoWorksTL.to("#rightArrowPhoto", {
// 		x: 0,
// 		duration: 0.5,
// 		ease: Power2.easeOut
// 	}, 0.5)

// 	photoWorksTL.play()
// 	photoWorks.removeEventListener('mouseenter', photoWorksArrows)
// }
// function stopPhotoArrows() {
// 	photoWorksTL.pause()
// 	photoWorks.addEventListener('mouseenter', photoWorksArrows)
// }
// photoWorks.addEventListener('mouseenter', photoWorksArrows)
// photoWorks.addEventListener('mouseleave', stopPhotoArrows)


// Animations to fire on load
function onloadAnimations() {
	gsap.set(webWorks, {
		opacity: 1
	})

	gsap.set(designWorks, {
		opacity: 1
	})

	gsap.set(animationWorks, {
		opacity: 1
	})

	gsap.set(otherWorks, {
		opacity: 1
	})

	gsap.set(backBtn, {
		opacity: 1
	})

	worksPageTL = new gsap.timeline({delay: 0.5});

	worksPageTL.fromTo(webWorks, {
		transformOrigin: "top left",
		x: "-50vw",
		y: "-50vh"
	}, {
		x: 0,
		y:0,
		duration: 1.3,
		ease: Power4.easeOut
	}, 0.5)
	worksPageTL.fromTo(designWorks, {
		transformOrigin: "top left",
		x: "50vw",
		y: "-50vh"
	}, {
		x: 0,
		y:0,
		duration: 1.8,
		ease: Power4.easeOut
	}, 0)
	worksPageTL.fromTo(animationWorks, {
		transformOrigin: "top left",
		x: "-50vw",
		y: "50vh"
	}, {
		x: 0,
		y:0,
		duration: 1.8,
		ease: Power4.easeOut
	}, 0)
	worksPageTL.fromTo(otherWorks, {
		transformOrigin: "top left",
		x: "50vw",
		y: "50vh"
	}, {
		x: 0,
		y:0,
		duration: 1.3,
		ease: Power4.easeOut
	}, 0.5)
	worksPageTL.fromTo(backBtn, {
		x: -60,
		y: -60
	}, {
		x: 0,
		y:0,
		duration: 0.25,
		ease: Power4.easeOut
	}, 1.3)
}

// When page loads: fire away, fire away
window.onload = function() {
	onloadAnimations()
}