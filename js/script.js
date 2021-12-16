let userChoice= $(".input").val(); 
let computerOutput= Math.ceil(Math.random() * 3);
let computerChoice;
let result;

  if(computerOutput === 1) {
     computerChoice = "rock;"
    (".computerChoice").text("Rock");
} else if(computerOutput === 2) {
       computerChoice = "paper;"
    (".computerChoice").text("Paper");
} else if (computerOutput === 3) {
       computerChoice = "sicssor;"
  (".computerChoice").text("Scissor")
}

 
 $(".shoot").click(function () {
   $(".userChoice").text(userChoice);
   
   if (userChoice === "rock" && computerChoice === "rock") {
    result = "It's a tie!";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    result = "You win!";
  } else if (userChoice === "scissor" && computerChoice === "rock") {
    result = "Computer wins!";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    result = "Computer wins!";
  } else if (userChoice === "paper" && computerChoice === "paper") {
    result = "It's a tie";
  } else if (userChoice === "scissor" && computerChoice === "paper") {
    result = "You win!";
  } else if (userChoice === "rock" && computerChoice === "scissor") {
    result = "You win!";
  } else if (userChoice === "paper" && computerChoice === "scissor") {
    result = "Computer wins!";
  } else if (userChoice === "scissor" && computerChoice === "scissor") {
    result = "It's a tie!";
  }
  $(".result").text(result);
});




