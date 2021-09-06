/* 
	0 = OOB/Wall
	1 = Path
	2 = Grass
	3 = Tall Grass
	4 = Water
*/

// Building the divs for the gameboard, giving them classes
for (r = 0; r < 21; r++) {
	for (c = 0; c < 32; c++) {
		let createdBlock = document.createElement("div");

		createdBlock.classList.add("block");
		createdBlock.classList.add(`r${r}`);
		createdBlock.classList.add(`c${c}`);

		gameScreen.appendChild(createdBlock);

	}
}

// Holds all the div elements, in a row and column grid
boardArray = [];

// Putting the rows into the 2D boardArray
for (i = 0; i < 21; i++) {
	boardArray[i] = document.querySelectorAll(".r" + i);
}

// Load the map we want (map001 to start)
loadMap(map001);
