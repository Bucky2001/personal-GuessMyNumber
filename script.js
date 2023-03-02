'use strict';

let sNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const value = Number(document.querySelector('.guess').value);
  // if (score > 1) {
  if (!value) {
    document.querySelector('.message').textContent = 'No guess';
  } else if (value === sNumber) {
    document.querySelector('.number').textContent = value;
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    console.log(`${value} "number"`);
    if (document.querySelector('.highscore').textContent < score) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (value != sNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      console.log(`${value} "number"`);
      document.querySelector('.message').textContent =
        value > sNumber ? 'too high..' : 'too low..';
    } else {
      document.querySelector('.message').textContent = 'You Loss the game';
      document.querySelector('.score').textContent = 0;
    }
  }

  //  else if (value > sNumber) {
  //     document.querySelector('.message').textContent = 'too high..';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     console.log(`${value} "number"`);
  //   } else if (value < sNumber) {
  //     document.querySelector('.message').textContent = 'too low..';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     console.log(`${value} "number"`);
  //   }
  // } else {
  //   document.querySelector('.message').textContent = 'You Loss the game';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   console.log(`${value} "number"`);
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  sNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 20;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  document.querySelector('.number').style.width = '15rem';
});
