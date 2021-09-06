gsap.registerPlugin(MotionPathPlugin);

// Page Animations

gsap.to("#back", {
	opacity: 1,
	duration: 0
})
gsap.to(".legend", {
	opacity: 1,
	duration: 0
})
gsap.to(".emotionsModule", {
	opacity: 1,
	duration: 0
})
gsap.to(".interestsModule", {
	opacity: 1,
	duration: 0
})


gsap.fromTo("#back", {
	y: "-100vh"
}, {
	y: 0,
	duration: 2
}, 1.25)

gsap.fromTo(".legend", {
	y: "-100vh"
}, {
	y :0,
	duration: 1.5,
	ease: Power4.easeOut
}, 0)

gsap.fromTo(".emotionsModule", {
	x: "-100vw"
}, {
	x :0,
	duration: 2.5,
	ease: Power4.easeOut
}, 1)

gsap.fromTo(".interestsModule", {
	x: "100vw"
}, {
	x :0,
	duration: 2.5,
	ease: Power4.easeOut
}, 0.9)

let back = document.getElementById("back");

back.addEventListener("click", () => {
	gsap.to("#back", {
		y: "-100vh",
		duration: 1,
		ease: Power4.easeIn
	})

	gsap.to(".legend", {
		y: "-100vh",
		duration: 2,
		ease: Power4.easeIn
	})

	gsap.to(".emotionsModule", {
		x: "-100vw",
		duration: 2,
		ease: Power4.easeIn

		
	})

	gsap.to(".interestsModule", {
		x: "100vw",
		duration: 2,
		ease: Power4.easeIn,
		
		onComplete: function() {
			location.href = "../index.html"
		}
	})
})

//* |====================|
//* |===== C4 Emoji =====|
//* |====================|

function setC4() {

	const numKeys = document.getElementsByClassName("numKeys")
	const hiddenDigits = document.getElementsByClassName("hiddenDigits");

	randomNums = [];

	for (let i = 0; i < 8; i++) {
		rdnNum = Math.floor(Math.random()*11);
		randomNums.push(rdnNum);
	}

	gsap.set(hiddenDigits, {
		opacity:0
	});

	let c4tl = gsap.timeline({repeat: -1, delay: 0.5, repeatDelay: 0.5});

	// Could prob loop this to make it cleaner, but not enough time
	c4tl.to(numKeys[randomNums[0]], {
		fill: "#999999",
		duration: 0.1,
		ease: Linear
	});
	c4tl.to(hiddenDigits[7], {
		duration: 0,
		opacity: 1
	});
	c4tl.to(numKeys[randomNums[0]], {
		fill: "#e8ead3"
	});

	// 2nd num
	c4tl.to(numKeys[randomNums[1]], {
		fill: "#999999",
		duration: 0.1,
		ease: Linear,
	});
	c4tl.to(hiddenDigits[6], {
		duration: 0,
		opacity: 1
	});
	c4tl.to(numKeys[randomNums[1]], {
		fill: "#e8ead3"
	});

	// 3rd num
	c4tl.to(numKeys[randomNums[2]], {
		fill: "#999999",
		duration: 0.1,
		ease: Linear,
	});
	c4tl.to(hiddenDigits[5], {
		duration: 0,
		opacity: 1
	});
	c4tl.to(numKeys[randomNums[2]], {
		fill: "#e8ead3"
	});

	// 4th num
	c4tl.to(numKeys[randomNums[3]], {
		fill: "#999999",
		duration: 0.1,
		ease: Linear,
	});
	c4tl.to(hiddenDigits[4], {
		duration: 0,
		opacity: 1
	});
	c4tl.to(numKeys[randomNums[3]], {
		fill: "#e8ead3"
	});

	// 5th num
	c4tl.to(numKeys[randomNums[4]], {
		fill: "#999999",
		duration: 0.1,
		ease: Linear,
	});
	c4tl.to(hiddenDigits[3], {
		duration: 0,
		opacity: 1
	});
	c4tl.to(numKeys[randomNums[4]], {
		fill: "#e8ead3"
	});

	// 6th num
	c4tl.to(numKeys[randomNums[5]], {
		fill: "#999999",
		duration: 0.1,
		ease: Linear,
	});
	c4tl.to(hiddenDigits[2], {
		duration: 0,
		opacity: 1
	});
	c4tl.to(numKeys[randomNums[5]], {
		fill: "#e8ead3"
	});

	// 7th num
	c4tl.to(numKeys[randomNums[6]], {
		fill: "#999999",
		duration: 0.1,
		ease: Linear,
	});
	c4tl.to(hiddenDigits[1], {
		duration: 0,
		opacity: 1
	});
	c4tl.to(numKeys[randomNums[6]], {
		fill: "#e8ead3"
	});

	// 8th num
	c4tl.to(numKeys[randomNums[7]], {
		fill: "#999999",
		duration: 0.1,
		ease: Linear,
	});
	c4tl.to(hiddenDigits[0], {
		duration: 0,
		opacity: 1
	});
	c4tl.to(numKeys[randomNums[7]], {
		fill: "#e8ead3"
	});

	// Small, red, blinking light once C4 is armed
	c4tl.to("#Light", {
		opacity: 0.5,
		duration: 0.5,
		repeat: 20,
		delay: 0.1
	});

	//* --------------- Event Handling --------------- 
	// Grabbing the svg element and adding two event listeners.
	svgc4 = document.getElementById("svgc4")
	svgc4.addEventListener('click', play); // fires on single click
	svgc4.addEventListener('dblclick', restart); // fires on double click

	c4tl.pause() // Pause animation to start
	let playing = false; // Since animation is paused, playing = false

	// This function toggles the playing state of the animation
	function play() {
		if (playing == false) {
			c4tl.play();
			playing = true;
		} else {
			c4tl.pause();
			playing = false;
		}
	}

	// This functions restarts the animation
	function restart() {
		c4tl.restart();
		playing = true;
	}

}
setC4();

