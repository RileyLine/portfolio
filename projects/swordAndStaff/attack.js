// Used to figure out what is happening with the attacks
function calcAttack() {

	if (boardArray[playerLoc[0]][playerLoc[1]].id == "foe") {
		let playerAttack = player.calcDmg()
		let enemyAttack = enemy.enemyAttack();

		player.health -= enemyAttack;
		enemy.health -= playerAttack;

		player.checkDeath();
		enemy.checkDeath();

		if (player.health > 0) {
			logUpdate("<span id='player'>Player</span> attacks <span id='enemy'>Enemy</span> for:", `<span id="player">${playerAttack}</span>`, logAttkIcon);
			logUpdate("<span id='enemy'>Enemy</span> attacks <span id='player'>Player</span> for:", `<span id="enemy">${enemyAttack}</span>`, logAttkIcon);
		}

		hpBar.value = player.health

	} else {
		logUpdate("There is nothing to attack here", "", logAttkIcon);
	}
	
}

attackBtn.addEventListener('click', calcAttack);