'use strict';

// Variables necessary for game mechanics
var userConfirm = false;
var userGuess = '';
var userName = '';
var totalScore = 0;
var randNumAnswer = Math.floor((Math.random() * 14) + 1);

// Variables used to print user's game results to the page
var resultsToPage = document.getElementById('gameContent');
var resultsString = '';

// Guessing Game questions stored in variables
var questionOne = '1. Is Cameron from Lake Stevens, WA?';
var questionTwo = '2. Does Cameron have a dog?';
var questionThree = '3. Does Cameron love to play guitar?';
var questionFour = '4. Does Cameron currently live in Cameroon?';
var questionFive = '5. Is Cameron currently learning HTML/CSS and JavaScript?';
var questionSix = 'Hmm...I\'m thinking of a number a number between 1 and 13. Can you guess it? You have 4 tries! Go!';
var questionSeven = 'Can you guess one of my top 3 favorite animals? You get 6 chances';

// Miscellaneous messages to the user and answer responses
var welcomeMessage = 'Hello, this is Cameron\'s Guessing Game. Press \'OK\' if you would like to play.';
var messageOne = 'Great! Before we get started, what is your name?';
var noPlayMessage = 'Alright. Well, that\'s okay I guess...';
var goodByeMessage = 'I hope you enjoyed Cameron\'s Guessing Game. Thank you for playing and do come back!';
var correctMessage = 'Correct!';
var wrongMessage = 'Wrong!';

// Questions and answers placed into seperate arrays
var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven];
var answers = ['Y', 'N', 'Y', 'N', 'Y', randNumAnswer, 'WOLF BEAR MANBEARPIG'];

// Sliced answers from answers array and placed them into variables
var animalOne = answers[6].slice(0, 4);
var animalTwo = answers[6].slice(5, 9);
var animalThree = answers[6].slice(10, 20);

//function declarations below
function getUserConfirm(msg1) {
  var wantsToPlay = confirm(msg1);
  if (wantsToPlay) {
    console.log('user wants to play.');
    return wantsToPlay;
  } else {
    alert('Come on! Give it a try!');
  }
}

/**/
function getUserName(msg1) {
  var name = prompt(msg1);
  console.log('user\'s name is ' + name + '.');
  var messageTwo = 'Good to meet you, ' + name + '! The first 5 questions are yes/no questions. Please respond with \'Y\' or \'N\'.';
  alert(messageTwo);
  return name;
}

/**/
function displayQuestion(question) {
  var guess = prompt(question);
  return guess;
}

/**/
function isValidResponse(guess, index, question) {
  var valid = false;
  do {
    if (index < 5) {
      if (guess.toUpperCase() === 'Y' || guess.toUpperCase() === 'N') {
        valid = true;
      } else {
        alert('Please enter a valid response.');
        displayQuestion(question);
      }
    } else if (index === 5) {
      if (!isNaN(parseInt(guess, 10))) {
        //guess = Math.floor(guess);
        valid = true;
      } else {
        alert('Please enter a valid response.');
        displayQuestion(question);
      }
    } else if (index === 6) {
      valid = true;
    }
  } while (!valid);

  return valid;
}

/**/
function compareAnswer(guess, question, answer, msg1, msg2, index) {
  if (guess.toUpperCase() === answer) {
    alert(msg1);
    totalScore++;
    console.log(question + '\n' + userName + ' answered: ' + guess + '\nCorrect answer: ' + answer + '\n' + userName + '\'s score: ' + totalScore);
    resultsString += '<p>' + question + '<br />' + userName + ' answered: ' + guess + '<br />Correct answer: ' + answer + '<br />' + userName + '\'s score: ' + totalScore + '<br /><br /></p>';
  } else if (index === 5) {
    randomNumberGame(userGuess, questions[i], randNumAnswer, correctMessage);
  } else if (index === 6) {
    multChoiceGame(userGuess, questions[i], animalOne, animalTwo, animalThree, correctMessage, messageFive);
  } else {
    alert(msg2);
    console.log(question + '\n' + userName + ' answered: ' + guess + '\nCorrect answer: ' + answer + '\n' + userName + '\'s score: ' + totalScore);
    resultsString += '<p>' + question + '<br />' + userName + ' answered: ' + guess + '<br />Correct answer: ' + answer + '<br />' + userName + '\'s score: ' + totalScore + '<br /><br /></p>';
  }
}

