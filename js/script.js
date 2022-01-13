let computerOutput= Math.ceil(Math.random() * 3);
let computerChoice;
let result;

  if(computerOutput === 1) {
     computerChoice = "rock";
     $(".computerChoicet").text("Rock");
} else if(computerOutput === 2) {
       computerChoice = "paper";
  $(".computerChoicet").text("Paper");
} else if (computerOutput === 3) {
       computerChoice = "scissor";
  $(".computerChoicet").text("Scissor");
}
 
 $(".shoot").click(function () {
   let userChoice= $(".input").val(); 
   $(".userChoicet").text(userChoice);
   
      console.log("hi"+ userChoice);
   if (userChoice === "rock" && computerChoice === "rock") {
         // result = "It's a tie!";
     $(".resultt").text("It is a tie");
  } else if (userChoice === "paper" && computerChoice === "rock") {
    // result = "You win!";
    $(".resultt").text("You win");
  } else if (userChoice === "scissor" && computerChoice === "rock") {
    // result = "Computer wins!";
    $(".resultt").text("Computer win");
  } else if (userChoice === "rock" && computerChoice === "paper") {
    // result = "Computer wins!";
    $(".resultt").text("Computer win");
  } else if (userChoice === "paper" && computerChoice === "paper") {
    // result = "It's a tie";
    $(".resultt").text("It is a tie");
  } else if (userChoice === "scissor" && computerChoice === "paper") {
    // result = "You win!";
    $(".resultt").text("You win");
  } else if (userChoice === "rock" && computerChoice === "scissor") {
    // result = "You win!";
    $(".resultt").text("You win");
  } else if (userChoice === "paper" && computerChoice === "scissor") {
    // result = "Computer wins!";
    $(".resultt").text("Computer win");
  } else if (userChoice === "scissor" && computerChoice === "scissor") {
    // result = "It's a tie!";
    $(".resultt").text("It is a tie");

  }
      //is there a problem in this line of code?
      // $(".resultt").text(result);

});




