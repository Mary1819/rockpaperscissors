$(".choices").hide();


  
  
   let computerOutput= Math.ceil(Math.random() * 3);
  // write the numbers as rock paper scissors
  if(computerOutput === 1) {
    let computerInput = "rock;"
    (".computerChoice").text("rock");
} else if(computerOutput === 2) {
      let computerInput = "paper;"
    (".computerChoice").text("paper");
} else if (computerOutput === 3) {
      let computerInput = "sicssor;"
  (".computerChoice").text("scissor")
}
 
 $(".shoot").click(function () {
   let userInput= $(".input").val();
   let computerRock= "rock";
   let computerPaper= "paper";
   let computerScissor= "scissor"
   
   $(".choices").show();
   $(".userChoice").text(userInput);
   
   // if( userInput === computerRock ){
    if(userInput === computerOutput){
       // computerRock || userInput === computerPaper || userInput === computerScissor) {
     $("body").css("background-color","green");
     $(".result").text("It's a tie!!!");
     
     
     
   } else{
          $("body").css("background-color","red");
          $(".result").text("You win!!!");

   }
 })
  



