let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () =>{
  return Math.floor(Math.random()*9);
}

const compareGuesses = (user,computer,target) =>{
  let userGuess=Math.abs(user-target);
  let compGuess=Math.abs(computer-target);

  return userGuess <= compGuess;
}

const updateScore = (str) =>{
  if(str==='human'){
    humanScore+=1
  }else computerScore+=1;
}

const advanceRound = () =>{
  currentRoundNumber+=1;
}

