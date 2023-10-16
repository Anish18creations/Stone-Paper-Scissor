
const closeRules = () => {
	const gameRule = document.getElementById("gameRule");

	if (gameRule.style.display === "flex") {
		gameRule.style.display = "none";
	} else {
		gameRule.style.display = "flex";
	}
};

window.onload = () => {
	if (localStorage.getItem('uS')) {
		var uS = localStorage.getItem('uS');
		var pS = localStorage.getItem('pS');
	}
	else {
		var uS = 0;
		var pS = 0;
	}

	document.getElementById('uS').innerHTML = uS
	document.getElementById('pS').innerHTML = pS
}

const refresh = () => {
	localStorage.setItem('uS', 0)
	localStorage.setItem('pS', 0)
	location.reload();
}


const playagain = () => {
	document.getElementById("choiceMaker").style.display = "flex";
	document.getElementById("choiceResult").style.display = "none";
};

if (localStorage.getItem('uS')) {
	var userScore = localStorage.getItem('uS');
	var pcScore = localStorage.getItem('pS');
}
else {
	var uS = 0;
	var pS = 0;
}


const letsPlay = (userChoice) => {
	localStorage.setItem('uS', uS)
	localStorage.setItem('pS', pS)




	const resultLoad = document.createElement("div");
	resultLoad.classList.add("winner");
	if (userChoice === "rock") {
		document.getElementById('myChoice').style.border = "20px solid #0074b6";
		document.getElementById("userChoice").src = "icons8-fist-67 1.png";
	} else if (userChoice === "paper") {
		document.getElementById('myChoice').style.border = "20px solid #ffa943";
		document.getElementById("userChoice").src = "icons8-hand-64 1.png";
	} else if (userChoice === "scissor") {
		document.getElementById('myChoice').style.border = "20px solid #bd00ff";
		document.getElementById("userChoice").src = "17911 1.png";
	}

	document.getElementById("choiceMaker").style.display = "none";
	document.getElementById("choiceResult").style.display = "flex";
	document.getElementById("choiceResultDetails").style.transform = "scale(0)";
	document.getElementById("loadingDone").style.display = "none";
	document.getElementById("loading").style.display = "inherit";

	const elements = document.querySelectorAll(`.winner`);
	elements.forEach(element => {
		element.remove();
	});



	interval = setInterval(() => {
		clearInterval(interval);
		play(userChoice);
	}, 1000);
};

const play = (userChoice) => {
	document.getElementById("choiceResultDetails").style.transform = "scale(1)";
	document.getElementById("loadingDone").style.display = "inherit";
	document.getElementById("loading").style.display = "none";

	const choices = ["rock", "paper", "scissor"];
	const randomIndex = Math.floor(Math.random() * 3);
	const computerChoice = choices[randomIndex];


	const resultLoad = document.createElement("div");
	resultLoad.classList.add("winner");



	if (computerChoice === "rock") {
		document.getElementById('pcChoice').style.border = "20px solid #0074b6";
		document.getElementById("loadingDone").src = "icons8-fist-67 1.png";
	} else if (computerChoice === "paper") {
		document.getElementById('pcChoice').style.border = "20px solid #ffa943";
		document.getElementById("loadingDone").src = "icons8-hand-64 1.png";
	} else if (computerChoice === "scissor") {
		document.getElementById('pcChoice').style.border = "20px solid #bd00ff";
		document.getElementById("loadingDone").src = "17911 1.png";
	}

	let result = "";

	if (userChoice === computerChoice) {
		result = "It's a tie!";
		document.getElementById("yourTitle").innerHTML = "IT'S A TIE ";
		document.getElementById("resultTie").innerHTML = "";
	} else if (
		(userChoice === "rock" && computerChoice === "scissor") ||
		(userChoice === "paper" && computerChoice === "rock") ||
		(userChoice === "scissor" && computerChoice === "paper")
	) {
		result = "You win!";
		uS++;
		localStorage.setItem('uS', uS)
		localUserScore = localStorage.getItem('uS')

		document.getElementById("uS").innerHTML = localUserScore;
		document.getElementById("yourTitle").innerHTML = "YOU WIN ";
		document.getElementById("resultTie").innerHTML = "AGAINST PC";
		document.getElementById("myChoice").appendChild(resultLoad);
	}
	else {
		result = "You lose!";
		pS++;
		localStorage.setItem('pS', pS)
		localPCScore = localStorage.getItem('pS')

		document.getElementById("pS").innerHTML = localPCScore;
		document.getElementById("yourTitle").innerHTML = "YOU LOST";
		document.getElementById("resultTie").innerHTML = "AGAINST PC";
		document.getElementById("pcChoice").appendChild(resultLoad);
	}



	if (result === "You win!") {
		document.getElementById('next').style.display = 'inherit'
	} else {
		document.getElementById('next').style.display = 'none'
	}
};