//* |======================|
//* |===== P250 Emoji =====|
//* |======================|
function shootP250() {

	// Define the timelines, including 1 masterTL with two seperate TL's inside
	p250Master = gsap.timeline({repeat: -1, delay: 0.5, repeatDelay: 1});
	p250Shooting = gsap.timeline({repeat:12, delay: 0.5});
	p250Cocking = gsap.timeline({repeat:0});

	p250Shooting.to("#Trigger", {
		transformOrigin: "top right",
		rotate: "-10deg",
		x: 5,
		duration: .05
	});
	
	p250Shooting.to("#P250",{
		transformOrigin: "center",
		rotate: "15deg",
		delay: 0,
		duration: 0.1
	})
	
	p250Shooting.to("#Trigger", {
		transformOrigin: "top right",
		rotate: "0deg",
		x: 0,
		duration: 0.05,
		delay: 0,
	});

	p250Shooting.to("#P250",{
		transformOrigin: "center",
		rotate: "0deg",	
	})

	p250Cocking.to("#Gun_Top", {
		x:20,
		duration: .2,
		delay: 0.5
	});

	p250Cocking.to("#Gun_Top", {
		x:0,
		duration: .25
	});

	p250Master.add(p250Cocking);
	p250Master.add(p250Shooting);

	//* --------------- Event Handling ---------------
	svgP250 = document.getElementById("svgP250");
	svgP250.addEventListener('click', play);
	svgP250.addEventListener('dblclick', restart);

	p250Master.pause()
	let playing = false;

	function play() {
		if (playing == false) {
			p250Master.play();
			playing = true;
		} else {
			p250Master.pause();
			playing = false;
		}
	}

	function restart() {
		p250Master.restart();
		playing = true;
	}
	
}
shootP250();

