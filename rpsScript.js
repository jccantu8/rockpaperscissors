	function computerPlay(){
		let randomNumber = Math.floor(Math.random() * 3);
		switch(randomNumber){
			case 0:
				return "Rock";
			case 1:
				return "Paper";
			case 2:
				return "Scissors";
		}
	}

	function playRound(playerSelection, computerSelection){
		switch(playerSelection){
			case "Rock":
					if (playerSelection === "Rock" && computerSelection === "Rock"){
							 return "You tie! Rock ties with rock.";
						}
					else if (playerSelection === "Rock" && computerSelection === "Scissors"){
							return "You win! Rock beats scissors.";
						}
					else{ 
							return "You lose! Rock loses to paper.";
						}
			case "Scissors":
					if (playerSelection === "Scissors" && computerSelection === "Scissors"){
							return "You tie! Scissors ties with scissors.";
						}
					else if (playerSelection === "Scissors" && computerSelection === "Paper"){
							return "You win! Scissors beats paper.";
						}
					else{ 
							return "You lose! Scissors loses to rock.";
						}
			case "Paper":
					if (playerSelection === "Paper" && computerSelection === "Paper"){
							 return "You tie! Paper ties with paper.";
						}
					else if (playerSelection === "Paper" && computerSelection === "Rock"){
							return "You win! Paper beats rock.";
						}
					else{ 
							return "You lose! Paper loses to scissors.";
						}
		}
	}

	let playerScore = 0;
	let computerScore = 0;

	function scoreKeeper(result){

		if ((playerScore >= 5) || (computerScore >= 5)){
			if (playerScore >= 5){
				document.getElementById("playerScore").style.border = "thick solid green";
				exit();
			}
			else{
				document.getElementById("computerScore").style.border = "thick solid green";
				exit();
			}
		}

		if ((result == "You win! Rock beats scissors.") || (result == "You win! Scissors beats paper.") || (result == "You win! Paper beats rock.")){
				document.getElementById("player").innerHTML = ++playerScore;
			}
			else if ((result == "You lose! Rock loses to paper.") || (result == "You lose! Scissors loses to rock.") || (result == "You lose! Paper loses to scissors.")){
				document.getElementById("computer").innerHTML = ++computerScore;
			}

	}

	document.getElementById("rock").addEventListener("click", function(){
		let result = playRound("Rock", computerPlay());
		scoreKeeper(result);
		document.getElementById("results").innerHTML = result;
	});

	document.getElementById("paper").addEventListener("click", function(){
		let result = playRound("Paper", computerPlay());
		scoreKeeper(result);
		document.getElementById("results").innerHTML = result;
	});

	document.getElementById("scissors").addEventListener("click", function(){
		let result = playRound("Scissors", computerPlay());
		scoreKeeper(result);
		document.getElementById("results").innerHTML = result;
	});