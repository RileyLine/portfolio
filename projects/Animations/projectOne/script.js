gsap.set("body", {
	opacity: 1
})

gsap.to("body", {
	backgroundColor: "#009B77",
	duration: 2
})

gsap.fromTo("#back", {
	y: "-100vh"
}, {
	y: 0,
	duration: 1.8
})

gsap.fromTo("#painting", {
	y: "100vh",
	opacity: 0
}, {
	y: 0,
	opacity: 1,
	duration: 2,
	ease: Power4.easeOut
})

let back = document.getElementById("back");

back.addEventListener("click", () => {
	gsap.to("#painting", {
		y: "100vh",
		duration: 2,
		ease: Power4.easeIn
	})

	gsap.to("#back", {
		y: "-50vh",
		duration: 2,
		ease: Power4.easeIn

		
	})

	gsap.to("body", {
		backgroundColor: "white",
		duration: 2.1,
		ease: Power4.easeIn,
		
		onComplete: function() {
			location.href = "../index.html"
		}
	})
})