const aboutHolder = document.querySelector(".aboutMeBtnHolder");
const worksHolder = document.querySelector(".worksBtnHolder");
const hero = document.querySelector(".heroText");

const aboutBtn = document.querySelector("#aboutMeBtn");
const worksBtn = document.querySelector("#worksBtn");

const aboutText= document.querySelector("#aboutBtnText");
const worksText= document.querySelector("#worksBtnText");


function onloadAnimations() {

	gsap.fromTo(aboutHolder, {
		y: "40vh",
		opacity: 0
	}, {
		y: 0,
		opacity: 1,
		duration: 1,
		ease: Power3.easeInOut
	})

	gsap.fromTo(worksHolder, {
		y: "-40vh",
		opacity: 0
	}, {
		y: 0,
		opacity: 1,
		duration: 1,
		ease: Power3.easeInOut
	})

	gsap.fromTo(hero, {
		opacity: 0
	}, {
		opacity: 1,
		duration: 1,
		delay: 1,
		ease: Power1.easeIn
	})

}

worksBtn.addEventListener('click', () => {

	clickedWorksTL = new gsap.timeline;

	clickedWorksTL.to("#worksCircle", {
		width: "101px",
		height: "101px",
		transformOrigin: "center",
		duration: 0.5,
		top: "23px",
		ease: Power1.easeOut
	}, 0)
	
	clickedWorksTL.to(worksText, {
		y: -10,
		duration: 0.5
	}, 0)

	clickedWorksTL.to(hero, {
		opacity: 0,
		duration: 0.75,
		ease: Power3.easeOut
	}, 0)

	clickedWorksTL.to(aboutHolder, {
		opacity: 0,
		duration: 0.75,
		ease: Power3.easeOut
	}, 0)

	clickedWorksTL.to("#worksCircle", {
		border: "14px solid #67b389",
		duration: 0.25
	}, 0.75)

	clickedWorksTL.to(worksHolder, {
		top: "-50%",
		duration: 0.75,
		ease: Expo.easeInOut
	}, 1.25)

	clickedWorksTL.to(worksHolder, {
		scale: 100,
		opacity: 0,
		duration: 1,
		ease: Expo.easeInOut
	}, 2)

	clickedWorksTL.to('.homeMain', {
		opacity: 0,
		duration: 1,
		ease: Expo.easeInOut,
		onComplete: function() {
			location.href = "./worksPage.html"
		}
	}, 2)
})

aboutBtn.addEventListener('click', () => {

	clickedAboutTL = new gsap.timeline;

	clickedAboutTL.to("#aboutCircle", {
		width: "101px",
		height: "101px",
		transformOrigin: "center",
		duration: 0.5,
		top: "-12px",
		ease: Power1.easeOut
	}, 0)
	
	clickedAboutTL.to(aboutText, {
		y: 10,
		duration: 0.5
	}, 0)

	clickedAboutTL.to(hero, {
		opacity: 0,
		duration: 0.75,
		ease: Power3.easeOut
	}, 0)

	clickedAboutTL.to(worksHolder, {
		opacity: 0,
		duration: 0.75,
		ease: Power3.easeOut
	}, 0)

	clickedAboutTL.to("#aboutCircle", {
		border: "14px solid #67b389",
		duration: 0.25
	}, 0.75)

	clickedAboutTL.to(aboutHolder, {
		top: "50%",
		duration: 0.75,
		ease: Expo.easeInOut
	}, 1.25)

	clickedAboutTL.to(aboutHolder, {
		scale: 100,
		opacity: 0,
		duration: 1,
		ease: Expo.easeInOut
	}, 2)

	clickedAboutTL.to('.homeMain', {
		opacity: 0,
		duration: 1,
		ease: Expo.easeInOut,
		onComplete: function() {
			location.href = "./aboutPage.html"
		}
	}, 2)

})

window.onload = function () {
	onloadAnimations()
}