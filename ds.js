'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//Destructuring arrays

// Data needed for a later exercise

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 12, // Open 24 hours
      close: 24,
    },
  },

  newMenu: function (Rec1, Rec2, Rec3) {
    return `THE NEW MENU ITEMS ARE: ${Rec1},${Rec2},${Rec3},`;
  },
  mainIngredients: function (main, ...side) {
    console.log(main);
    //rest
    console.log(side);
    //spreading
    console.log(...side);
  },
};
//Before Array destructuring
const arr = [10, 20, 30];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, b, c);

//with Array  Destruction

// const [x, y, z] = arr;

// console.log(x, y, z);

//Array Destruction in array

//givins space between an array in array destruction means that it will skip the missed array
// const [z, , c] = restaurant.categories;

// console.log([z, , c]);

// let [w, e] = restaurant.categories;

// [w, e] = [e, w];

// console.log([w, e]);

// let first = restaurant.categories[0];
// let second = restaurant.categories[1];
// let third;
// third = first;
// first = second;
// second = third;

// console.log(first, second);

//Destructuring objects

//Assigning objects Notice How we use [] to destructure arrays we use {} to destructure objects
//And also in objects we destructure by using the name of the key value object to destructure

// const { name, openingHours, categories } = restaurant;

// console.log(openingHours, name, categories);

//assigning them different variables or names

// const { name: myname, openingHours: open, categories: cat } = restaurant;

// console.log(myname, open, cat);

//giving default values as well as adding values

// const {
//   name = 'hey',
//   openingHours,
//   categories = 'none',
//   hello = 0,
// } = restaurant;

// console.log(name, categories, hello);

//seeing inside nested objects
// const {
//   openingHours: { thu, fri },
// } = restaurant;
// console.log(thu, fri);

// const { hello = [10, 20, 30, 40] } = restaurant;

// console.log(hello);

//SREAD Operator ... SPREAD OPERATOR IS USED AFTER THE = THAT IS ON THE RIGHT HAND SIDE

//accessing an array

// const array = [10, 20, 30];
// const mixArray = [...array, 40, 50];
// console.log(...array);
// console.log(mixArray);

// //COPY ARRAY
// const arraycop = [...mixArray];

// console.log(arraycop);

// //we can also use spread on strings ,arrays and objects ...

// const fName = 'hassan';

// console.log(...fName);

// //Now lets use this example in an object

// //lets use Prompts To ENTER THE LIST LETS USE ARRAYS TO IMPLEMENT THAT

// const inputPrompts = [
//   prompt('ENTER FIRST MENU ITEM'),
//   prompt('ENTER SECOND MENU ITEM'),
//   prompt('ENTER THIRD MENU ITEM'),
// ];

// //Now Lets Use Spread To Set The Arguements Remember Spread Isolates And Gets Every Value

// //NORMAL WAY SO TEDIOUS 💤😴😩
// //(NOW IMAGINE IF YOU HAD THOUSANDS OF ENTERIES)

// console.log(
//   restaurant.newMenu(inputPrompts[0], inputPrompts[1], inputPrompts[2])
// );

// //THE EASY WAY 🛳️😊😊

// console.log(restaurant.newMenu(...inputPrompts));

//REST OPERATOR...

/// REST OPERTOR WHICH IS THE SAME SYNTAX AS THE SPREAD OPERATOR BUT UNLIKE THE SPREAD OPERATOR THAT UNPACKS VALUES IT CAN BE USED TO PACK VALUES INTO A SINGLE VARIABLE

//IN DESTRUCTURING

// const array = [10, 20, 30, 40, 50, 60];

// const [a, b, c, ...rest] = array;

// console.log(a, b, c);
// console.log(rest);

// //NOW LETS DO AN EXAMPLE WITH FUNCTIONS REMEMBER REST IS USED TO PACK and SPREAD ALSO RETURNS ALL THE VALUES IN ANA ARRAY

