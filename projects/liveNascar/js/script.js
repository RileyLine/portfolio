pageBody = document.querySelector("body");
docTitle = document.querySelector("title");
fieldHolder = document.querySelector(".runningOrderBottom")
standingsHolder = document.querySelector(".standingsHolder")

title = document.querySelector("#seriesTitle");

infoEvent = document.querySelector(".trackInfoEvent");
infoFlag = document.querySelector(".trackInfoFlag");
infoName = document.querySelector(".trackInfoName");
infoLength = document.querySelector(".trackInfoLength");
infoCurrentLap = document.querySelector(".trackInfoCurrentLap");
infoTotalLaps = document.querySelector(".trackInfoTotalLaps");
infoLeaders = document.querySelector(".trackInfoLeaders");
infoLeadChanges = document.querySelector(".trackInfoLeadChanges");
infoCautions = document.querySelector(".trackInfoCautions");
infoCautionLaps = document.querySelector(".trackInfoCautionLaps");


let fileName = location.href.split("/").slice(-1).pop();
// Get page name
if (fileName == "index.html") {
	getLiveFeed()

	setInterval(function(){
		resetPage();
		getLiveFeed();
		document.getElementById("blip").play();

	}, 30500);

	console.log("grabbing live feed");
} else if (fileName == "standings.html"){
	getStandings()
}

// Grab live race feed
function getLiveFeed() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://cf.nascar.com/live/feeds/live-feed.json', true)
	xhr.setRequestHeader('Accept', 'application/json')

	xhr.onload = function() {
		if (this.status == 200) {
			liveObj = JSON.parse(this.responseText)
			console.log(liveObj)
			field = liveObj.vehicles;
			console.log(field)
			seriesCheck(liveObj, field)
		}
	}

	xhr.send();
}

// Grab NASCAR standings
function getStandings() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://cf.nascar.com/cacher/2021/1/final/1-drivers-points.json', true)
	xhr.setRequestHeader('Accept', 'application/json')

	xhr.onload = function() {
		if (this.status == 200) {
			let standingsObj = JSON.parse(this.responseText)
			console.log(standingsObj);
			removeLosers(standingsObj);
		}
	}

	xhr.send();
}

// Grab NASCAR schedule (not used yet)
function getSchedule() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://cf.nascar.com/cacher/tracks/tracks-feed.json', true)
	xhr.setRequestHeader('Accept', 'application/json')

	xhr.onload = function() {
		if (this.status == 200) {
			let schedObj = JSON.parse(this.responseText);
		}
	}

	xhr.send();
}

// Checks the series to determine if anything is running and what it is
function seriesCheck(obj, field) {
	seriesID = obj.series_id;

	switch(seriesID) {
		case 1:
			seriesName = "NASCAR CUP SERIES";
			formatRaceInfo(obj, seriesName);
			formatRacers(field);
			break;
		case 2:
			seriesName = "NASCAR XFINITY SERIES";
			formatRaceInfo(obj, seriesName);
			formatRacers(field);
			break;
		case 3: 
			seriesName = "NASCAR CAMPING WORLD TRUCK SERIES";
			formatRaceInfo(obj, seriesName);
			formatRacers(field);
			break;
		case 999: 
			seriesName = "ARCA MENARDS SERIES";
			formatRaceInfo(obj, seriesName);
			formatRacers(field);
			break;
		case 0:
			title.innerText = "No race is currently running";
	}
}

