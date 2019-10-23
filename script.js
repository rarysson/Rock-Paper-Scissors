let playerScore = 0;
let computerScore = 0;
let draws = 0;

function computerPlay() {
	let choice = Math.floor(Math.random() * (4 - 1) + 1);

	if (choice === 1) {
		return "Rock";
	} else if (choice === 2) {
		return "Paper";
	} else {
		return "Scissors";
	}
}

function playRound(playerSelection, computerSelection) {
	const player = playerSelection.toLowerCase();
	const computer = computerSelection.toLowerCase();

	if (player === computer) {
		return 0;
	}

	if (player === "paper") {
		if (computerSelection === "Rock") {
			return 1;
		} else {
			return -1;
		}
	} else if (player === "rock") {
		if (computerSelection === "Scissors") {
			return 1;
		} else {
			return -1;
		}
	} else {
		if (computerSelection === "Paper") {
			return 1;
		} else {
			return -1;
		}
	}
}

function showResult(result, player, computerSelection) {
	const div = document.querySelector("#text");

	if (result > 0) {
		div.textContent = `You Win! ${player} beats ${computerSelection}`;
		div.style.color = "green";
		playerScore++;
	} else if (result < 0) {
		div.textContent = `You Lose! ${player} doesn't beat ${computerSelection}`;
		div.style.color = "red";
		computerScore++;
	} else {
		div.textContent = "Draw!";
		div.style.color = "blue";
		draws++;
	}          

	if (playerScore === 5 || computerScore === 5) {
		document.body.innerHTML = 
		`<h1>The final score was:<br>
		Player: ${playerScore}<br>
		Computer: ${computerScore}<br>
		Draws: ${draws}<br></h1>`;

		let again = document.createElement("button");
		again.textContent = "Play again";
		again.onclick = function() {
			window.location.reload();
		};

		const result = document.querySelector("h1");
		result.appendChild(again);
	}
}

const paper = document.querySelector("#paper");
paper.addEventListener("click", function() {
	const computer = computerPlay();
	const result = playRound("Paper", computer);
	showResult(result, "Paper", computer);
});

const rock = document.querySelector("#rock");
rock.addEventListener("click", function() {
	const computer = computerPlay();
	const result = playRound("Rock", computer);
	showResult(result, "Rock", computer);
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", function() {
	const computer = computerPlay();
	const result = playRound("Scissors", computer);
	showResult(result, "Scissors", computer);
});

/*function game() {
	let playerScore = 0;
	let computerScore = 0;
	let draws = 0;
	
	const computerSelection = computerPlay();
	const result = playRound(player, computerSelection);
	
	if (result > 0) {
		playerScore++;
		document.body.innerHTML = `<h2>You Win! ${player} beats ${computerSelection}</h2><br>`;
		console.log(`You Win! ${player} beats ${computerSelection}`);
	} else if (result < 0) {
		computerScore++;
		document.body.innerHTML = `<h2>You Lose! ${player} doesn't beat ${computerSelection}</h2><br>`
		console.log(`You Lose! ${player} doesn't beat ${computerSelection}`);
	} else {
		draws++;
		document.body.innerHTML = "<h2>Draw!</h2><br>";
		console.log("Draw!");
	}                
	
	document.body.innerHTML = 
	`<h1>The final score was:<br>
	Player: ${playerScore}<br>
	Computer: ${computerScore}<br>
	Draws: ${draws}</h1>`;
	console.log(`The final score was:\nPlayer: ${playerScore}\nComputer: ${computerScore}\nDraws: ${draws}`);
}

game();*/