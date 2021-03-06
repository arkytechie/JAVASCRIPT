'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = `πCorrect Number!π`;
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    //document.querySelector('.message').textContent = `β No Number!`;
    displayMessage('β No Number!');
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = `πCorrect Number!π`;
    displayMessage('πCorrect Number!π');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //guess > secretNumber ? `π Too High!` : `π Too Low!`;
      displayMessage(guess > secretNumber ? `π Too High!` : `π Too Low!`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = `π₯ You lost the game!`;
      displayMessage(`π₯ You lost the game!`);
      document.querySelector('.score').textContent = 0;
    }
  }
  /*
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `π Too High!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `π₯ You lost the game!`;
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `π Too Low!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `π₯ You lost the game!`;
      document.querySelector('.score').textContent = 0;
    }
  }

*/
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //document.querySelector('.message').textContent = `Start guessing...`;
  displayMessage(`Start guessing...`);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
