'use strict';

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!!";

// document.querySelector(".number").textContent = 13;

// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;

let rand = Math.floor(Math.random() * 20) + 1;

let twen = 20 - 1;
let highscore = 0;
let myscore = document.querySelector('.score');

let message = document.querySelector('.message');

document.querySelector('.check').addEventListener('click', function () {
  let input = document.querySelector('.guess').value;

  if (!input) {
    message.textContent = '⛔ No Number Entered';
  } else if (twen > 0) {
    if (input == rand) {
      message.textContent = '🎉Hurray!! You Guessed The Right Number';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (twen > highscore) {
        highscore = twen + 1;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (input > rand) {
      message.textContent = 'Your Number Is Greater💹';
      myscore.textContent = twen--;
    } else if (input < rand) {
      message.textContent = 'Your Number Is Lesser👇';
      myscore.textContent = twen--;
    }
  } else if (twen <= 1) {
    message.textContent = 'Game Over please Try Again♾';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  twen = 20;
  myscore.textContent = twen;
  rand = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = rand;
  message.textContent = 'Start Guessing';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = null;
});
