function loadMap(map) {

	playerLoc = [map[1][0], map[1][1]];

	for (r = 0; r < 21; r++) {
		for (c = 0; c < 32; c++) {
			switch(map[0][r][c]) {
				case 0:
					boardArray[r][c].setAttribute('id', 'boundary');
					boardArray[r][c].style.background = "linear-gradient(135deg, rgba(48,48,48,1) 50%, rgba(32,32,32,1) 50%)"
					boardArray[r][c].style.borderTop = "1px dotted black";
					boardArray[r][c].style.borderLeft = "1px dotted black";
					break;

				case 1:
					boardArray[r][c].setAttribute('id', 'path');
					let variedCol = Math.random();
					
					if (variedCol < 0.5) {
						boardArray[r][c].style.backgroundColor = "#724D08";
					} else {
						boardArray[r][c].style.backgroundColor = "#7c5409";
					}
					break;

				case 2:
					boardArray[r][c].setAttribute('id', 'grass');
					boardArray[r][c].style.backgroundColor = "#90A955";
					break;

				case 3:
					boardArray[r][c].setAttribute('id', 'tallGrass');
					boardArray[r][c].style.backgroundColor = "#90a122";
					break;

				case 4:
					boardArray[r][c].setAttribute('id', 'water');
					boardArray[r][c].style.backgroundColor = "blue";
					break;
			} 
		}
	}

	createEnemySpawns()
}


function createEnemySpawns() {
	let potentialSpawnBlocks = document.querySelectorAll("#tallGrass");
	let spawnVariance = Math.floor(Math.random()*5)
	let numSpawns = Math.floor(potentialSpawnBlocks.length * 0.05) + spawnVariance;
	console.log(numSpawns);
	
	for (i = 0; i < numSpawns; i++) {
		let randomBlock = Math.floor(Math.random()*183)

		potentialSpawnBlocks[randomBlock].style.backgroundColor = "red";
		potentialSpawnBlocks[randomBlock].id = "foe";
	}
	
}