//* |=========================|
//* |===== Excited Emoji =====|
//* |=========================|
function excitedEmoji() {
	let excitedTL = gsap.timeline({repeat: -1})

	excitedTL.fromTo("#Eyebrows3", {
		y: -3,
	}, {
		y: 10,
		duration: 0.5,
		repeat: -1,
		yoyo: true
	}, 0);

	excitedTL.fromTo("#Mouth3", {
		transformOrigin: "center",
		scale: 1.1,
	}, {
		transformOrigin: "center",
		scale: 1,
		duration: 0.5,
		repeat: -1,
		yoyo: true
	}, 0)

	excitedTL.fromTo("#Eyes3", {
		transformOrigin: "center",
		scale: 1.05,
	}, {
		transformOrigin: "center",
		scale: 1,
		duration: 0.5,
		repeat: -1,
		yoyo: true
	}, 0)

	//* --------------- Event Handling --------------- 
	svgExcited = document.getElementById("svgExcited");
	svgExcited.addEventListener('click', play);
	svgExcited.addEventListener('dblclick', restart);

	excitedTL.pause()
	let playing = false;

	function play() {
		if (playing == false) {
			excitedTL.play();
			playing = true;
		} else {
			excitedTL.pause();
			playing = false;
		}
	}

	function restart() {
		excitedTL.restart();
		playing = true;
	}

}
excitedEmoji();

//* |=========================|
//* |===== Content Emoji =====|
//* |=========================|
function contentEmoji() {
	contentTL = gsap.timeline({repeat: -1, yoyo: true})

	contentTL.fromTo("#Mouth5", {
		transformOrigin: "center",
		scaleX: 0.5
	}, {
		scaleX: 1.5,
		duration: 3
	}, 0)

	contentTL.fromTo("#Eyebrows5", {
		y: -8
	}, {
		y:0,
		duration: 3
	}, 0)

	//* --------------- Event Handling --------------- 
	svgCalm = document.getElementById("svgCalm");
	svgCalm.addEventListener('click', play);
	svgCalm.addEventListener('dblclick', restart);

	contentTL.pause()
	let playing = false;

	function play() {
		if (playing == false) {
			contentTL.play();
			playing = true;
		} else {
			contentTL.pause();
			playing = false;
		}
	}

	function restart() {
		contentTL.restart();
		playing = true;
	}
}
contentEmoji();

//* |=======================|
//* |===== Silly Emoji =====|
//* |=======================|
function sillyEmoji() {

	sillyTL = gsap.timeline({repeat: -1})

	sillyTL.to("#LPupil8", {
		x: 8,
		y: -5,
		duration: 0.5
	}, 0)
	sillyTL.to("#RPupil8", {
		x: -15,
		y: 7,
		duration: 0.5
	}, 0)

	sillyTL.to("#LPupil8", {
		transformOrigin: "105%",
		rotate: "360deg",
		duration: 1,
		ease: Linear.easeNone,
		repeat: -1
	}, 0.5);

	sillyTL.to("#RPupil8", {
		transformOrigin: "105%",
		rotate: "-360deg",
		duration: 1,
		ease: Linear.easeNone,
		repeat: -1
	}, 0.5);
	
	sillyTL.fromTo("#Mouth8", {
		transformOrigin: "center",
		scaleX: 0.93
	}, {
		transformOrigin: "center",
		scaleX: 1.91,
		duration: 0.79,
		ease: Expo.easeOut,
		yoyo: true,
		repeat: -1
	}, 0.5)
	sillyTL.fromTo("#Mouth8", {
		transformOrigin: "center",
		scaleY: 0.67
	}, {
		transformOrigin: "center",
		scaleY: 1.19,
		duration: 0.51,
		ease: Expo.easeOut,
		yoyo: true,
		repeat: -1
	}, 0.5)
	
	//* --------------- Event Handling --------------- 
	svgSilly = document.getElementById("svgSilly");
	svgSilly.addEventListener('click', play);
	svgSilly.addEventListener('dblclick', restart);

	sillyTL.pause()
	let playing = false;

	function play() {
		if (playing == false) {
			sillyTL.play();
			playing = true;
		} else {
			sillyTL.pause();
			playing = false;
		}
	}

	function restart() {
		sillyTL.restart();
		playing = true;
	}
	
}
sillyEmoji()


