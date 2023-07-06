// 'use strict';

// // const submit = document.querySelector('.submit');
// const display = document.querySelector('.display');

// // const hour = +prompt('enter your hour');
// // console.log(hour);
// // let minute = +prompt('enter your hour');
// // console.log(minute);
// // let combine = +(hour * 3600 + minute * 60);
// // submit.addEventListener('click', function () {
// //   console.log(hour);

// //   setInterval(function () {
// //     let mhour = Math.trunc(combine / 3600);
// //     let mMinutes = Math.trunc(combine / 180);
// //     display.textContent = `${mhour}:${mMinutes}`;
// //     console.log(combine);
// //     combine--;
// //   }, 1000);
// // });

// // let num = 100;
// // setInterval(function () {
// //   display.textContent = num;
// //   num--;
// // }, 1000);

// // let num = +prompt('enter your minutes') * 60;

// // const st = setInterval(function () {
// //   let min = Math.trunc(num / 60);
// //   let sec = Math.trunc(num % 60);
// //   console.log(min);
// //   display.textContent = `${min}:${sec}`;

// //   if (num === 0) {
// //     clearInterval(st);
// //   }
// //   num--;
// // }, 1000);

// // setTimeout(function () {}, 3000);

// // let now = new Date();
// // let fdate = new Date('2022 02 25');
// // let shw = fdate - now;
// // let day = Math.round(shw / (1000 * 24 * 60 * 60));
// // let hrs = day * 24;
// // console.log(hrs);

// let matchTime = 5380;

// const mt = setInterval(function () {
//   let sec;
//   let min;
//   if (matchTime < 60) {
//     sec = matchTime;
//     min = 0;
//   } else {
//     sec = String(Math.trunc(matchTime % 60)).padStart(2, '0');
//     min = String(Math.trunc(matchTime / 60)).padStart(2, '0');
//   }

//   display.textContent = `${min}:${sec}`;

//   if (matchTime === 5400) {
//     let played = document.querySelector('.play');
//     played.play();
//      clearInterval(mt);
//   }

//   matchTime++;
// }, 1000);
