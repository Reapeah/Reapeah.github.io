let userScore = 0;
let compScore = 0;
let drawCount = 0;
let games_played = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const announce_p = document.querySelector(".result > p");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");
const drawcount_div = document.getElementById("action-msg");
const gamesplayed_p = document.getElementById("games-played")

function getComputerChoice() {
  const choices = ['Rock','Paper','Scissors'];
  const randomNumber = (Math.floor(Math.random()*3));
  return choices[randomNumber];

}
function win(userChoice,computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  announce_p.innerHTML = `${userChoice} beats ${computerChoice}. You Win!`
  const userDiv = document.getElementById(userChoice)
  userDiv.classList.add('green-glow');
  setTimeout(()=> userDiv.classList.remove('green-glow'), 500)
}

function lose(userChoice,computerChoice){
  compScore++;
  compScore_span.innerHTML = compScore;
  announce_p.innerHTML = `${computerChoice} beats ${userChoice}. You Lose!`
  const userDiv = document.getElementById(userChoice)
  userDiv.classList.add('red-glow');
  setTimeout(() => userDiv.classList.remove('red-glow'), 500)

}
function draw(userChoice,computerChoice){
  drawCount++;
  announce_p.innerHTML = `Both users picked ${userChoice}. Draw!`
  drawcount_div.innerHTML = `Draw Count : ${drawCount}`
  const userDiv = document.getElementById(userChoice)
  userDiv.classList.add('grey-glow');
  setTimeout(() => userDiv.classList.remove('grey-glow'), 500)
  //drawScore_span.innerHTML = drawCount
}

function game(userChoice){
  games_played++;
  gamesplayed_p.innerHTML=`Games Played : ${games_played}`
  console.log(userChoice)
  let computerChoice = getComputerChoice();
  //userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
  //computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
  switch (userChoice + computerChoice) {
    case 'RockScissors':
    case 'PaperRock':
    case 'ScissorsPaper':
      win(userChoice,computerChoice);
      break;
    case 'RockPaper':
    case 'PaperScissors':
    case 'ScissorsRock':
      lose(userChoice,computerChoice);
      break;
    case 'RockRock':
    case 'PaperPaper':
    case 'ScissorsScissors':
      draw(userChoice,computerChoice);
      break;

  }

}
function main(){
  rock_div.addEventListener('click',() =>  game("Rock") )

  paper_div.addEventListener('click',() => game("Paper"))

  scissors_div.addEventListener('click',() => game("Scissors"))
}

main();
