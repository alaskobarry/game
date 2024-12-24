let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  }
}

// set the score inside the p element.
updateScoreElement();

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/ 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  
  return computerMove;
}

function playGame(playerChoice) {
  let computerPick = pickComputerMove();

  if (playerChoice === 'rock') {
    if (computerPick === 'rock') {
      result = 'Tie.';
    } else if (computerPick === 'paper') {
      result = 'You lose.';
    } else if (computerPick === 'scissors') {
      result = 'You win.'
    }

  } else if (playerChoice === 'paper') {
    if (computerPick === 'rock') {
      result = 'You win.';
    } else if (computerPick === 'paper') {
      result = 'Tie.';
    } else if (computerPick === 'scissors') {
      result = 'You lose.'
    }

  } else if (playerChoice === 'scissors') {
    if (computerPick === 'rock') {
      result = 'You lose.';
    } else if (computerPick === 'paper') {
      result = 'You win.';
    } else if (computerPick === 'scissors') {
      result = 'Tie.'
    }
  }

  // displaying the result on the page
  document.querySelector('.js-result').innerHTML = result;

  // displaying the playerChoice, computerPick on the page
  document.querySelector('.js-move')
    .innerHTML = `You
      <img src="${playerChoice}-emoji.png" class="move-icon"> --
      <img src="${computerPick}-emoji.png" class="move-icon">
      Computer`;
    
  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else {
    score.ties += 1;
  }

  // update score function
  updateScoreElement();

  localStorage.setItem('score', JSON.stringify(score));

  /*
  alert(`You piked ${playerChoice}. Computer picked ${computerPick}.${result}\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
  return result;
  */
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
