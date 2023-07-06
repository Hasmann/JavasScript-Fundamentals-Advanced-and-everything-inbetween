'use strict';

const score01El = document.querySelector('#score--0');

const score02El = document.querySelector('#score--1');

const dice = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');

const btnRoll = document.querySelector('.btn--roll');

const btnHold = document.querySelector('.btn--hold');

const currentScore = document.querySelector('#current--0');

const currentScore2 = document.querySelector('#current--1');
const player0style = document.querySelector('.player--0');
const player1style = document.querySelector('.player--1');

score01El.textContent = 0;
score02El.textContent = 0;
const score = [0, 0];
let activeplayer = 0;

dice.classList.add('hidden');

document.querySelector('.winner0').classList.add('winner--0');

let current = 0;
let game = true;

function switchplayers() {
  document.getElementById(`current--${activeplayer}`).textContent = 0;

  activeplayer = activeplayer === 0 ? 1 : 0;
  current = 0;
  player0style.classList.toggle('player--active');
  player1style.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
  if (game) {
    let roll = Math.trunc(Math.random() * 6) + 1;

    dice.classList.remove('hidden');

    dice.src = `dice-${roll}.png`;

    if (roll !== 1) {
      current += roll;
      document.getElementById(`current--${activeplayer}`).textContent = current;
      // document.getElementById(`score--${activeplayer}`).textContent = current;
    } else {
      switchplayers();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (game) {
    score[activeplayer] += current;

    document.getElementById(`score--${activeplayer}`).textContent =
      score[activeplayer];

    if (score[activeplayer] >= 20) {
      game = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');

      document
        .querySelector(`.winner${activeplayer}`)
        .classList.remove(`winner--${activeplayer}`);
    } else {
      switchplayers();
    }
  }
});

btnNew.addEventListener('click', function () {
  location.reload();
});

// const number = {
//   age: 10,
//   name: 'hassan',
// };

// console.log(number.age);

//to call a function inside a fuction call it before the return statement of the parent function😊

// function age() {
//   const age = 32;

//   function calcage() {
//     const calc = age - 10;
//     console.log(calc);
//   }
//   calcage();
//   return 'hello';
// }

// console.log(age());
