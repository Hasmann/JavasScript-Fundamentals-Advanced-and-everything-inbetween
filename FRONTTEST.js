'use strict';

const sub = document.querySelector('.sub');

sub.addEventListener('click', function () {
  const val = document.querySelector('.inp').value;

  if (val && val.length < 20) {
    console.log(val.length);
    const newly = document.createElement('div');

    newly.classList.add('mainBeef');

    newly.innerHTML = `<span class="exit">X</span>
    <h1 class="mainSauce">${val.replace(val[0], val[0].toUpperCase())}</h1>`;

    const bo = document.querySelector('.mainEnter');

    bo.append(newly);
  }

  const del = document.querySelectorAll('.exit');
  console.log(del);

  for (const lp of del) {
    console.log('ex ex ex');
    lp.addEventListener('click', function (e) {
      const found = e.target.closest('.mainBeef');
      found.remove();
    });
  }
});

// function createEle(pasadena) {
//   const newly = document.createElement('div');

//   newly.classList.add('mainBeef');

//   newly.innerHTML = ` <span class="exit">X</span>
// <h1 class="mainSauce">${pasadena}</h1>`;

//   const bo = document.querySelector('.mainEnter');

//   bo.append(newly);
// }

// createEle('Hello There');
// createEle('You.');
// createEle('Me.');
