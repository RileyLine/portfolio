// EVENT LISTENERS: movement
up.addEventListener('click', () => {
	handleInput("up");
})
down.addEventListener('click', () => {
	handleInput("down");
})
left.addEventListener('click', () => {
	handleInput("left");
})
right.addEventListener('click', () => {
	handleInput("right");
})

// Grab the HTML element that is located at the specified coordinates defined above
let prevBlock = boardArray[playerLoc[0]][playerLoc[1]];
let prevBlockId = prevBlock.id;

// Handle the input direction (up, down, left, right).
function handleInput(direction) {
	switch(direction) {
		case "up":
			try {
				if (boardArray[playerLoc[0]-1][playerLoc[1]].id != "boundary") {
				
					playerLoc[0] -= 1;

					nextBlock = boardArray[playerLoc[0]][playerLoc[1]];
					nextBlockType = nextBlock.id;
					prevBlock = boardArray[playerLoc[0]+1][playerLoc[1]]
					prevBlockType = prevBlock.id

					updateBoard(nextBlock, prevBlock, prevBlockType, direction);
				}
					
			} catch {
				movementError()
			}
			
			break;

		case "down":
			try {
				if (boardArray[playerLoc[0]+1][playerLoc[1]].id != "boundary") {
				
					playerLoc[0] += 1;

					nextBlock = boardArray[playerLoc[0]][playerLoc[1]];
					nextBlockType = nextBlock.id;
					prevBlock = boardArray[playerLoc[0]-1][playerLoc[1]]
					prevBlockType = prevBlock.id

					updateBoard(nextBlock, prevBlock, prevBlockType, direction);
				}
					
			} catch {
				movementError()
			}
			
			break;

		case "left":
			try {
				if (boardArray[playerLoc[0]][playerLoc[1]-1].id != "boundary") {
				
					playerLoc[1] -= 1;

					nextBlock = boardArray[playerLoc[0]][playerLoc[1]];
					nextBlockType = nextBlock.id;
					prevBlock = boardArray[playerLoc[0]][playerLoc[1]+1]
					prevBlockType = prevBlock.id

					updateBoard(nextBlock, prevBlock, prevBlockType, direction);
				}
					
			} catch {
				movementError()
			}
			
			break;

		case "right":
			try {
				if (boardArray[playerLoc[0]][playerLoc[1]+1].id != "boundary") {
				
					playerLoc[1] += 1;

					nextBlock = boardArray[playerLoc[0]][playerLoc[1]];
					nextBlockType = nextBlock.id;
					prevBlock = boardArray[playerLoc[0]][playerLoc[1]-1]
					prevBlockType = prevBlock.id

					updateBoard(nextBlock, prevBlock, prevBlockType, direction);
				}
					
			} catch {
				movementError()
			}
			
			break;
	}
}

function updateBoard(nb, pb, pbt) {

	nb.style.backgroundColor = "limegreen";
	
	switch(pbt) {
		case "path":
			let variedCol = Math.random();
			
			if (variedCol < 0.5) {
				pb.style.backgroundColor = "#724D08";
			} else {
				pb.style.backgroundColor = "#7c5409";
			}
			break;

		case "grass":
			pb.style.backgroundColor = "#90A955";
			break;

		case "tallGrass":
			pb.style.backgroundColor = "#90a122"
			break;

		case "water":
			pb.style.backgroundColor = "blue"
			break;

		case "foe":
			pb.style.backgroundColor = "#90a122"
			break;
	}

	//! Test for HP on water drink, will need a new function to test current block ID (for enemies or water) [Needs to be its own seperate check function]
	if (nb.id == "water") {
		player.health += 10;
		hpBar.value = player.health;
		if (player.health >= player.maxHealth) {
			player.health = player.maxHealth;
			hpBar.value = player.health;
		}
	}
	if (nb.id == "foe") {
		disableMovement();
		logUpdate("You are now in battle, there is no running!", "", logNoticeIcon);
	}

}


// Trying to move outside the bounds of the boardArray
function movementError() {
	logUpdate("Invalid move", "", logAttkIcon)
}