function formatRaceInfo(obj, series) {
	docTitle.innerText = `${obj.run_name} | Live Running Order`
	title.innerHTML = `${series}<br>Live Results`;

	eventName = document.createElement("p");
	trackFlagHeading = document.createElement("p");
	trackFlag = document.createElement("p");
	trackNameHeading = document.createElement("p");
	trackName = document.createElement("p");
	trackLengthHeading = document.createElement("p");
	trackLength = document.createElement("p");
	currentLapHeading = document.createElement("p");
	currentLap = document.createElement("p");
	leadersHeading = document.createElement("p");
	leaders = document.createElement("p");
	leadChangesHeading = document.createElement("p");
	leadChanges = document.createElement("p");
	cautionsAmountHeading = document.createElement("p");
	cautionsAmount = document.createElement("p");
	cautionLapsHeading = document.createElement("p");
	cautionLaps = document.createElement("p");

	eventName.innerText = obj.run_name;
	trackFlagHeading.innerText = "Flag: "
	trackFlag.innerText = `${determineFlagState(obj.flag_state)}`;
	trackNameHeading.innerText = "Track: ";
	trackName.innerText = obj.track_name
	trackLengthHeading.innerText = "Length: ";
	trackLength.innerText = `${obj.track_length} mi.`
	currentLapHeading.innerText = "Lap: ";
	currentLap.innerText = `${obj.lap_number} of ${obj.laps_in_race}`
	leadersHeading.innerText = "Leaders: "
	leaders.innerText = obj.number_of_leaders;
	leadChangesHeading.innerText = "Lead Changes: ";
	leadChanges.innerText = obj.number_of_lead_changes
	cautionsAmountHeading.innerText = "Cautions: ";
	cautionsAmount.innerText = obj.number_of_caution_segments;
	cautionLapsHeading.innerText = "Caution Laps: ";
	cautionLaps.innerText = obj.number_of_caution_laps;

	infoEvent.appendChild(eventName);
	infoFlag.appendChild(trackFlagHeading);
	infoFlag.appendChild(trackFlag);
	infoName.appendChild(trackNameHeading)
	infoName.appendChild(trackName);
	infoLength.appendChild(trackLengthHeading)
	infoLength.appendChild(trackLength);
	infoCurrentLap.appendChild(currentLapHeading)
	infoCurrentLap.appendChild(currentLap);
	infoLeaders.appendChild(leadersHeading);
	infoLeaders.appendChild(leaders);
	infoLeadChanges.appendChild(leadChangesHeading);
	infoLeadChanges.appendChild(leadChanges);
	infoCautions.appendChild(cautionsAmountHeading);
	infoCautions.appendChild(cautionsAmount);
	infoCautionLaps.appendChild(cautionLapsHeading);
	infoCautionLaps.appendChild(cautionLaps);
}

function formatRacers(field) {
	for (i of field) {
		output = 
		`
		<div class="driverEntry">
			<div class="DERP entryStyle">
				<p>${i.running_position}</p>
			</div>
			<div class="DESP entryStyle">
				<p>${i.starting_position}</p>
			</div>
			<div class="DEVN entryStyle">
				<p>#${i.vehicle_number}</p>
			</div>
			<div class="DEVM entryStyle">
				<p>${i.vehicle_manufacturer}</p>
			</div>
			<div class="DEFN entryStyle">
				<p>${i.driver.full_name}</p>
			</div>
			<div class="DELL entryStyle">
				<p>${calcLaps(i.laps_led)}</p>
			</div>
			<div class="DETB entryStyle"></div>
		</div>
		`
		fieldHolder.innerHTML += output;
		
	}

	// Column of cells that will be filled with time back
	behindCol = document.querySelectorAll('.DETB');
	grabDelta(behindCol)
}

function calcLaps(lapsLedArr) {
	totalLed = 0;
	ledLength = lapsLedArr.length;
	for (i of lapsLedArr) {
		lapDiff(i.start_lap, i.end_lap)

		if (i.start_lap == 0) {
			totalLed -= 1;
		}
	}
	realLed = totalLed + ledLength;
	return realLed;
}

function lapDiff(a, b) {
	lapsLed = b - a;
	
	totalLed += lapsLed
}

function determineFlagState(flag) {
	switch(flag) {
		case 1:
			flagName = "Green Flag";
			infoFlag.style.backgroundColor = "green";
			infoCurrentLap.style.backgroundColor = "green";
			infoFlag.style.color = "white";
			infoCurrentLap.style.color = "white";
			break;
		case 2:
			flagName = "Caution Flag";
			infoFlag.style.backgroundColor = "yellow";
			infoCurrentLap.style.backgroundColor = "yellow";
			infoFlag.style.color = "black";
			infoCurrentLap.style.color = "black";
			break;
		case 3:
			flagName = "Red Flag";
			infoFlag.style.backgroundColor = "red";
			infoCurrentLap.style.backgroundColor = "red";
			infoFlag.style.color = "white";
			infoCurrentLap.style.color = "white";
			break;
		case 4:
			flagName = "Checkered Flag";
			infoFlag.style.backgroundColor = "black";
			infoCurrentLap.style.backgroundColor = "black";
			infoFlag.style.color = "white";
			infoCurrentLap.style.color = "white";
			break;
		case 5:
			flagName = "Five Unknown";
			break;
		case 6:
			flagName = "Six Unknown";
			break;
		case 7:
			flagName = "Seven Unknown";
			break;
		case 8:
			flagName = "Pre Race: Warm Up";
			infoFlag.style.backgroundColor = "orange";
			infoCurrentLap.style.backgroundColor = "orange";
			infoFlag.style.color = "black";
			infoCurrentLap.style.color = "black";
			break;
		case 9:
			flagName = "Not Live";
			infoFlag.style.backgroundColor = "#cccccc";
			infoCurrentLap.style.backgroundColor = "#cccccc";
			infoFlag.style.color = "black";
			infoCurrentLap.style.color = "black";
			break;
	}
	return flagName
}

