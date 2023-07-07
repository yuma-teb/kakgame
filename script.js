'use strict';

const secreteNumber = document.getElementById('number');
secreteNumber.innerHTML = Math.floor(Math.random() * 21);
const message = document.getElementById('guessing-message');

// create reset button
const again = document.getElementById('again');
// create variable to store score
const labelScore = document.getElementById('score');
const labelHighScore = document.getElementById('highscore');
let highScore = 0;
let score = 20;

// create an event for the button

const buttonchecking = document.getElementById('button-checking');
const inputNumber = document.getElementById('input-number');

console.log(secreteNumber.innerHTML);
// create an event to get the value from clicking the button
buttonchecking.addEventListener('click', () => {
  console.log(typeof secreteNumber.innerHTML);
  console.log(typeof inputNumber.value);
  if (!inputNumber.value) {
    document.querySelector('body').style.backgroundColor = 'red';
    return (message.innerHTML = 'No input!');
  } else if (secreteNumber.innerHTML == inputNumber.value) {
    document.querySelector('body').style.backgroundColor = 'green';
    score = score + 1;
    labelScore.innerHTML = score;
    highScore = highScore + 20;
    labelHighScore.innerHTML = highScore;
    return (message.innerHTML = 'Congratulation!');
  } else {
    if (score > 0) {
      document.querySelector('body').style.backgroundColor = 'red';
      score = score - 1;
      labelScore.innerHTML = score;
      return (message.innerHTML = 'Try again ');
    } else {
      return (message.innerHTML = 'You lose the game😝🙂🤪🤪😝😛😋😋😛');
    }
  }
});

// if user click the button reset every thing
again.addEventListener('click', () => {
  if (again) {
    message.innerHTML = 'Start guessing...';
    labelScore.innerHTML = 20;
    labelHighScore.innerHTML = 0;
    document.querySelector('body').style.backgroundColor = 'black';
    inputNumber.value = '';
  }
});
