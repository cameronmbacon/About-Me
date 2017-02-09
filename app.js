'use strict';

var questionOne = '1. Is Cameron from Lake Stevens, WA?';
var questionTwo = '2. Does Cameron Have a dog?';
var questionThree = '3. Does Cameron love to play guitar?';
var questionFour = '4. Does Cameron currently live in Cameroon?';
var questionFive = '5. Is Cameron currently learning HTML/CSS and JavaScript?';
var userName;
var userAnswer;

userName = prompt('Please enter your first name in the text field below.');

var userChoice = prompt('Hello, ' + userName + '! Would you like to play a guessing game involving questions all about me? Type \'Y\' to play or type \'N\' if you do not wish to play. Enter your choice into the box below and click \'OK\'.');

if (userChoice.toUpperCase().charAt(0) === 'Y') {
  alert('Awesome! Here\'s how the game is going to work: there are five yes/no questions about Cameron Bacon that you must answer. Just follow to on-screen commands for each question and do your best! Press \'OK\' to continue.');
} else {
  alert('Too bad! If this is your first time playing Cameron\'s Guessing Game...you have to play.');
}

console.log(questionOne);
userAnswer = prompt(questionOne);

if (userAnswer.toUpperCase().charAt(0) === 'Y') {
  console.log('Correct!');
} else {
  console.log('Wrong!');
}

document.write(questionOne + userAnswer + '<br>');

console.log(questionTwo);
userAnswer = prompt(questionTwo);

if (userAnswer.toUpperCase().charAt(0) === 'N') {
  console.log('Correct!');
} else {
  console.log('Wrong!');
}

document.write(questionTwo + userAnswer + '<br>');

console.log(questionThree);
userAnswer = prompt(questionThree);

if (userAnswer.toUpperCase().charAt(0) === 'Y') {
  console.log('Correct!');
} else {
  console.log('Wrong!');
}

document.write(questionThree + userAnswer + '<br>');

console.log(questionFour);
userAnswer = prompt(questionFour);

if (userAnswer.toUpperCase().charAt(0) === 'N') {
  console.log('Correct!');
} else {
  console.log('Wrong!');
}

document.write(questionFour + userAnswer + '<br>');

console.log(questionFive);
userAnswer = prompt(questionFive);

if (userAnswer.toUpperCase().charAt(0) === 'Y') {
  console.log('Correct!');
} else {
  console.log('Wrong!');
}

document.write(questionFive + userAnswer + '<br>');