// function add(...nums) {
//   //REMEMBER BECAUSE OF REST WE CAN NOW HAVE MULTIPLE ARGUEMENTS IN THE PARAMETER THANKS TO SPREAD
//   console.log(nums);

//   console.log(...nums);
//   //NOW LETS ADD

//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   console.log(sum);
// }

// add(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);

// //WE CAN ALSO USE SPREAD TO DESTRUCTURE OBJECTS

// const { hello, you, ...obj } = restaurant.mainMenu;

// console.log(obj);

//calling mainingredients in restaurant object

// console.log(
//   restaurant.mainIngredients(
//     'spaghetthi',
//     'pepper',
//     'sace',
//     'sausage',
//     'onions',
//     'bell peppers'
//   )
// );

///SHORT CIRCUITING && ||

// short circuiting with && || Has to do with truthy and falsy values E.G

//USING OR ||
// const Mname = '' || null || undefined || 10;

// console.log(Mname);

// //USING AND &&  why is it not picking the first Number? that is because in hand one condition has to be false for the whole expression to breakdown
// //And in this case the first value is '' which is a falsy value and therefore it picks it because it is false
// const Sname = '' && null && undefined && 10;

// console.log(Sname);

//CODING CHALLENGE🥳🥳🥂🥂🥳🥳🎆🎆🎆🎆🎆🎆🎆

