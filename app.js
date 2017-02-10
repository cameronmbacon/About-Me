'use strict';

var userGuess = '';
var totalScore = 0;
var randNumAnswer = Math.floor(Math.random() * 14);
var attemptsForSix = 4;
var attemptsForSeven = 6;
var resultsToPage = document.getElementById('gameContent');
var resultsString = '';

var questionOne = '1. Is Cameron from Lake Stevens, WA?';
var questionTwo = '2. Does Cameron have a dog?';
var questionThree = '3. Does Cameron love to play guitar?';
var questionFour = '4. Does Cameron currently live in Cameroon?';
var questionFive = '5. Is Cameron currently learning HTML/CSS and JavaScript?';
var questionSix = 'Hmm...I\'m thinking of a number a number between 1 and 13. Can you guess it? You have 4 tries! Go!';
var questionSeven = 'Can you guess one of my top 3 favorite animals? You get 6 chances';

var welcomeMessage = 'Hello, this is Cameron\'s Guessing Game. Press \'OK\' if you would like to play.';
var messageOne = 'Great! Before we get started, what is your name?';
var messageTwo = 'Good to meet you, ' + userName + '! The first 5 questions are yes/no questions. Please respond with \'Y\' or \'N\'.';
var messageThree = 'You guessed a little too high. ' + attemptsForSix + ' attempts remaining.';
var messageFour = 'You guessed a little too low. ' + attemptsForSix + ' attempts remaining.';
var messageFive = 'Sorry, that\'s not one of them. ' + attemptsForSeven + ' remaining.';
var noPlayMessage = 'Alright. Well, that\'s okay I guess...';
var goodByeMessage = 'I hope you enjoyed Cameron\'s Guessing Game. Thank you for playing and do come back!';
var correctMessage = 'Correct!';
var wrongMessage = 'Wrong!';

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven];
var answers = ['Y', 'N', 'Y', 'N', 'Y', randNumAnswer, 'WOLF BEAR MANBEARPIG'];
var animalOne = answers[6].slice(0, 4);
var animalTwo = answers[6].slice(5, 9);
var animalThree = answers[6].slice(10, 20);

//start of the guessing game
var userConfirm = confirm(welcomeMessage);

if (userConfirm) {
  var userName = prompt(messageOne);
  alert(messageTwo);
} else {
  alert(noPlayMessage);
}

for (var i = 0; i < answers.length; i++) {
  var isValid = false;
  do {
    userGuess = prompt(questions[i]);
    if (i < 5) {
      if (userGuess.toUpperCase().charAt(0) === 'Y' || userGuess.toUpperCase().charAt(0) === 'N') {
        isValid = true;
      }
    } else if (i === 5) {
      if (!isNaN(parseInt(userGuess, 10))) {
        userGuess = Math.floor(userGuess);
        isValid = true;
      }
    } else if (i === 6) {
      isValid = true;
    }
  } while(!isValid);

  if (i < 5) {
    if (userGuess.toUpperCase().charAt(0) === answers[i]) {
      alert(correctMessage);

      resultsString += 'question: ' + questions[i] + '\nanswer: ' + answers[i] + '\nresult: ' + correctMessage + '\n\n';

      console.log('question: ' + questions[i] + '\nanswer: ' + answers[i] + '\nresult: ' + correctMessage);

      totalScore++;
    } else {
      alert(wrongMessage);

      resultsString += 'question: ' + questions[i] + '\nanswer: ' + answers[i] + '\nresult: ' + wrongMessage + '\n\n';

      console.log('question: ' + questions[i] + '\nanswer: ' + answers[i] + '\nresult: ' + wrongMessage);
    }
  } else if (i === 5) {
    var randGameComplete = false;
    do {
      if (userGuess === randNumAnswer) {
        alert(correctMessage);

        resultsString += 'question: ' + questions[i] + '\nanswer: ' + answers[i] + '\nresult: ' + correctMessage + '\n\n';

        console.log('question: ' + questions[i] + '\nanswer: ' + answers[i] + '\nresult: ' + correctMessage);

        randGameComplete = true;

        totalScore++;
      } else if ((attemptsForSix - 1) > 0) {
        attemptsForSix--;
        if (userGuess > randNumAnswer) {
          alert(messageThree);
        } else {
          alert(messageFour);
        }

        var isValidNum = false;

        do {
          userGuess = prompt(questions[i]);

          if (!isNaN(parseInt(userGuess, 10))) {
            userGuess = Math.floor(userGuess);
            isValid = true;
          }
        } while (!isValidNum);
      } else {
        alert(wrongMessage);

        resultsString += 'question: ' + questions[i] + '\nanswer: ' + answers[i] + '\nresult: ' + wrongMessage + '\n\n';

        console.log('question: ' + questions[i] + '\nanswer: ' + answers[i] + '\nresult: ' + wrongMessage);

        randGameComplete = true;
      }
    } while (!randGameComplete);
  } else if (i === 6) {
    console.log(animalOne + '\n' + animalTwo + '\n' + animalThree);

    var sevenComplete = false;

    do {
      if (userGuess.toUpperCase() === animalOne || userGuess.toUpperCase() === animalTwo || userGuess.toUpperCase() === animalThree) {
        alert(correctMessage);

        resultsString += 'question: ' + questions[i] + '\nanswer: ' + answers[i] + '\nresult: ' + correctMessage + '\n\n';

        console.log('question: ' + questions[i] + '\nanswer: ' + answers[i] + '\nresult: ' + correctMessage);

        totalScore++;
      } else if ((attemptsForSeven - 1) > 0) {
        attemptsForSeven--;
        alert(messageFive);
        sevenComplete = true;
      }
    } while (!sevenComplete);
  } else {
    alert(wrongMessage);

    resultsString += 'question: ' + questions[i] + '\nanswer: ' + answers[i] + '\nresult: ' + wrongMessage + '\n\n';

    console.log('question: ' + questions[i] + '\nanswer: ' + answers[i] + '\nresult: ' + wrongMessage);
    sevenComplete = true;
  }
}

resultsString += 'You answered ' + totalScore + ' out of ' + questions.length + '!';

resultsToPage.textContent = resultsString;

alert(goodByeMessage);
