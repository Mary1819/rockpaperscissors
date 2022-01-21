$(".computerChoicet").hide();
let computerChoice;
let userChoice;
let winner;
let won = 0;
let lost = 0;
let tie = 0;

function getRandomComputerChoice() {
  let computerOutput = Math.ceil(Math.random() * 3);
  if (computerOutput === 1) {
    computerChoice = "rock";
  } else if (computerOutput === 2) {
    computerChoice = "paper";
  } else if (computerOutput === 3) {
    computerChoice = "scissor";
  }
  $(".computerChoicet").text(computerChoice);
}

function win() {
  won = won + 1;
  $(".won").text(won);
  winner = "You win";
}

function tief() {
  tie = tie + 1;
  $(".tie").text(tie);
  winner = "It's a tie";
}

function loss() {
  lost = lost + 1;
  $(".lost").text(lost);
  winner = "You loss to a computer HAHAHA";
}

function chooseWinner() {
  if (userChoice === "rock" && computerChoice === "rock") {
    tief();
  } else if (userChoice === "paper" && computerChoice === "rock") {
    win();
  } else if (userChoice === "scissor" && computerChoice === "rock") {
    loss();
  } else if (userChoice === "rock" && computerChoice === "paper") {
    loss();
  } else if (userChoice === "paper" && computerChoice === "paper") {
    tief();
  } else if (userChoice === "scissor" && computerChoice === "paper") {
    win();
  } else if (userChoice === "rock" && computerChoice === "scissor") {
    win();
  } else if (userChoice === "paper" && computerChoice === "scissor") {
    loss();
  } else if (userChoice === "scissor" && computerChoice === "scissor") {
    tief();
  } else {
    winner = "Not valid input. Check your spelling.";
  } }

$(".shoot").click(function () {
  getRandomComputerChoice();
  $(".computerChoicet").show();
  userChoice = $(".input").val().toLowerCase();
  $(".userChoicet").text(userChoice);
  chooseWinner();
  tie = tie + 1;
  won = won + 1;
  lost = lost + 1;
  $(".resultt").text(winner);
});
