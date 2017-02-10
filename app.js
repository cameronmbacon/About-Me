'use strict';

var welcomeMessage = 'Hello, this is Cameron\'s Guessing Game. Press \'OK\' if you would like to play.';

var questionOne = '1. Is Cameron from Lake Stevens, WA?';
var questionTwo = '2. Does Cameron have a dog?';
var questionThree = '3. Does Cameron love to play guitar?';
var questionFour = '4. Does Cameron currently live in Cameroon?';
var questionFive = '5. Is Cameron currently learning HTML/CSS and JavaScript?';
var questionSix = 'Hmm...I\'m thinking of a number a number between 1 and 13. Can you guess it? You have 4 tries! Go!';
var questionSeven = 'Can you guess one of my top 3 favorite animals? You get 6 chances';

var correctMessage = 'Correct!';
var wrongMessage = 'Wrong!';

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven];
var answers = ['Y', 'N', 'Y', 'N', 'Y'];
var responses = []; //will push user responses into this array

var userChoice = confirm(welcomeMessage);