//* |===========================|
//* |===== Skeptical Emoji =====|
//* |===========================|
function skepticalEmoji(){

	let skepticalTL = gsap.timeline({repeat:-1, delay: 0, repeatDelay: 0.5, yoyo:true})

	skepticalTL.fromTo("#Mouth1", {
		transformOrigin: "center",
		rotate: "0deg",
		x: 0
	}, {
		duration: 1.5,
		rotate: "-15deg",
		x: -3
	}, 0)

	skepticalTL.fromTo("#EyebrowRight1", {
		y: 0,
	}, {
		y: -3,
		duration: 1.5
	}, 0)

	skepticalTL.fromTo("#EyebrowLeft1", {
		y: 0
	}, {
		y: 15,
		duration: 1.5
	}, 0)

	//* --------------- Event Handling --------------- 
	svgSkepta = document.getElementById("svgSkepta");
	svgSkepta.addEventListener('click', play);
	svgSkepta.addEventListener('dblclick', restart);

	skepticalTL.pause()
	let playing = false;

	function play() {
		if (playing == false) {
			skepticalTL.play();
			playing = true;
		} else {
			skepticalTL.pause();
			playing = false;
		}
	}

	function restart() {
		skepticalTL.restart();
		playing = true;
	}
}
skepticalEmoji();

//* |===========================|
//* |===== Horrified Emoji =====|
//* |===========================|
function horrifiedEmoji(){

	let horrifiedTL = gsap.timeline({repeat:-1, delay: 0, repeatDelay: 0.5, yoyo:true})

	horrifiedTL.to("#Mouth2", {
		transformOrigin: "center",
		scaleY: 1.9,
		scaleX: 1.25,
		duration: 1.5
	}, 0)

	horrifiedTL.to("#Eyes2", {
		transformOrigin: "center",
		scaleY: 1.35,
		duration: 1.5,
		y:5
	}, 0)

	horrifiedTL.to("#EyebrowLeft2", {
		y: -7,
		duration: 1.5
	}, 0)

	horrifiedTL.to("#EyebrowRight2", {
		y: -7,
		duration: 1.5
	}, 0)

	//* --------------- Event Handling --------------- 	
	svgHorrified = document.getElementById("svgHorrified");
	svgHorrified.addEventListener('click', play);
	svgHorrified.addEventListener('dblclick', restart);

	horrifiedTL.pause()
	let playing = false;

	function play() {
		if (playing == false) {
			horrifiedTL.play();
			playing = true;
		} else {
			horrifiedTL.pause();
			playing = false;
		}
	}

	function restart() {
		horrifiedTL.restart();
		playing = true;
	}
}
horrifiedEmoji()

//* |=======================|
//* |===== Angry Emoji =====|
//* |=======================|
function angryEmoji() {

	let angryMasterTL = gsap.timeline({repeat: -1})
	let angryTeethTL = gsap.timeline({repeat:-1})
	let angryBrowsTL = gsap.timeline({repeat:0})

	angryTeethTL.fromTo("#teethBottoms", {
		transformOrigin: "bottom",
		scaleY: 0.95,
		scaleX: 1
	}, {
		scaleY: 1.3,
		scaleX: 1.05,
		repeat: -1,
		duration: 0.75,
		yoyo: true
	}, 0)
	angryTeethTL.fromTo("#teethTops", {
		transformOrigin: "top",
		scaleY: 0.95
	}, {
		scaleY: 1.05,
		repeat: -1,
		duration: 0.75,
		yoyo: true
	}, 0)

	angryTeethTL.fromTo("#Mouth4", {
		transformOrigin: "center",
		scaleX: 1.05
	}, {
		scaleX: 0.95,
		repeat: -1,
		duration: 0.75,
		yoyo: true
	}, 0)

	angryBrowsTL.to("#Eyebrows4", {
		y: 9,
		duration: 1.5
	})

	angryMasterTL.add(angryBrowsTL, 0);
	angryMasterTL.add(angryTeethTL, 0);

	//* --------------- Event Handling --------------- 
	svgAngry = document.getElementById("svgAngry");
	svgAngry.addEventListener('click', play);
	svgAngry.addEventListener('dblclick', restart);

	angryMasterTL.pause()
	let playing = false;

	function play() {
		if (playing == false) {
			angryMasterTL.play();
			playing = true;
		} else {
			angryMasterTL.pause();
			playing = false;
		}
	}

	function restart() {
		angryMasterTL.restart();
		playing = true;
	}

}
angryEmoji();

