let warriorBtn = document.querySelector(".warriorArea");
let mageBtn = document.querySelector(".mageArea");
let attackBtn = document.querySelector("#attack");
let gameScreen = document.querySelector(".gameScreen");
let createScreen = document.querySelector('.chooseClass')
let gameLog = document.querySelector(".gameLog");


// User info area - HTML elements
let userAvatar = document.querySelector("#userAvatar");
let userClassname = document.querySelector("#userClassname");
let coinsLabel = document.querySelector("#coins");
let coinsIcon = document.querySelector("#coinsIcon");
let coinsTT = document.querySelector("#coinsTT");
let levelLabel = document.querySelector("#level");
let levelIcon = document.querySelector("#levelIcon");
let levelTT = document.querySelector("#levelTT");
let expLabel = document.querySelector("#exp");
let expIcon = document.querySelector("#expIcon");
let expTT = document.querySelector("#expTT");
let hpBar = document.querySelector("#health");

let iconArray = [coinsIcon, levelIcon, expIcon];
let ttArray = [coinsTT, levelTT, expTT];

for (i in iconArray) {
	let index = i;
	iconArray[i].addEventListener('mouseenter', () => {
		ttArray[index].style.visibility = "visible";
	})

	iconArray[i].addEventListener('mouseleave', () => {
		ttArray[index].style.visibility = "hidden";
	})
}

// User Input Area - HTML Elements
let up = document.querySelector('#up');
let down = document.querySelector('#down');
let left = document.querySelector('#left');
let right = document.querySelector('#right');

let movementButtons = [up, down, left, right];

// Event listeners for the class choices
warriorBtn.addEventListener('click', () => {
	createNewPlayer("Warrior");
});

mageBtn.addEventListener('click', () => {
	createNewPlayer("Mage");
});

function disableMovement() {
	// While in a fight we will disable the movement buttons and style them accordingly

	for (i of movementButtons) {
		i.style.pointerEvents = "none";
		i.style.color = "#999";
	}
}