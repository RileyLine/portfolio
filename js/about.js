const backBtn = document.querySelector(".backHome");

backBtn.addEventListener('click', () => {
	gsap.to(".comingSoonHolder", {
		opacity: 0,
		duration: 1
	})

	gsap.to(backBtn, {
		x: "-60px",
		y: "-60px",
		duration: 1
	})

	gsap.to(".aboutMain", {
		background: "linear-gradient(180deg, rgb(20, 30, 48) 0%, rgb(36, 59, 85) 100%)",
		duration: 1,
		ease: Power4.easeIn,
		onComplete: function() {
			location.href = "./index.html"
		}
	}, 0.5)
})



window.onload = function () {
	gsap.set(backBtn, {
		opacity: 1
	})
}
