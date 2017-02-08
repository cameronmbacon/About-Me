'use strict';

var questionOne = '1. Is Cameron from Lake Stevens, WA?';
var questionTwo = '2. Does Cameron Have a dog?';
var questionThree = '3. Does Cameron play electric guitar all the time?';
var questionFour = '4. Does Cameron currently live in Cameroon?';
var questionFive = '5. Is Cameron currently learning HTML/CSS and Javascript?';
var userAnswer;

var userChoice = prompt('Hello! Would you like to play a guessing game involving questions all about me? Type \'Y\' to play or type \'N\' if you do not wish to play. Enter your choice into the box below and click on \'Ok\'.');

if (userChoice.toUpperCase() === 'Y') {
  alert('Awesome! Here\'s how the game is going to work: there are five yes/no questions about Cameron Bacon that you must answer. Just follow to on-screen commands for each question and do your best! Press \'Ok\' to continue.');
} else {
  alert('Too bad! If this is your first time playing Cameron\'s Guessing Game...you have to play.');
}

userAnswer = prompt(questionOne);

if (userAnswer.toUpperCase().charAt(0) === 'Y') {
  console.log('Correct!');
} else {
  console.log('Wrong!');
}

document.write(questionOne + userAnswer + '<br>');

userAnswer = prompt(questionTwo);

if (userAnswer.toUpperCase().charAt(0) === 'N') {
  console.log('Correct!');
} else {
  console.log('Wrong!');
}

document.write(questionTwo + userAnswer + '<br>');

userAnswer = prompt(questionThree);

if (userAnswer.toUpperCase().charAt(0) === 'Y') {
  console.log('Correct!');
} else {
  console.log('Wrong!');
}

document.write(questionThree + userAnswer + '<br>');

userAnswer = prompt(questionFour);

if (userAnswer.toUpperCase().charAt(0) === 'N') {
  console.log('Correct!');
} else {
  console.log('Wrong!');
}

document.write(questionFour + userAnswer + '<br>');

userAnswer = prompt(questionFive);

if (userAnswer.toUpperCase().charAt(0) === 'Y') {
  console.log('Correct!');
} else {
  console.log('Wrong!');
}

document.write(questionFive + userAnswer + '<br>');