//* |=====================|
//* |===== Ill Emoji =====|
//* |=====================|
function illEmoji() {
	let illTL = gsap.timeline({repeat: -1})

	illTL.fromTo("#Head7", {
		fill: "#9dad82"
	}, {
		fill: "#b3bf9d",
		duration: 2.5,
		repeat: -1,
		yoyo: "true"
	}, 0)

	illTL.fromTo("#Mouth7", {
		transformOrigin: "center",
		scaleX: 0.5
	}, {
		scaleX: 1.5,
		ease: "elastic.out(1, 0.6)",
		duration: 2.5,
		repeat: -1,
		yoyo: true
	}, 0)

	//* --------------- Event Handling --------------- 	
	svgIll = document.getElementById("svgIll");
	svgIll.addEventListener('click', play);
	svgIll.addEventListener('dblclick', restart);

	illTL.pause()
	let playing = false;

	function play() {
		if (playing == false) {
			illTL.play();
			playing = true;
		} else {
			illTL.pause();
			playing = false;
		}
	}

	function restart() {
		illTL.restart();
		playing = true;
	}
}
illEmoji()

//* |=====================|
//* |===== Sad Emoji =====|
//* |=====================|
function sadEmoji() {

	let sadTL = gsap.timeline({repeat: -1})

	sadTL.fromTo("#LPupil6", {
		y: 0
	}, {
		y: -3,
		duration: 0.8,
		repeat: -1,
		yoyo: true,
		repeatDelay: 3
	}, 0)

	sadTL.fromTo("#RPupil6", {
		y: 0
	}, {
		y: -3,
		duration: 0.8,
		repeat: -1,
		yoyo: true,
		repeatDelay: 3
	}, 0)

	sadTL.fromTo("#Mouth6", {
		transformOrigin: "top",
		scaleY: 2
	},{
		scaleY: 1,
		duration: 0.8,
		repeat: -1,
		yoyo: true,
		repeatDelay: 3
	}, 0)

	//* --------------- Event Handling --------------- 	
	svgSad = document.getElementById("svgSad");
	svgSad.addEventListener('click', play);
	svgSad.addEventListener('dblclick', restart);

	sadTL.pause()
	let playing = false;

	function play() {
		if (playing == false) {
			sadTL.play();
			playing = true;
		} else {
			sadTL.pause();
			playing = false;
		}
	}

	function restart() {
		sadTL.restart();
		playing = true;
	}

}
sadEmoji();