//MATERIALS 🪵🪚🛠️

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const players1 = [
//   'Neuer',
//   'Pavard',
//   'Martinez',
//   'Alaba',
//   'Davies',
//   'Kimmich',
//   'Goretzka',
//   'Coman',
//   'Muller',
//   'Gnarby',
//   'Lewandowski',
// ];
// const players2 = [
//   'Burki',
//   'Schulz',
//   'Hummels',
//   'Akanji',
//   'Hakimi',
//   'Weigl',
//   'Witsel',
//   'Hazard',
//   'Brandt',
//   'Sancho',
//   'Gotze',
// ];
// const [gk1, ...fieldPlayers1] = players1;

// const [gk2, ...fieldPlayers2] = players2;

// console.log(gk1, gk2);
// console.log(fieldPlayers1);
// console.log(fieldPlayers2);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const playersFinal = ['Thiago', 'Couthinho', 'Perisic', ...players1];

// console.log(playersFinal);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// // const team1 = game.odds.team1;
// // const draw = game.odds.x;
// // const team2 = game.odds.team2;

// function printGoals(...players) {
//   console.log(...players);
//   var len = players.length;
//   console.log('NUMBER OF GOALS SCORED: ' + len);
// }

// printGoals('HASSAN', 'HUSSAINI', 'NOBLE', 'SOLO', 'KAMAL', 'TAOFEEK');
// printGoals(...game.scored);

//for..of loop

// const arri = ['mom', 'dad', 'son'];

// for (const item of arri.entries()) {
//   console.log(item);
//   console.log(arri);
// }

// //object literal example
// const more2 = {
//   height: {
//     inCm: '185cm',
//   },

//   weight: {
//     inLb: '210lb',
//   },
// };
// //object literals ES6 INCLUSIONS

// const details = ['Fname', 'Lname', 'Age'];

// const hasaman = {
//   //old way of doing things BEFORE ES6
//   Fname: 'Hassan',
//   Lname: 'Abdulaziz',
//   Age: 20,

//   functin: function (...age) {
//     var sum = 0;

//     for (const items of age) sum += items;

//     console.log(sum);
//   },

//   //object inside object

//   more: {
//     height: {
//       inCm: '185cm',
//     },

//     weight: {
//       inLb: '210lb',
//     },
//   },

//   //new way of doing object literals after ES6

//   //new ways of declaring property
//   [details[0]]: 'Hassan',
//   [details[1]]: 'Abdulaziz',
//   [details[2]]: 20,

//   functin2(...age) {
//     var sum = 0;

//     for (const items of age) sum += items;

//     console.log(sum);
//   },

//   //now calling an object from outside the object literal NOTE(THE Object Literal Is  writing an object literally and in the curly brace)
//   //remember the property names have to match

//   //after es6
//   more2,
// };

// hasaman.functin(1, 2, 3, 4, 5, 20);

//OPTIONAL CHAINING
// optional chain ? is used to check if the expression on the left side exist For example

//NORMAL WAY OF CHECKING

// if (restaurant.openingHours.wed) {
//   console.log('IT EXISTS');
// } else {
//   console.log('IT DOES NOT EXIST!!');
// }

// //USING OPTIONAL CHAINING

// //SEE HOW I USED IT WITH NULLISH COALESCENT OPERATOR ?? THAT IS BECAUSE OF IF IT RETURNS ZERO OR I WANT TO DISPLAY A CUSTOM MESSAGE IN THIS CASE I DID
// let optChain = restaurant.openingHours.wed?.open ?? 'IT DOES NOT EXIST';

// console.log(optChain);

// //NOW FOR SOMETHING MORE COMPLEX

// const DaysOfTheWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// //using for of loop

// for (const dotw of DaysOfTheWeek) {
//   //see how we used [dotw] instead of .dotw that is because the object which they belong to does not recognise dotw
//   const open = restaurant.openingHours[dotw]?.open ?? `${dotw} Not Open`;

//   console.log(`${dotw}:${open}`);
// }

// //we can also use optional chaining on functions

// const entries = [prompt('ENTER 1'), prompt('ENTER 2'), prompt('ENTER 3')];

// console.log(restaurant.newMenu?.(...entries) ?? 'DOES NOT EXIST');

// // WE CAN ALSO USE OPTIONAL CHAINING IN ARRAYS

// const variables = [{ name: 'hassan' }, 'hassan', 'hussaini', 'halima'];
// const variabless = [];
// //OLD WAY
// if (variables[0]) {
//   console.log('it exisst');
// } else {
//   console.log('it does not exist');
// }

// //uing optional chaining

// let arrayExist = variabless[0]?.name ?? 'THIS ARRAY DOES NOT EXIST';

// console.log(arrayExist);

//IN YHIS MODULE WE COMBINED SPREAD,REST ,NULLISH COALLICENT,FOR OF LOOP ,OPTTIONAL CHAINING

//NOW LETS TALK ABOUT LOOPING THROUGH OBJECTS
//WE CAN DO THIS BY USING

//OBJECT.KEY
//OBJECT.VALUE
//OBJECT.ENTRIES TO GET BOTH KEY AND VALUES

//TO GET KEYS
// for (const od of Object.keys(restaurant)) {
//   console.log(od);
// }

// //TO GET VALUES
// for (const od of Object.values(restaurant)) {
//   console.log(od);
// }

// //tTO GET BOTH KEYS AND VALUES
// for (const [key, value] of Object.entries(restaurant)) {
//   console.log(key, value);
// }

// //CODING CHALLENGE  ##2  🥳🥳🥂🥂🥳🥳🎆🎆🎆🎆🎆🎆🎆

// //MATERIALS 🪵🪚🛠️

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // CODING CHALLENGE #2
// //QUES11️⃣
// for (const [i, gs] of game.scored.entries()) {
//   console.log(`Goal ${i + 1} Scored By:${gs}`);
// }
// //QUES22️⃣

// let sum = 0;
// let average = 0;

// let num = Object.values(game.odds);
// for (const od of Object.values(game.odds)) {
//   sum += od;
//   average = sum / num.length;
// }

// console.log(`THE SUM OF ALL ODDS ARE:${sum} And The Average Is ${average}`);

// //QUES33️⃣

// for (const [key, value] of Object.entries(game.odds)) {
//   let prntstr = key === 'x' ? 'odd' : game[key];
//   console.log(` ODD OF ${prntstr}:${value}`);
// }

// console.log(`Odd Of Victory ${game.team1} :${game.odds.team1}`);

//GRADE 70%

//SETS
//What are SETS sets are unique iterable data structures which will return unique values from a set of variables

//REMEBER SETS ,ARRAY,OBJECTS ARE ALL ITERABLE

// //Dclaring SETS
// const newSets = new Set([
//   'hassan',
//   'halima',
//   'hussain',
//   'halima',
//   'hussain',
//   'hassan',
// ]);

// console.log(newSets);

// //WE CCAN ALSO USE SETS ON STRINGS

// console.log(new Set('hassan'));

// //now METHODS WE CAN USE WITH STRINGS

// //EXAMPLE1

// //lets find the length of a set

// const setLength = newSets.size;

// console.log(setLength);
// console.log(new Set('hassan').size);

// //now lets add to a set

// newSets.add('sariki');
// console.log(newSets);

// //now lets remove from a set

// newSets.delete('sariki');
// console.log(newSets);

// // //to clear all the sets
// // newSets.clear();
// // console.log(newSets);

// //now lets check if a set holds a given value

// console.log(newSets.has('hassan')); //returns true

// console.log(newSets.has('sariki')); //returns false

// //now a real world example

// const arr2 = [
//   'hassan',
//   'halima',
//   'hussain',
//   'halima',
//   'hussain',
//   'hassan',
//   'hassan',
//   'halima',
//   'hussain',
//   'halima',
//   'hussain',
//   'hassan',
// ];
// console.log(arr2);

// const uniqueArr = new Set(arr2);
// console.log(uniqueArr);
// const newArray = [...uniqueArr];
// console.log(newArray);

//AND NOT TO FORGET YOU CAN ALSO LOOP THROUGH SETS

// for (const se of uniqueArr) {
//   console.log(se);
// }

//AND THATS ALL THE BASICS YOU NEED TO KNOW ABOUT SETS

//MAPS
//MAPS ARE JUST LIKE SET BUT ARE BETTER AND HAS MOE FUNCTIONALITIES AND THEY ARE ALSO LIKE OBJECTS AS WE HAVE KEY VALUE PAIRS
//BUT UNLIKE OBJECTS THE KEYS CAN BE ANY ATA TYPE

// //DECLARING MAPS

// //unlike sets we do not add values in the parameters
// const newMap = new Map();

// //we add them like this the key and value concurrently

// newMap.set('Fname', 'hassan');

// //as i said earlier the keys can be of any datatype;

// newMap.set(1, 'Halima');

// //they can even be boolean

// newMap.set(true, 'WE ARE OPEN');

// newMap.set(false, 'WE ARE CLOSED');

// newMap.set('open', 8);
// newMap.set('close', 22);

// //now to get the sets we put the key name
// const get1 = newMap.get('Fname');

// const get2 = newMap.get(1);
// console.log(get1);

// console.log(get2);

// const Time = 2;
// //NOW AN EXAMPLE ON HOW THEY ARE USEFUL
// const oOc = newMap.get(Time > newMap.get('open') && Time < newMap.get('close'));

// console.log(oOc);

// //NOW WE CAN ALSO USE ARRAYS BUT IN AN UNCONVENTIONAL WAY SEE IT BELOW

// const arrr = [1, 2];
// newMap.set(arr, 'it is an array');

// console.log(newMap.get(arr));

// //also we can check if a map key exist

// console.log(newMap.has('categories'));
// console.log(newMap.has(1));

// //we can also use map on objects

// //such as

// newMap.set(document.addEventListener('H1'), 'hello there');

// //now that is all on Map FUNDAMENTALS CIAO!!

///NOW DISCORD HELP ASSESSMENT

// const arr1 = ['s', 'u', 's', 'a', 'n'];

// const arr2 = ['m', 'e', 's', 'u'];

// //empty array

// let empty = '';

// //loop through both arrays

// for (let i = 0; i < arr1.length; i++) {
//   for (let n = 0; n < arr2.length; n++) {
//     if (arr1[i].includes(arr2[n])) {
//       empty += arr1[i];
//     }
//   }
// }

// console.log(empty);

//MAPS CONTINUATION

// ANOTHER WAY OF WRITING MAPS ARE

//each array will represent a key value pair
// const quiz = new Map([
//   ['WELCOME ', 'ANSWER THE QUIZ'],
//   [0, 'Which Programming Language Is The Best'],
//   [1, 'JAVA'],
//   [2, 'JAVASCIPT'],
//   [3, 'PYTHON'],
//   ['ANSWER', 3],
//   [true, 'HURRAYH🥳🙌🏽'],
//   [false, 'NEHI NEHI'],
// ]);

// //WE CAN ALS PASS OBJECT INTO MAPAS LIKE THis
// //REMEMBER TO USE ENTERIES BECAUSE OBJECTS ARE NOT ITERABLE AND ENTERIES TURNS THEM INTO ARRAYS WHUCH ARE ITERABLE

// // const obj = new Map(Object.entries(restaurant));
// // console.log(obj);

// //WE CAN ALSO LOOP THROUGH MAPS LIKE THIS

// for (const [key, value] of quiz) {
//   if (typeof key === 'number') {
//     console.log(`QUESTION ${key} ANSWER ${value}`);
//   }
//   if (key === 0) {
//     console.log(`ANSWER ${value}`);
//   }
// }

// const ans = 3;

// const quizPrompt = quiz.get(ans === quiz.get('ANSWER'));

// console.log(quizPrompt);

//CODING CHALLENGE #3

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const events = [new Set(gameEvents)];

// console.log(events);

// gameEvents.delete(64);

// console.log(gameEvents);

// for (const [key, value] of gameEvents) {
//   if (key <= 45) {
//     console.log(`[First-Half]${key}${value}`);
//   } else {
//     console.log(`[Second-Half]${key}${value}`);
//   }
// }

//Working With Strings

//wonder why Strings have functions Given The Fact That They are Primitive Data Types // This IS because Strings ARE TRANSFORMED INTO OBJECTS
//WHEN THEY ARE MANIPULATED

//EXAMPLE 1.

// const Fname1 = 'hassan Abdulaziz';

// const Fname = 'hassan';

// console.log(Fname[0]);
// console.log(Fname[1]);
// console.log(Fname[2]);
// console.log(Fname[3]);

// //ALSO

// console.log('Mopelola'[0]);
// //EXAMPLE 2

// //NOW STRING METHODS

// //EXAMPLE 1
// //TO FIND THE LENGTH OF A STRING
// console.log(Fname.length);

// //EXAMPLE 2
// //TO FIND THE INDEX OF A STRING

// //we use index of to find the index of a string in this case it is the first character of s
// console.log(Fname.indexOf('s'));

// //but in another case that we have numerous same characters We Use
// //IT Returns the last occurrence of a substring in the string

// console.log(Fname.lastIndexOf('s'));

// //TO  Find The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj.

// console.log(Fname.slice(0));
// console.log(Fname1.slice(0, Fname1.lastIndexOf(' ')));
// console.log(Fname.slice(-1));
// console.log(Fname1.slice(Fname1.lastIndexOf(' ') + 1));

// //NOW FOR A MORE PRACTICAL EXAMPLE

// function ticketseat(seat) {
//   const s = seat.slice(-1);
//   if (s === 'e' || s === 'b') {
//     console.log('YOU HAVE THE MIDDLE SEAT 😬');
//   } else if (s === 'a' || s === 'f') {
//     console.log('YOU HAVE THE WINDOW SEAT 🪟');
//   } else {
//     console.log('YOU HAVE THE AISLE SEAT 🛣️');
//   }
// }

// ticketseat('123e');
// ticketseat('123b');
// ticketseat('123d');
// ticketseat('123f');

//NOW THATS A WRAP UP

//WORKING WITH STRINGS PART 2

// const Lname = 'abdulaziz';

// //methoda
// console.log(Lname.toUpperCase());
// console.log(Lname.toLowerCase());

// //turn to Jonas
// const passenger = 'jOnas';
// const npassenger = passenger.toLowerCase();
// const corpass = npassenger[0].toUpperCase() + npassenger.slice(1);
// console.log(corpass);

// //compare to emails
// const email = 'abdulazizhassankehinde@gmail.com';
// const logIn = ' Abdulazizhassankehinde@gmail.com\n';
// console.log(logIn);
// const correctLogin = logIn.toLowerCase().trim();

// console.log(email === correctLogin);

// //replace

// const euro = '125,555#';

// const dollar = euro.replace(',', '.').replace('#', '$');

// console.log(euro, dollar);

// //more on replace

// const board = 'GATE 23 NOW BOARDING ALL TICKET HOLDERS BOARD AT GATE 23';

// const correctBoard = board.replace(/GATE/g, 'DOOR');

// console.log(correctBoard);

// //NOW BOOLEANS

// const planeName = 'AIRBUSNEO';

// console.log(planeName.includes('AIR'));
// console.log(planeName.includes('see'));
// console.log(planeName.startsWith('AIR'));
// console.log(planeName.startsWith('air'));

// console.log(planeName.endsWith('NEO'));
// console.log(planeName.endsWith('neo'));

// //NOW FOR A MORE PRACTICAL EXAMPLE

// function LuggageCheck(baggage) {
//   baggage.toLowerCase();

//   if (
//     baggage.includes('knife') ||
//     baggage.includes('gun') ||
//     baggage.includes('snake')
//   ) {
//     console.log('SECURITY COME AND CARRY THIS MAN');
//   } else console.log('SAFE TO GO THROUGH!!!');
// }

// LuggageCheck('knife');
// LuggageCheck('gun');
// LuggageCheck('snake');

// LuggageCheck('money');
// LuggageCheck('playstation');

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;

//   const row = text.split('\n');

//   // console.log(row);

//   for (const [i, rw] of row.entries()) {
//     const [first, second] = rw.toLowerCase().trim().split('_');
//     // console.log(first, second);
//     const operaion = `${first.trim()}${
//       second[0].toUpperCase().trim() + second.slice(1)
//     }  `;

//     console.log(`${operaion.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

// Self Exercises

// const examps = 'abdulaziz+hassan+kehinde';

// const exampsSplitting = examps.split('+');

// console.log(exampsSplitting);

// //console.log(exampsSplitting.join(''));
// function capitalizeName(name) {
//   const s1Name = name.split(' ');
//   console.log(s1Name);
//   const jn = [];

//   for (const passnames of s1Name) {
//     const printScr = passnames.replace(
//       passnames[0],
//       passnames[0].toUpperCase()
//     );
//     jn.push(printScr);
//   }
//   console.log(jn.join(' '));
// }

// capitalizeName('abdulaziz hassan kehinde');
// capitalizeName('hello from the other side');

// //now padstart practice example

// function creditcard(cardNumber) {
//   const last4 = cardNumber.slice(-4);

//   const display = last4.padStart(16, '*');

//   console.log(display);
// }

// creditcard('1234');

//now THE MAIN SHOW

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;

//   const row = text.split('\n');
//   console.log(row);
//   const jnt = [];

//   for (const [i, rw] of row.entries()) {
//     const [first, second] = rw.split('_');

//     const printScr = `${first.trim()}${second.replace(
//       second[0],
//       second[0].toUpperCase().trim()
//     )}  ${'✅'.repeat(i + 1)} \n`;
//     jnt.push(printScr);
//   }
//   console.log(jnt.join(''));
// });

// underscore_case;
// first_name;
// Some_Variable;
// calculate_AGE;
// delayed_departure;
const flightss =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flight = flightss.split('+');
console.log(flight);

for (const fly of flight) {
  const [info, from, to, time] = fly.split(';');
  console.log(info, from, to, time);

  let output = `   
  ${info.startsWith('_Delayed') ? '🔴' : ''}${info.replaceAll(
    '_',
    ' '
  )} From ${from.slice(0, 3).toUpperCase()} TO ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(':', 'h')})`;
  console.log(output.padStart(50));
}