/**/
function randomNumberGame(guess, question, answer, msg1) {
  var attempts = 4;
  if (attempts > 0) {
    if (guess === answer) {
      alert(msg1);
      totalScore++;
      console.log(question + '\n' + userName + ' answered: ' + guess + '\nCorrect answer: ' + answer + '\n' + userName + '\'s score: ' + totalScore);
    } else if (guess > answer) {
      attempts--;
      alert('You guessed a little too high. ' + attempts + ' attempts remaining.');
      console.log('User has ' + attempts + ' attempts left.');
    } else if (guess < answer) {
      attempts--;
      alert('You guessed a little too low. ' + attempts + ' attempts remaining.');
      console.log('User has ' + attempts + ' attempts left.');
    }
  } else {
    alert('Out of attempts. The correct answer was: ' + answer + '.');
    console.log('User is out of attempts.');
    console.log(question + '\n' + userName + ' answered: ' + guess + '\nCorrect answer: ' + answer + '\n' + userName + '\'s score: ' + totalScore);
    resultsString += '<p>' + question + '<br />' + userName + ' answered: ' + guess + '<br />Correct answer: ' + answer + '<br />' + userName + '\'s score: ' + totalScore + '<br /><br /></p>';
  }
}

/**/
function multChoiceGame(guess, question, answer1, answer2, answer3, msg1, msg2) {
  var attempts = 6;
  console.log(answer1 + ' ' + answer2 + ' ' + answer3 + ' ');
  if (attempts > 0) {
    if (guess.toUpperCase() === answer1 || guess.toUpperCase() === answer2 || guess.toUpperCase() === answer3) {
      alert(msg1);
      totalScore++;
      console.log(question + '\n' + userName + ' answered: ' + guess + '\nCorrect answers: ' + answer + '\n' + userName + '\'s score: ' + totalScore);
      resultsString += '<p>' + question + '<br />' + userName + ' answered: ' + guess + '<br />Correct answer: ' + answer + '<br />' + userName + '\'s score: ' + totalScore + '<br /><br /></p>';
    } else {
      attempts--;
      alert('Sorry, that\'s not one of them. ' + attempts + ' remaining.');
      console.log('User has ' + attempts + ' attempts left.');
    }
  } else {
    alert('Out of attempts. The correct answers were: ' + answer + '.');
    console.log('User is out of attempts.');
    console.log(question + '\n' + userName + ' answered: ' + guess + '\nCorrect answers: ' + answer1 + ' ' + answer2 + ' ' + answer3 + '\n' + userName + '\'s score: ' + totalScore);
    resultsString += '<p>' + question + '<br />' + userName + ' answered: ' + guess + '<br />Correct answer: ' + answer + '<br />' + userName + '\'s score: ' + totalScore + '<br /><br /></p>';
  }
}

/**/
function writeToPage(element, content) {
  element.innerHTML = content;
}
// End of function declarations

//sTART OF GAME

userConfirm = getUserConfirm(welcomeMessage);
userName = getUserName(messageOne);

// The game is controlled by a for loop
for (var i = 0; i < answers.length; i++) {
  userGuess = displayQuestion(questions[i]);

  var isValid = isValidResponse(userGuess, i, questions[i]);

  compareAnswer(userGuess, questions[i], answers[i], correctMessage, wrongMessage);
}

// Writes the game results to the web page and thanks user for playing
writeToPage(resultsToPage, resultsString);
alert(goodByeMessage);

//END OF GAME.