// obj.delta was being a bitch to work with so had to create a work around (grabDelta)

// Creates an array of all the delta values of the field
function grabDelta(col) {
	deltaArray = []
	
	for (i of field) {
		deltaArray.push(i.delta)
	}

	// Calls formatDelta with newly created deltaArray and the empty columns that will hold the data
	formatDelta(deltaArray, col)
}

function formatDelta(dArr, col) {
	for (i in col) {
		
		if (dArr[i] > 0) { // If dArr value is > 0 it means they are on lead lap; measured in: seconds behind
			col[i].innerText = `${dArr[i]}s`
		} else if (dArr[i] < 0) { // if dArr value is < 0 it means they are at least 1 lap down, potentially more
			if (dArr[i] == -1) { // if dArr value is exactly -1 then they are 1 lap down
				col[i].innerText = `${Math.abs(dArr[i])} Lap`
			} else if (dArr[i] < -1) { // if dArr value is less than -1 they are more than 1 lap down
				col[i].innerText = `${Math.abs(dArr[i])} Laps`
			}
		} else { // If none of the above is true then they are the leader (this can be checked as dArr[i] == 0, since leader delta is 0)
			col[i].innerText = "Leader";
		}
	}
}

// Refreshes the elements of the livefeed page
function resetPage() {
	const elements = document.getElementsByClassName("driverEntry");
	while (elements.length > 0) elements[0].remove();

	infoEvent.innerHTML = "";
	infoName.innerHTML = "";
	infoLength.innerHTML = "";
	infoFlag.innerHTML = "";
	infoCurrentLap.innerHTML = "";
	infoLeadChanges.innerHTML = "";
	infoLeaders.innerHTML = "";
	infoCautions.innerHTML = "";
	infoCautionLaps.innerHTML = "";
}




//* STANDINGS PAGE SCRIPT
function removeLosers(standings) {
	for (i of standings) {
		if (i.starts == 0) {
			standings.pop(i);
		}
	}
	formatStandings(standings);
}

function formatStandings(standings) {
	for (i of standings) {
		output = 
		`
		<div class="standingsEntry">
			<div class="SEPos entryStyle">
				<p>${i.position}</p>
			</div>
			<div class="SEFN entryStyle">
				<p><span id="carNum">${i.car_no}</span> ${i.driver_name}</p>
			</div>
			<div class="SEVM entryStyle">
				<p>${i.manufacturer}</p>
			</div>
			<div class="SEPts entryStyle">
				<p>${i.points}</p>
			</div>
			<div class="SEPB entryStyle">
				<p>${i.delta_leader}</p>
			</div>
			<div class="SEStrts entryStyle">
				<p>${i.starts}</p>
			</div>
			<div class="SEWins entryStyle">
				<p>${i.wins}</p>
			</div>
			<div class="SETF entryStyle">
				<p>${i.top_5}</p>
			</div>
			<div class="SETT entryStyle">
				<p>${i.top_10}</p>
			</div>
			<div class="SEDNF entryStyle">
				<p>${i.dnf}</p>
			</div>
			<div class="SELL entryStyle">
				<p>${i.laps_led}</p>
			</div>
			<div class="SESW entryStyle">
				<p>${calcStageWins(i.stage_1_wins, i.stage_2_wins, i.stage_3_wins)}</p>
			</div>
		</div>
		`
		standingsHolder.innerHTML += output;
		
	}
}

function calcStageWins(s1, s2, s3) {
	return totalStageWins = s1+s2+s3;
}