const timeText = document.querySelector("#timeText");
const svg = document.querySelector("svg");

const settingsBtn = document.querySelector("#settingsBtn");
const closeBtn = document.querySelector("#close");
const secHandColPicker = document.querySelector("#secHandColPicker");
const minHandColPicker = document.querySelector("#minHandColPicker");
const hourHandColPicker = document.querySelector("#hourHandColPicker");
const clockRingColPicker = document.querySelector("#clockRingColPicker");
const clockBackingColPicker = document.querySelector("#clockBackingColPicker");
const clockNumbersColPicker = document.querySelector("#clockNumbersColPicker");
const applyBtn = document.querySelector("#applyBtn");

const clockRing = document.querySelector("#clockRing");
const clockBacking = document.querySelector("#clockBacking");

const secHand = document.querySelector("#secondH");
const minHand = document.querySelector("#minuteH");
const hourHand = document.querySelector("#hourH");

const clockNumbers = document.querySelectorAll(".clockNumber")

const formatBall = document.querySelector(".formatSwitchBall")

console.log(clockNumbers);

gsap.set(".settingsPanel", {
	scaleX: 0
})

let format12hr = true;

function getTime() {

	// Grab date object
	let time = new Date

	// Split date object into individual units (HH:MM:SS)
	let hour = time.getHours()
	let min = time.getMinutes()
	let sec = time.getSeconds()

	// If seconds past the minute are < 10. Add a zero to the beginning. (aesthetics)
	let secStr;
	if (sec < 10) {
		secStr = `0${sec}`
	} else {
		secStr = sec;
	}

	// If minutes past the hour are < 10. Add a zero to the beginning. (aesthetics)
	let minStr;
	if (min < 10) {
		minStr = `0${min}`
	} else {
		minStr = min;
	}

	// If the user selects 12Hr format then do this stuff
	if (format12hr) {
		// Determining AM or PM before we bastardize the hour variable.
		let amOrPm = "AM";

		if (hour > 12) {
			amOrPm = "PM"
		}

		// Need time in 12 hour format since we are displaying it on a 12 hour clock
		if (hour > 12) {
			strHour = (hour - 12);
		}

		// String template for display on hover
		let timeTextStr = `${strHour}:${minStr}:${secStr}<span>${amOrPm}<span>`
		timeText.innerHTML = timeTextStr;
	} else {
		let timeTextStr = `${hour}:${minStr}:${secStr}`
		timeText.innerHTML = timeTextStr;
	}

	/* Converting time to degrees. 
		> Hour = 30deg 
		> Min = 6deg 
		> Sec = 6deg
	*/
	let hourDeg = hour*30;
	let minDeg = min*6;
	let secDeg = sec*6;

	/* minMod is a modulus operation of the current minutes divided by 10. 10 is arbitrary, but equates to how many times the hour hand will move per hour. So 60 mins / 10 = 6 times the hour hand will move per hour. But since we are taking the floor of that result, we actually will on find that this fires 5 times (not 6), which is ideal for our application. We then multiply that by 5 which equates to how many degrees we want the hour hand to move. So over the course of one hour, the hour hand will move 5 times @ 5 degrees each. The next time the hour hand would theoretically move another 5 degrees is when the new hour strikes anyway. */
	let minMod = Math.floor(min / 10) * 5;
	
//* |=======================|
//* |===== Animations ======|
//* |=======================|
	// Moving the hands to position. Basically just using GSAP to set position every second by using setInterval.
	gsap.set("#hourHand", {
		transformOrigin: "bottom",
		rotate: minMod + hourDeg + "deg"
	})

	gsap.set("#minuteHand", {
		transformOrigin: "bottom",
		rotate: minDeg + "deg",
	})


	gsap.set("#secondHand", {
		transformOrigin: "bottom",
		rotate: secDeg + "deg"
	})

//* |============================|
//* |===== Hover Listeners ======|
//* |============================|
	// Mouse Enter SVG
	svg.addEventListener("mouseenter", function() {
		timeText.style.visibility = "visible";
		svg.style.filter = "url('#svgBlur')";
	})
	
	// Mouse Leave SVG
	svg.addEventListener("mouseleave", function() {
		timeText.style.visibility = "hidden"
		svg.style.filter = "none";
	})

	// Mouse Enter timeText
	timeText.addEventListener("mouseenter", function() {
		timeText.style.visibility = "visible"
		svg.style.filter = "url('#svgBlur')";
	})

	
}

// Opening the settings panel
let isPanelHidden = true;

settingsBtn.addEventListener('click', () => {
	
	if (isPanelHidden) {
		gsap.to(".settingsPanel", {
			transformOrigin: "left",
			scaleX: 1,
			duration: 0.5,
			ease: Power2.easeIn
		})

		isPanelHidden = !isPanelHidden;
	} else {
		gsap.to(".settingsPanel", {
			transformOrigin: "left",
			scaleX: 0,
			duration: 0.5,
			ease: Power2.easeIn
		})

		isPanelHidden = !isPanelHidden;
	}
})

// Closing the settings panel
closeBtn.addEventListener('click', () => {
	gsap.to(".settingsPanel", {
			transformOrigin: "left",
			scaleX: 0,
			duration: 0.5,
			ease: Power2.easeIn
		})

		isPanelHidden = !isPanelHidden;
})

let timeswap = false;

// Format switch
formatBall.addEventListener('click', formatTime)

// Apply the settings changes
applyBtn.addEventListener('click', () => {
	secHand.style.stroke = secHandColPicker.value;
	minHand.style.stroke = minHandColPicker.value;
	hourHand.style.stroke = hourHandColPicker.value;
	clockRing.style.fill = clockRingColPicker.value;
	clockBacking.style.fill = clockBackingColPicker.value;
	
	for (i of clockNumbers) {
		i.style.fill = clockNumbersColPicker.value;
	}

	
})

function formatTime() {

	if (format12hr) {
		gsap.to(formatBall, {
			x: 29,
			duration: 0.25,
			ease: Linear.easeNone
		})

		format12hr = !format12hr;
	} else {
		gsap.to(formatBall, {
			x: 0,
			duration: 0.25,
			ease: Linear.easeNone
		})

		format12hr = !format12hr;
	}
}



// Start 'er up!
getTime()
// Keep 'er going!
setInterval(getTime, 1000);