//* |========================|
//* |===== Coding Emoji =====|
//* |========================|
function codingEmoji() {
	// Grab all id's that start with "MTextNode"
	screenTextM = document.querySelectorAll('[id^="MTextNode"]')
	// Grab all id's that start with "RTextNode"
	screenTextR = document.querySelectorAll('[id^="RTextNode"]')

	let kbKeys = document.querySelectorAll('[id^="key"]');

	// This is a 2d array which will hold the arrays we made above
	screenTextArr = [];

	// Converting "NodeList" to real array
	screenTextArr[0] = Array.from(screenTextM);
	screenTextArr[1] = Array.from(screenTextR);

	/* Sets initial state of the coding text (hidden). Using scaleX to shrink the text is the best option since when we show the text we can animate it by scaling to 1x, this will give a realistic typing effect */
	gsap.set(screenTextArr[0], {
		transformOrigin: "left",
		scaleX: 0
	})
	gsap.set(screenTextArr[1], {
		transformOrigin: "left",
		scaleX: 0
	})

	gsap.set(kbKeys, {
		fill: "#aaa"
	})

	// 2d array that will hold two arrays of objects
	let codingText = [null, null]

	// This array contains objects of properties for each line of text that appears on the middle screen
	codingText[0] = [
		{name: "#MTextNode1", duration: 1},
		{name: "#MTextNode2", duration: 0.25},
		{name: "#MTextNode3", duration: 0.25},
		{name: "#MTextNode4", duration: 0.75},
		{name: "#MTextNode5", duration: 0.25},
		{name: "#MTextNode6", duration: 0.25},
		{name: "#MTextNode7", duration: 0.5},
		{name: "#MTextNode8", duration: 0.25},
		{name: "#MTextNode9", duration: 0.25},
		{name: "#MTextNode10", duration: 1},
		{name: "#MTextNode11", duration: 0.5},
		{name: "#MTextNode12", duration: 0.75},
		{name: "#MTextNode13", duration: 0.25},
		{name: "#MTextNode14", duration: 0.25},
		{name: "#MTextNode15", duration: 0.75},
		{name: "#MTextNode16", duration: 0.25},
		{name: "#MTextNode17", duration: 0.5},
		{name: "#MTextNode18", duration: 0.25},
		{name: "#MTextNode19", duration: 0.75},
		{name: "#MTextNode20", duration: 0.25},
		{name: "#MTextNode21", duration: 0.25},
		{name: "#MTextNode22", duration: 0.25},
		{name: "#MTextNode23", duration: 1},
		{name: "#MTextNode24", duration: 0.25},
		{name: "#MTextNode25", duration: 0.5},
		{name: "#MTextNode26", duration: 0.75},
		{name: "#MTextNode27", duration: 0.25},
		{name: "#MTextNode28", duration: 0.25},
		{name: "#MTextNode29", duration: 1},
		{name: "#MTextNode30", duration: 0.75},
		{name: "#MTextNode31", duration: 0.25}
	]

	// This array contains objects of properties for each line of text that appears on the right screen
	codingText[1] = [
		{name: "#RTextNode1", duration: 0.25},
		{name: "#RTextNode2", duration: 0.25},
		{name: "#RTextNode3", duration: 0.5},
		{name: "#RTextNode4", duration: 0.75},
		{name: "#RTextNode5", duration: 1},
		{name: "#RTextNode6", duration: 0.25},
		{name: "#RTextNode7", duration: 0.25},
		{name: "#RTextNode8", duration: 0.75},
		{name: "#RTextNode9", duration: 0.25},
		{name: "#RTextNode10", duration: 0.25},
		{name: "#RTextNode11", duration: 1},
		{name: "#RTextNode12", duration: 0.25},
		{name: "#RTextNode13", duration: 0.25},
		{name: "#RTextNode14", duration: 0.25},
		{name: "#RTextNode15", duration: 0.25},
		{name: "#RTextNode16", duration: 0.5},
		{name: "#RTextNode17", duration: 0.75},
		{name: "#RTextNode18", duration: 0.25},
		{name: "#RTextNode19", duration: 0.25},
		{name: "#RTextNode20", duration: 1},
		{name: "#RTextNode21", duration: 0.5},
		{name: "#RTextNode22", duration: 0.25},
		{name: "#RTextNode23", duration: 0.75},
		{name: "#RTextNode24", duration: 0.75},
		{name: "#RTextNode25", duration: 0.25}
	];

	// Creates a timeline for the text that appears on screen
	codingTL = gsap.timeline({repeat: -1, delay: 0, repeatDelay: 0.5});

	// This function loops through an array of objects and creates an animation for each object based on its name property and duration property
	function animateLines(arr) {
		for (i in arr) {
			codingTL.fromTo(arr[i].name, {
				transformOrigin: "left middle",
				scaleX: 0
			}, {
				scaleX: 1,
				duration: arr[i].duration,
				ease: Linear.easeNone,
				delay: 0.1
			})
		}
	}
	// Invoke function for the middle screen text and right screen text
	animateLines(codingText[0]);
	animateLines(codingText[1]);

	// Creates an array to hold random values that range from 0-25 which equates to the number of keys on the keyboard
	kbKeysIndices = [];

	// Creates a loop to count 50 times, creating a random number from 0-25 which then gets pushed to the array created above
	for (i = 0; i < 50; i++) {
		codingNum = Math.floor(Math.random() * 26);
		kbKeysIndices.push(codingNum);
	}

	// Array which will hold the names of all the ID's of the KB keys
	kbKeysIDs = [];

	// Counter loops 26 times (once for each key) and adds a string with the name of the ID of the key into the array created above
	for (i = 0; i < 26; i++) {
		kbKeysIDs[i] = `#key${i}`
	}

	// Creates the timeline for the keyboard typing
	let kbTL = gsap.timeline({repeat: -1, delay: 0, repeatDelay: 0.5})

	// loops through array of random numbers we created above, then creates an animation for the KB key at that index. This achieves a random typing effect.
	for (i of kbKeysIndices) {
		kbTL.to(kbKeysIDs[i], {
			fill: "#666",
			duration: 0.1
		})
		kbTL.to(kbKeysIDs[i], {
			fill: "#aaa",
			duration: 0.1
		})
	}

	// Master timeline
	masterCodingTL = gsap.timeline({repeat: -1, repeatDelay: 0.5, delay: 0.5})

	// Adding sub-TL's to the master, this makes playing, pausing and restarting super simple
	masterCodingTL.add(codingTL, 0);
	masterCodingTL.add(kbTL, 0);

	//* --------------- Event Handling --------------- 	
	svgCoding = document.getElementById("svgCoding");
	svgCoding.addEventListener('click', play);
	svgCoding.addEventListener('dblclick', restart);

	masterCodingTL.pause()
	let playing = false;

	function play() {
		if (playing == false) {
			masterCodingTL.play();
			playing = true;
		} else {
			masterCodingTL.pause();
			playing = false;
		}
	}

	function restart() {
		masterCodingTL.restart();
		playing = true;
	}
}
codingEmoji();


