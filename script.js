const options = ["rock", "paper", "scissor"];

function getComputerChoice()
{
   const choice = options[Math.floor(Math.random()*options.length)];
   
   // console.log(choice);
   return choice;
}

function checkWinner(playerSelection, computerSelection)
{
   if(playerSelection == computerSelection)
   {
      return "Tie";
   }
   else if(
      (playerSelection == "rock" && computerSelection =="scissor") 
      || 
      (playerSelection== "scissor" && computerSelection =="paper") 
      || (playerSelection=="paper" && computerSelection == "rock"))
      {
         return "Win";
      }
   else
   {
      return "Loss"
   }
}

function playRound(playerSelection, computerSelection)
{
   const getResult = checkWinner(playerSelection, computerSelection);
   if(getResult == "Tie")
   {
      console.log("Its a tie");
   }
   else if(getResult == "Win")
   {
      console.log(`You win! ${playerSelection} beats ${computerSelection} `);
   }
   else
   {
      console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
   }
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function getPlayerChoice()
{
   let validInput = false;

   while(validInput == false)
   {
      const choice = prompt("Rock Paper Scissor");

      if(choice == null)
      {
         continue;
      }

      const choiceInLower = choice.toLowerCase();

      if(options.includes(choiceInLower))
      {
         validInput = true;
         return choiceInLower;
      }
   }
}

function game()
{
   let scorePlayer = 0;
   let scoreCpu = 0;
   for(let i = 0; i< 5; i++)
   {
      
      console.log(`Round ${i+1}`);
      const playerSelection = getPlayerChoice();
      const computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);
      if(checkWinner(playerSelection, computerSelection) == "Win")
      {
         scorePlayer++;
      }
      else if(checkWinner(playerSelection, computerSelection) == "Lose")
      {
         scoreCpu++;
      }
   }
   console.log("Game Over!");
   if(scorePlayer == scoreCpu)
   {
      console.log("Its a TIE!");
   }
   else if(scorePlayer > scoreCpu)
   {
      console.log("You Win!");
   }
   else 
   {
      console.log("You Lose!");
   }
}

game();