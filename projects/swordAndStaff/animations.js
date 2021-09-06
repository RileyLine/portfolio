let loadingScreen = document.querySelector(".loadingScreen");

gsap.set("#progress", {
	scaleX: 0
})

gsap.to("#progress", {
	scaleX: 1,
	duration: 3,
	ease: Power1.easeInOut,
	delay: 0.5,
	onComplete: function() {
		loadingScreen.style.display = "none";
	}
})