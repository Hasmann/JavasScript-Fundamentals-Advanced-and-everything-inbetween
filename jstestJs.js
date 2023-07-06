'use strict';

alert('hello there');
const num = document.querySelector('.number');
const ans = prompt('ENTER AN HOUR');
let sumb = Math.floor(ans * 3600);
const myInterval = setInterval(function () {
  if (sumb === 0) {
    clearInterval(myInterval);
  }
  if (sumb >= 3600) {
    sumb / 3600;
  }
  num.textContent = `${Math.floor(sumb / 60)}:${Math.floor(sumb % 60)}`;
  sumb--;
}, 1000);

// const divs = document.createElement('div');
// num.innerHTML = '<p>HELLO THEREfefe</p>';

// num.insertAdjacentElement('afterend', divs);
