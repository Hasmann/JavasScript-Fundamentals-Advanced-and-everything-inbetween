'use strict';

const tateBtn = document.querySelector('#Button1');

const reginBtn = document.querySelector('#Button2');

const scoreTate = document.querySelector('#scoreTate');

const scoreReginald = document.querySelector('#scoreReginald');

const message = document.querySelector('#message');

let register = 0;

let countTate = 0;

let countReginald = 0;

tateBtn.addEventListener('click', function () {
  register++;
  console.log('from 1 this is regisster', register);
  if (register <= 100) {
    scoreTate.innerHTML = countTate++;
    if (countReginald > countTate) {
      message.innerHTML = 'Reginald IS Winning The ELECTION';
    } else {
      message.innerHTML = 'TATE IS Winning The ELECTION';
    }
  } else {
  }
});

reginBtn.addEventListener('click', function () {
  register++;

  console.log('from 2 this is regisster', register);
  if (register <= 100) {
    scoreReginald.innerHTML = countReginald++;
    if (countReginald > countTate) {
      message.innerHTML = 'Reginald wins The ELECTION';
    } else {
      message.innerHTML = 'TATE wins The ELECTION';
    }
  } else {
  }
});
