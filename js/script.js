$(".computerChoicet").hide();

let result;
let won;
let lost;
let tie;

function getRandomComputerChoice(){
  let computerChoice;
  let computerOutput= Math.ceil(Math.random() * 3);
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
  return computerChoice;
}

function chooseWinner(userChoice, computerChoice){
  let won= 0;
  let lost= 0;
  let tie= 0;
  
    // tie = tie + 1;
    // $(".resultt").text("It is a tie");
    // $(".tie").text(tie);
  
    if(userChoice.toLowerCase() === computerChoice.toLowerCase()){}
  
  if (userChoice === "rock" && computerChoice === "rock") {
    tie = tie + 1;
    $(".resultt").text("It is a tie");
    $(".tie").text(tie);
    
  } else if (userChoice === "paper" && computerChoice === "rock") {
       won= won + 1;
    (".resultt").text("You win");
    $(".won").text(won);  
    
  } else if (userChoice === "scissor" && computerChoice === "rock") {
    lost= lost + 1;
   $(".resultt").text("You loss to a computer HAHAHA");
  $(".lost").text(lost);  
    
  } else if (userChoice === "rock" && computerChoice === "paper") {
 lost= lost + 1;
    $(".resultt").text("You loss to a computer HAHAHA");
    $(".lost").text(lost); 
    
  } else if (userChoice === "paper" && computerChoice === "paper") {
    tie = tie + 1;
    $(".resultt").text("It is a tie");
    $(".tie").text(tie);    
    
  } else if (userChoice === "scissor" && computerChoice === "paper") {
    won= won + 1;    
    $(".resultt").text("You win");
    $(".won").text(won);
    
  } else if (userChoice === "rock" && computerChoice === "scissor") {
    won= won + 1;
    $(".resultt").text("You win");
    $(".won").text(won);
    
 } else if (userChoice === "paper" && computerChoice === "scissor") {
     lost= lost + 1;
    $(".resultt").text("You loss to a computer HAHAHA");
    $(".lost").text(lost); 
 } else if (userChoice === "scissor" && computerChoice === "scissor") {
     tie = tie + 1;
    $(".resultt").text("It is a tie");
    $(".tie").text(tie);
  
 } else {
        $(".resultt").text("Not valid input. Check your spelling."); }
}
 
 $(".shoot").click(function () {
     $(".computerChoicet").show(); 
     let computerChoice= getRandomComputerChoice();
     let userChoice= $(".input").val(); 
     let winner= chooseWinner(userChoice, computerChoice);
     $(".userChoicet").text(userChoice);
       tie = tie + 1;
          won= won + 1;
       lost= lost + 1;




});


