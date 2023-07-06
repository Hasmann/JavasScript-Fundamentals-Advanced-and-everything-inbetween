'use strict';

let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
let current0 = document.querySelector('#current--0');
let current1 = document.querySelector('#current--1');

let message = document.querySelector('.dice');
const btnTip = document.querySelector('.btn--tip');
const btnNew = document.querySelector('.btn--new');

score0.textContent = 0;
score1.textContent = 0;

let activePlayer = 0;
let tip = 0;
let total = [0, 0];

let play = true;

function val() {
  document.querySelector(`#score--${activePlayer}`).textContent = tip;
  total[activePlayer] += tip;
  document.querySelector(`#current--${activePlayer}`).textContent =
    total[activePlayer];

  if (total[activePlayer] >= 1000) {
    play = false;
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.add('player--winner');

    document
      .querySelector(`.player--${activeplayer}`)
      .classList.remove('player--active');

    document
      .querySelector(`.winner${activeplayer}`)
      .classList.remove(`winner--${activeplayer}`);
  }
}

btnTip.addEventListener('click', function () {
  let tipnumber = document.querySelector('.btn--roll').value;

  if (play) {
    if (!tipnumber) {
      message.textContent = 'No Value Entered';
    } else {
      message.textContent = 'Tip⚔Wars';
      if (tipnumber <= 200) {
        tip = (20 / 100) * tipnumber;
        val();
      } else {
        tip = (30 / 100) * tipnumber;
        val();
      }

      activePlayer = activePlayer === 0 ? 1 : 0;
      document.querySelector(`#score--${activePlayer}`).textContent = 0;
    }
  }
});

function pageReload() {
  location.reload();
}
btnNew.addEventListener('click', pageReload);
