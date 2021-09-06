gsap.to(".top", {
	opacity: 1
})

gsap.to(".bot", {
	opacity: 1
})

gsap.to(".selecta", {
	opacity: 1
})



gsap.fromTo(".top", {
	y: "-100vh"
}, {
	y: 0,
	duration: 2.25,
	ease: Expo.easeOut
})

gsap.fromTo(".bot", {
	y: "100vh"
}, {
	y: 0,
	duration: 2,
	ease: Expo.easeOut
})

gsap.fromTo(".selecta", {
	x: "-100vw"
}, {
	x: 0,
	duration: 2,
	delay: 1.6,
	ease: Back.easeOut.config(1)
})

let topSel = document.querySelector(".topSelection");
let botSel = document.querySelector(".botSelection");
let car = document.getElementById("car");
let face = document.getElementById("face");

topSel.addEventListener('mouseenter', () => {
	car.style.transform = "scale(1.2)";
})
topSel.addEventListener('mouseleave', () => {
	car.style.transform = "scale(1)";
})

botSel.addEventListener('mouseenter', () => {
	face.style.transform = "scale(1.2)";
})
botSel.addEventListener('mouseleave', () => {
	face.style.transform = "scale(1)";
})

topSel.addEventListener('click', () => {
	
	gsap.to(".selecta", {
		x: "100vw",
		duration: 2,
		ease: Back.easeIn.config(1)
	})
	gsap.to(".bot", {
		y: "100vh",
		duration: 2,
		ease: Power4.easeIn,
		delay: 2
	})
	gsap.to(".top", {
		y: "-100vh",
		duration: 2,
		ease: Power4.easeIn,
		delay: 2,

		onComplete: function() {
			location.href = "projectOne/index.html"
		}
	})
})

botSel.addEventListener('click', () => {
	gsap.to(".selecta", {
		x: "100vw",
		duration: 2,
		ease: Back.easeIn.config(1)
	})
	gsap.to(".bot", {
		y: "100vh",
		duration: 2,
		ease: Power4.easeIn,
		delay: 2
	})
	gsap.to(".top", {
		y: "-100vh",
		duration: 2,
		ease: Power4.easeIn,
		delay: 2,

		onComplete: function() {
			location.href = "projectTwo/index.html"
		}
	})
})

