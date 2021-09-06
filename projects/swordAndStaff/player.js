let player;

// Player class, defines what a player is and the info required for a player.
class Player {
	constructor(charType, health, str, dex, int, wis, exp, coins, lvl, avatar) {
		this.charType = charType;
		this.health = health;
		this.str = str;
		this.dex = dex;
		this.int = int;
		this.wis = wis;
		this.exp = exp;
		this.coins = coins;
		this.lvl = lvl;
		this.avatar = avatar;

		this.maxHealth = health;

		this.playerStats = function () {
			return this.str;
		};

		this.calcDmg = function () {
			let variance = 0.75 + Math.random()*0.5
			// let rndNum = 1 + Math.random()*0.5;

			switch(this.charType) {

				case "Warrior":
					return Math.round(((this.str + this.dex)/2)*variance);
				case "Mage":
					return Math.round(((this.int + this.wis)/2)*variance);
			}
		}

		this.checkDeath = function () {
			if (this.health <= 0) {
				this.health = 0;
				logUpdate("You Died", "");
			}
		}

	}
}