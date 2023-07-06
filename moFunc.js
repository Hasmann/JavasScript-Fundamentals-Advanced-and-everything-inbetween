'use strict';

//default parameters in Functions

const flightarr = [];

//how to set default parameters after ES6 WE CAN ALSO MANIPULATE THEM
function flight(FlName = 'LDN', TakeOff = 13, Landing = 20 * TakeOff) {
  //how To set Default parameters before ES6 using short circuiting
  //   FlName = FlName || 'lagos';
  //   TakeOff = TakeOff || 10;
  //   Landing = Landing || 13;

  const flights = {
    FlName,
    TakeOff,
    Landing,
  };
  console.log(flights);
  flightarr.push(flights);
}

flight('lag', 10, 20);
flight();
flight('KWA', 25, 14);

function camelcase(str) {
  let arr = [];
  let cam = str.split(' ');
  let jon;
  for (const cases of cam) {
    let stuff = cases.replace(cases[0], cases[0].toUpperCase());
    arr.push(stuff);
    jon = arr.join(' ');
  }
  console.log(jon);
}

camelcase('hello there you man');

//now passing functions into functions as higher order functions can do

//making some call back functions

function separate(names) {
  let [fnames, ...others] = names.split(' ');

  console.log(`${fnames.toUpperCase()} ${others}`);
}

separate('abdulaziz hassan kehinde');

//now a major example of higher order functions in this case it is a function that accepts a function as aparameter

function higher(st, funct) {
  return funct(st), funct.name;
}

//now calling that function and remember always only call the function name without the bracket or else that function will run without even getting to its own block

console.log(higher('hassan kehinde kadeem', separate));

//now the function separate is the call back function and the function higher is the higher order function
//YOU GERRIT? IF YOU DONT GERRIT FORGET ABOUT IT😂😂.

//now lets talk about a function returning a function
// afunction  can return a function like this

function main(Greetings) {
  return function callingfunction(name) {
    console.log(`${Greetings},${name}`);
  };
}
//it can be called like this

let mynamess = main('hey');
mynamess('hassan');

//or it can be called like this

main('hello')('hussaini');

//wonder why it is like this this is because of a javascript concept called Closures

//now call and apply methods

//these methods can be used as a substitution to dry methods in

const airline1 = {
  airName: 'Lufthansa',
  IATACODE: 'LFH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name},booked a flight on ${this.airName} with seat ${this.IATACODE}${flightNum}`
    );
    this.bookings.push({ flight: `${this.IATACODE}${flightNum}`, name });
  },
};

airline1.book(32, 'abdulaziz');

//now to use a call and apply method
const airline2 = {
  airName: 'DANA',
  IATACODE: 'DN',
  bookings: [],
};

const airline3 = {
  airName: 'AERO',
  IATACODE: 'AER',
  bookings: [],
};

const see = airline1.book;

see.call(airline2, 32, 'hasman rulz');

see.call(airline3, 124, 'akanni mustapha');

//now apply method is used with array

const stuff = [32, 'husmannnn'];
see.apply(airline3, stuff);

//even with call

see.call(airline3, ...stuff);

//map examples
const nMap = new Map();

nMap.set('Fname', 'abdulaziz hassan');

console.log(nMap);

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
for (const [k, v] of gameEvents.entries()) {
  if (k >= 45) {
    console.log(v);
  } else {
  }
}

const hassan = {
  Fname: 'hassan',
  surname: 'abdulaziz',
  age: 18,
  height: 'cm186',
  ethnicity: 'african',
};

const vals = ['hassan', 'abdulaziz', 'cm186', 'african'];

// hassan.Fname = 'kehinde';

// console.log(hassan);

// for (const hey of Object.values(hassan)) {
//   console.log(
//     hey == 'abdulaziz' ? hey.replace(hey[0], hey[0].toUpperCase()) : hey
//   );
// }

console.log(vals);
console.log(...vals);
for (const hey of Object.values(hassan)) {
  console.log(typeof hey);
}
