let logAttkIcon = '<i class="fas fa-skull"></i>'
let logGlobalIcon = '<i class="fas fa-globe-americas"></i>'
let logInfoIcon = '<i class="fas fa-info-circle"></i>'
let logNoticeIcon = '<i class="fas fa-exclamation-triangle"></i>'

function logUpdate(msg, info, logType) {
	let log = document.createElement('p');
	log.innerHTML = `${logType} - ${msg} ${info}`

	
	gameLog.appendChild(log);
	gameLog.scrollTop = gameLog.scrollHeight;
	
}