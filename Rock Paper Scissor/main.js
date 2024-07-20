const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase(); 
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor') {
      return userInput;
    } else if(userInput === 'bomb'){
      return 'bomb';
    } else {
      console.log('Not a valid input.'); 
    }
  }
  
  const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3);
    switch(randomNum){
      case 0: return 'rock';
      case 1: return 'paper';
      case 2: return 'scissor';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return 'User Won with a bomb!';
    }
    if (userChoice === computerChoice) {
      return `User picked: ${userChoice} | Computer picked: ${computerChoice}. Result: Tie.`;
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return `User picked: ${userChoice} | Computer picked: ${computerChoice}. Result: PC Won! User Lost.`;
      } else {
        return `User picked: ${userChoice} | Computer picked: ${computerChoice}. Result: User Won! PC Lost.`;
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissor') {
        return `User picked: ${userChoice} | Computer picked: ${computerChoice}. Result: PC Won! User Lost.`;
      } else {
        return `User picked: ${userChoice} | Computer picked: ${computerChoice}. Result: User Won! PC Lost.`;
      }
    }
    if (userChoice === 'scissor') {
      if (computerChoice === 'rock') {
        return `User picked: ${userChoice} | Computer picked: ${computerChoice}. Result: PC Won! User Lost.`;
      } else {
        return `User picked: ${userChoice} | Computer picked: ${computerChoice}. Result: User Won! PC Lost.`;
      }
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('BOMB');
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    console.log(result);
  }
  
  playGame();
  