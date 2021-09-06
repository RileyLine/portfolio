// Create the player globally, give them beginner stats. When they select their class we will update their player info to corresspond to their choice.
player = new Player("Beginner", 100, 10, 10, 10, 10, 0, 1000, 1, "");

// Will only be called once at the very beginning when the user chooses their class.
function createNewPlayer(classSelection) {
	
	createScreen.style.display = "none";

	switch(classSelection) {
		case "Warrior":
			player.charType = "Warrior"
			player.health = 250
			player.maxHealth = 250
			player.str = 35
			player.dex = 35
			player.int = 10
			player.wis = 10
			player.avatar = "./images/warriorHead.png"
			break;
		case "Mage":
			player.charType = "Mage"
			player.health = 175
			player.maxHealth = 175
			player.str = 10
			player.dex = 10
			player.int = 35
			player.wis = 35
			player.avatar = "./images/mageHead.png"
			break;
	}

	boardArray[playerLoc[0]][playerLoc[1]].style.backgroundColor = "limegreen";
	

	initPlayerInfo()
}

function initPlayerInfo() {
	// Once the player selects their class, we will update the userInfo area to show the correct img and stats
	userAvatar.src = player.avatar;
	userClassname.innerText = player.charType;
	hpBar.max = player.health
	hpBar.value = player.health
	coinsLabel.innerText = player.coins;
	levelLabel.innerText = player.lvl;
	expLabel.innerText = player.exp;

	logUpdate("Welcome to the game! Brief message about stuff...", "", logGlobalIcon);
	logUpdate("User the arrow button on the right side of the screen to move around", "", logInfoIcon);
}	

