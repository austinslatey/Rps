//variables to set up for interaction with index.html
var userInputEl = document.getElementById('user-input');
var computerInputEl = document.getElementById('computer');
var submitBtn = document.getElementById("submit");

const getUsersChoice = userInput => {
    userInput = userInput.toLowerCase(); 
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error!');
  }
  };
  
  const getComputersChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0: 
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors'; 
    }
  };

  
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'It\'s a tie';
    } else {
      if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'you won';
        } else {
          return 'Congrats you won'
        }
      }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'sorry the Ai won';
    } else {
      return 'congrats you won';
    } 
    }  
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'sorry comp won';
    } else {
      return 'congrats';
    }
  }
    }
  };

  
  
  const playGame = () => {
    const userChoice = getUsersChoice('paper');
   const computerChoice = getComputersChoice();
    console.log('you Threw ' + userChoice);
    console.log('the computer threw ' + computerChoice);
  
  };
  
  playGame()