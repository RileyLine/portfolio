let enemy;

let enemies = [
	["Troll", 3000, 10, 10, 10, 10, 15, 0, 5],
	["Wizard", 1000, 10, 10, 10, 10, 15, 0, 10]
];

// Enemy class inheriting from Player class
class Enemy extends Player {
	constructor(charType, health, str, dex, int, wis, exp, coins, lvl) {
		super(charType, health, str, dex, int, wis, exp, coins, lvl)
		
		this.enemyAttack = function() {
			return (this.str + this.dex);
		}

		// Enemy coins based off of level
		this.coins = Math.round(Math.random()*this.lvl*2);

		this.checkDeath = function() {
			if (this.health <= 0) {
				console.log("got here");
				this.health = 0;
				alert("Enemy died");
			}
		}
	}
}

enemy = new Enemy("Troll", 3000, 10, 10, 10, 10, 15, 0, 5);
enemy2 = new Enemy("Wizard", 1000, 10, 10, 10, 10, 15, 0, 10)

// let rndEnemy = Math.floor(Math.random()*2);

// enemy = new Enemy(enemies[rndEnemy][0], enemies[rndEnemy][1], enemies[rndEnemy][2], enemies[rndEnemy][3], enemies[rndEnemy][4], enemies[rndEnemy][5], enemies[rndEnemy][6], enemies[rndEnemy][7], enemies[rndEnemy][8],);

console.log(enemy);