//* |========================|
//* |===== Racing Emoji =====|
//* |========================|
function racingEmoji() {

	// Initially hide the cars so they don't look jumpy when the emoji is played(clicked).
	gsap.set("#Cars", {
		opacity: 0
	})

	// Racing timeline
	racingTL = gsap.timeline({repeat: -1})

	racingTL.to("#Car1", {
		motionPath: {
			path: "#RacingLine",
			align: "#RacingLine",
			alignOrigin: [0.5, 0.5],
			start: 0.08,
			end: 1.08
		},
		duration: 15,
		repeat: -1,
		ease: Linear.easeNone
	}, 0)

	racingTL.to("#Car2", {
		motionPath: {
			path: "#RacingLine",
			align: "#RacingLine",
			alignOrigin: [0.5, 0.5],
			start: 0.07,
			end: 1.07
		},
		duration: 15,
		repeat: -1,
		ease: Linear.easeNone
	}, 0)

	racingTL.to("#Car3", {
		motionPath: {
			path: "#RacingLine",
			align: "#RacingLine",
			alignOrigin: [0.5, 0.5],
			start: 0.06,
			end: 1.06
		},
		duration: 15,
		repeat: -1,
		ease: Linear.easeNone
	}, 0)

	racingTL.to("#Car4", {
		motionPath: {
			path: "#RacingLine",
			align: "#RacingLine",
			alignOrigin: [0.5, 0.5],
			start: 0.05,
			end: 1.05
		},
		duration: 15,
		repeat: -1,
		ease: Linear.easeNone
	}, 0)

	racingTL.to("#Car5", {
		motionPath: {
			path: "#RacingLine",
			align: "#RacingLine",
			alignOrigin: [0.5, 0.5],
			start: 0.04,
			end: 1.04
		},
		duration: 15,
		repeat: -1,
		ease: Linear.easeNone
	}, 0)

	racingTL.to("#Car6", {
		motionPath: {
			path: "#RacingLine",
			align: "#RacingLine",
			alignOrigin: [0.5, 0.5],
			start: 0.03,
			end: 1.03
		},
		duration: 15,
		repeat: -1,
		ease: Linear.easeNone
	}, 0)

	//* --------------- Event Handling --------------- 	
	svgRacing = document.getElementById("svgRacing");
	svgRacing.addEventListener('click', play);
	svgRacing.addEventListener('dblclick', restart);

	racingTL.pause()
	let playing = false;

	function play() {
		if (playing == false) {
			racingTL.play();
			playing = true;
			gsap.to("#Cars", {
				opacity: 1,
				duration: 0.5
			})
		} else {
			racingTL.pause();
			playing = false;
		}
	}

	function restart() {
		racingTL.restart();
		playing = true;
	}

}
racingEmoji();