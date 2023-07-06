// 'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// // const currencies = new Map([
// //   ['USD', 'United States dollar'],
// //   ['EUR', 'Euro'],
// //   ['GBP', 'Pound sterling'],
// // ]);

// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //array methods

// //SLICE NOTE SLICE METHOD ARE IMMUTABLE THAT MEANS THST THEY DO NOT CHANGE THE ORIGINAL ARRAY JUST MANIPULATES THEM
// // let arr = ['a', 'b', 'c', 'd', 'e'];

// // console.log(arr.slice(2));
// // console.log(arr.slice(1));
// // console.log(arr.slice(0, -1));

// // //SPLICE SPLICE IS A MUTABLE METHOD WHICH MEANS THAT IT CHANGES THE VALUE
// // //AND SPLICE IS USED TO REMOVE ARRAYSS

// // console.log(arr.splice(3));
// // console.log(arr);

// // //REVERSE
// // //REVERSE FUNCTION IS ALSO MUTABLE AS IT REVERSE THE ORDER OF THE ARRAY

// // let rev = ['j', 'i', 'h', 'g', 'f'];
// // console.log(rev.reverse());
// // console.log(rev);

// // //CONCAT
// // //CONCATS ARE NOT  MUTABLES AND THEY ARE USED TO JOIN ARRAYS TOGETHER
// // arr = ['a', 'b', 'c', 'd', 'e'];

// // console.log(arr.concat(rev));
// // console.log(arr);

// // //JOIN JOIN ARE USED TO JOIN ARRAYS ARRAYS INTO STRINGS THEY ARE ALSO NOT MUTABLE

// // console.log(arr.join('-'));
// // console.log(arr);

// //FOR EACH LOOP

// //LETS COMPARE THE USES OF THE FOR OF AND FOR EACH

// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // for (const movement of movements) {
// //   if (movement > 0) {
// //     console.log(`YOU DEPOSITED: ${movement}`);
// //   } else {
// //     console.log(`YOU WITHDREW: ${Math.abs(movement)}`);
// //   }
// // }

// // //now lets use for each
// // console.log('-----------------USING FOR EACH-----------------');
// // movements.forEach(function (movement) {
// //   if (movement > 0) {
// //     console.log(`YOU DEPOSITED: ${movement}`);
// //   } else {
// //     console.log(`YOU WITHDREW: ${Math.abs(movement)}`);
// //   }
// // });

// // //NOW LETS USE COUNTERS

// // console.log('-----------------USING COUNTERS IN FOR OF-----------------');
// // //note the order of for loop in using the counters or indexes is [counter,array]
// // for (const [i, movement] of movements.entries()) {
// //   if (movement > 0) {
// //     console.log(`MOVEMENTS ${i + 1}  YOU DEPOSITED: ${movement}`);
// //   } else {
// //     console.log(`MOVEMENTS ${i + 1}  YOU WITHDREW: ${Math.abs(movement)}`);
// //   }
// // }

// // console.log('-----------------USING COUNTERS IN FOR EACH-----------------');
// // //note the order of for each in using the counters or indexes is [array,index, array]
// // movements.forEach(function (movement, i, array) {
// //   if (movement > 0) {
// //     console.log(`MOVEMENTS ${i + 1} YOU DEPOSITED: ${movement}`);
// //   } else {
// //     console.log(`MOVEMENTS ${i + 1} YOU WITHDREW: ${Math.abs(movement)}`);
// //   }
// // });

// //NOTE MATH.ABS TURNS - INTO AN ABSOLUTE OR POSITIVE VALUE

// //using for each loop on  MAPS AND SETS

// // const currencies = new Map([
// //   ['USD', 'United States dollar'],
// //   ['EUR', 'Euro'],
// //   ['GBP', 'Pound sterling'],
// // ]);
// // //NOTE THE ORDER IN  WHICH THE PARAMETERS ARE CALLED NOTE THE VALUE FOLLOWED BY THE KEY FIRST
// // currencies.forEach(function (value, key, maps) {
// //   console.log(`${key} : ${value}`);
// // });

// // //NOW FOR SETS

// // const setAwon = new Set(['USD', 'GBP', 'GBP', 'EUR', 'EUR']);
// // console.log(setAwon);

// // //now to loop
// // //note a set does not have a key or value looping using for each is done like this so as not to break the coding normality implemeted in the for each loop

// // setAwon.forEach(function (value, key, maps) {
// //   console.log(`${key} : ${key}`);
// // });

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// /////////////////////////////////////////////////

// function displayMovement(movObj, sort = false) {
//   containerMovements.innerHTML = '';

//   let movs = sort
//     ? movObj.slice().sort(function (a, b) {
//         return a - b;
//       })
//     : movObj;

//   movs.forEach(function (mov, i) {
//     let invType = mov > 0 ? 'deposit' : 'withdrawal';

//     let movDisp = `
//  <div class="movements__row">
//     <div class="movements__type movements__type--${invType}">${
//       i + 1
//     } deposit</div>

//     <div class="movements__value">${mov}</div>
// </div>`;

//     containerMovements.insertAdjacentHTML('afterbegin', movDisp);
//   });
// }

// // displayMovement(account1.movements);

// // let sort = 'afterbegin';

// // btnSort.addEventListener('click', function () {
// //   containerMovements.innerHTML = '';
// //   account1.movements.forEach(function (mov, i) {
// //     let invType = mov > 0 ? 'deposit' : 'withdrawal';

// //     let movDisp = `
// //  <div class="movements__row">
// //     <div class="movements__type movements__type--${invType}">${
// //       i + 1
// //     } deposit</div>

// //     <div class="movements__value">${mov}</div>
// // </div>`;
// //     sort = sort === 'afterbegin' ? 'beforeend' : 'afterbegin';
// //     containerMovements.insertAdjacentHTML(sort, movDisp);
// //   });
// // });

// //
// //
// //
// //
// //
// //
// //
// //
// //project work continuation creating usernames for the objects

// function recieveAccounts(arrayOfaccounts) {
//   for (const acct of accounts) {
//     acct.userName = acct.owner
//       .toLowerCase()
//       .split(' ')
//       .map(function (user) {
//         return user[0];
//       })
//       .join('');
//   }
// }

// recieveAccounts(accounts);

// console.log(accounts);

// //now lets create an array for the balance

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// function showbalance(accts) {
//   accts.balance = accts.movements.reduce(function (acc, mov) {
//     return acc + mov;
//   }, 0);
//   labelBalance.textContent = `${accts.balance} EURO`;
// }

// // showbalance(movements);

// let eurtousd = 1.2;

// //now doing a real example of chaining methods
// function showmovemensts(accts) {
//   //for deposits
//   const deposits = accts.movements
//     .filter(function (mov) {
//       return mov > 0;
//     })
//     .reduce(function (acc, mov) {
//       return (acc += mov);
//     });
//   labelSumIn.textContent = ` ${Math.abs(deposits)}💶`;

//   const withdrawals = accts.movements
//     .filter(function (mov) {
//       return mov < 0;
//     })
//     .reduce(function (acc, mov) {
//       return (acc += mov);
//     }, 0);
//   labelSumOut.textContent = ` ${Math.abs(withdrawals)}💶`;
//   // document.querySelector('.summary__value--interest').textContent = 0;
//   const interest = accts.movements
//     .filter(function (movi) {
//       return movi > 0;
//     })
//     .map(function (movi) {
//       return (movi * accts.interestRate) / 100;
//     })
//     .filter(function (mov, i, arr) {
//       console.log(arr);

//       return mov > 1;
//     })
//     .reduce(function (acc, mov) {
//       return (acc += mov);
//     }, 0);

//   labelSumInterest.textContent = interest;
// }

// // showmovemensts(account1.movements);

// //Implementing Login

// let currentAccount;
// let searchaccount;
// //
// //
// //
// //
// //
// //
// //
// //

// btnLogin.addEventListener('click', function (e) {
//   //
//   console.log('LOGIN');
//   //
//   e.preventDefault();

//   //getting accoiunt
//   currentAccount = accounts.find(function (fin) {
//     return fin.userName === inputLoginUsername.value;
//   });
//   console.log(currentAccount);
//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     labelWelcome.textContent = `Good Day,${currentAccount.owner.split(' ')[0]}`;

//     inputLoginUsername.value = inputLoginPin.value = '';

//     inputLoginPin.blur();

//     containerApp.style.opacity = 100;

//     displayMovement(currentAccount.movements);

//     showbalance(currentAccount);

//     showmovemensts(currentAccount);
//   } else {
//     // containerApp.innerHTML=
//     // let input = `<h1 style='color:red'>Invalid LOGIN</h1>`;
//     // containerApp.style.opacity = 100;
//     // containerApp.insertAdjacentHTML('afterbegin', input);
//   }
// });
// //
// //
// //
// //
// //
// //
// //
// //
// //

// //Transfer
// btnTransfer.addEventListener('click', function (e) {
//   e.preventDefault();

//   searchaccount = accounts.find(function (fin) {
//     return fin.userName === inputTransferTo.value;
//   });
//   console.log(searchaccount);
//   let Amount = inputTransferAmount.value;
//   if (
//     Amount > 0 &&
//     currentAccount.balance >= Amount &&
//     searchaccount.userName != currentAccount.userName
//   ) {
//     currentAccount.movements.push(-Amount);
//     searchaccount.movements.push(Number(Amount));

//     inputTransferTo.value = inputTransferAmount.value = '';
//     displayMovement(currentAccount.movements);

//     showbalance(currentAccount);

//     showmovemensts(currentAccount);
//     inputTransferTo.blur();
//   }
// });
// //
// //
// //
// //
// //
// //
// //

// //loan
// btnLoan.addEventListener('click', function (e) {
//   e.preventDefault();

//   console.log('LOAN');
//   let loanAmount = inputLoanAmount.value;
//   if (
//     loanAmount > 0 &&
//     currentAccount.movements.some(function (mov) {
//       return mov >= loanAmount * 0.1;
//     })
//   ) {
//     currentAccount.movements.push(Number(loanAmount));

//     displayMovement(currentAccount.movements);

//     showbalance(currentAccount);

//     showmovemensts(currentAccount);
//     inputLoanAmount.value = '';
//     loanAmount.blur();
//     console.log(currentAccount.movements);
//   }
// });

// //closing account
// btnClose.addEventListener('click', function (e) {
//   e.preventDefault();

//   if (
//     inputCloseUsername.value === currentAccount.userName &&
//     Number(inputClosePin.value) === currentAccount.pin
//   ) {
//     let index = accounts.find(function (find) {
//       return find.userName === inputCloseUsername.value;
//     });

//     accounts.splice(index, 1);
//     inputCloseUsername.value = inputCloseUsername.value = '';
//     containerApp.style.opacity = 0;
//     labelWelcome.textContent = 'Log in to get started';
//   }

//   console.log('CLOSE ACCOUNT');
// });

// let mesort = false;
// btnSort.addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log('sort');
//   displayMovement(currentAccount.movements, !mesort);
//   mesort = !mesort;
// });

// ////////
// ////////
// ////////
// ////////
// ////////
// ////////
// ////////
// ////////
// ////////
// ////////

// // //coding challenge

// // function checkDogs(dogsJulia, dogsKate) {
// //   let shallowJulia = [...dogsJulia];
// //   shallowJulia.splice(0, 1);
// //   shallowJulia.splice(-2);

// //   let JuliaData = [...shallowJulia];
// //   let katesData = [...dogsKate];

// //   for (const [i, age] of JuliaData.entries()) {
// //     console.log('----JULIAS DATA----');
// //     if (age >= 3) {
// //       console.log(`DOG ${i + 1} is an Adult and is ${age} years old`);
// //     } else {
// //       console.log(`DOG ${i + 1} is an Puppy and is ${age} years old`);
// //     }
// //   }

// //   for (const [i, age] of katesData.entries()) {
// //     console.log('----KATES DATA----');
// //     if (age >= 3) {
// //       console.log(`DOG ${i + 1} is an Adult and is ${age} years old`);
// //     } else {
// //       console.log(`DOG ${i + 1} is an Puppy and is ${age} years old`);
// //     }
// //   }
// // }

// // checkDogs([3, 5, 2, 12, 17], [4, 1, 15, 8, 3]);
// // //✅✅✅✅✅✅ CORRECT
// // const trial = [1, 2, 3, 4, 5];

// // console.log(trial.splice(1, 2));

// //now lets talk about some other array methods called Maps,filter and reduce

// //A MAP IS JUST LIKE A FOR EACH LOOP BUT JUST HAS A MAJOR SIGNIFICANCE WHICH IS THAT INSTEAD OF CREATING ANOTHER ARRAY TO PUSH INTO THE MAP METH
// //ITSELF CREATES AN ARRAY BY ITSELF
// //SO LETS DO AN EXAMPLE

// //using  a for each loop

// const parr = [];
// const eurotousd = 1.1;
// movements.forEach(function (mov) {
//   parr.push(mov * eurotousd);
// });
// console.log(parr);

// //now using maps

// const mapPrac1 = movements.map(function (mov) {
//   return mov * eurotousd;
// });

// console.log(mapPrac1);

// //now we can see it but the major difference is thst a map creates a new array and we have to return in a map note that we jave to return
// //NOTW A MAP ALWAYS RETURNS AN ARRAY

// //now for more examples with manipulation in a map

// const mapaPrac2 = movements.map(function (mov, i) {
//   return ` movements ${i + 1} ${mov > 0 ? 'DEPOSIED' : 'WITHDRAWED '} ${mov} `;
// });
// console.log(mapaPrac2);
// //NOW I HOPE THIS HAS BEEN ABLE TO STICK

// //now the second array manipulation method #FILTER
// //FILTER AS THE NAME SAYS IS AN ARRAY METHOD WHICH IS USED TO FILTER ELEMENTS IN AN ARRAY
// //LETS TAKE ONE EXAMPLE HERE FROM THE  MOVEMENTS OBJECT

// //here we will be filtering the elements in the movement array into objects
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits);

// //now lwts do for withdrawals

// const withdrawals = movements.filter(function (mov) {
//   return Math.abs(mov < 0);
// });
// console.log(withdrawals);
// console.log(movements);

// //now lets talk about reduce arry method
// //the reduce array method is used as an accumulator per say to reduce the elements of ana array unlike its other mnipulation methods
// //it does not retrn an array
// //now lets do an example
// //notice how the arguements are different that is because enlike other manipulating array methods reduce has 4 parametersb
// //with an extra one preceding it add the beginning which is the accumulator so the precedence is now (accumulator,elemens,index,array);
// //with the default value of the precedence coming  after the function curly braces
// //and like the others it must have the return keyword
// const balance = movements.reduce(function (acc, mov, i) {
//   acc += mov;
//   console.log(`at ${i},the accumulator is ${acc}`);
//   return acc;
// }, 0);
// console.log(balance);
// //coding challenge #2

// function calcAverageHumanAge(ages) {
//   const humanAge = ages.map(function (ele, i) {
//     if (ele <= 2) {
//       return 2 * ele;
//     } else return 16 + ele * 4;
//   });
//   console.log(humanAge);
//   const filterdogs = humanAge.filter(function (ele, i) {
//     return ele > 18;
//   });
//   console.log(filterdogs);

//   const average =
//     filterdogs.reduce(function (acc, ele, i) {
//       return acc + ele;
//     }, 0) / filterdogs.length;
//   console.log(average);
// }

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// //chaining array methods

// //now lets start chaining ,chaining is more like a chain of numerous arraymethods
// //lets take one example

// const chains = [100, 200, 3000, -430, 590, -300, -150];

// //now lets get all the deposits from the array above

// const pos = chains
//   .filter(function (chai) {
//     return chai > 0;
//   })
//   .reduce(function (acc, chai) {
//     return (acc += chai);
//   });

// console.log(pos);

// //implementing find array method
// //now i know i know i said there was three which is map,filter,replace but there is an additional one called find

// // now lets implement

// const chains2 = [100, 200, 3000, -430, 590, -300, -150];

// //now find array method is just like the rest it even has the same signature it is just that it does not return an array instead
// //it only returns the element of the array you are using to find

// //like in the example below it returns the first negative value in an array
// const finder = chains2.find(function (fin) {
//   return fin < 0;
// });

// console.log(finder);

// //now for a more practical example
// //this returns the element of an array that has a value of'jessica davis'

// const findName = accounts.find(function (find) {
//   return find.owner === 'Jessica Davis';
// });

// console.log(findName);

// //now lets try the above by using for off loop

// for (const find of accounts) {
//   if (find.owner === 'Jessica Davis') {
//     console.log(find);
//   }
// }

// //success ✅✅✅🎩
// //some and every array method

// //SOME
// //This used to check a condition in an array that returns a boolean much like the includes but instead it has a callback
// //function that returns a condition

// //
// const arr = [10, 20, 30, 40, -50, -1000];
// //this can be very useful in large codes as we will see in the loan part
// //this will work if at least one of the conditions is true
// arr.some(function (sm) {
//   return sm > 0;
// });

// //flat and flatmap
// //flat aray method can be used to make nested arrays into one single array
// //for example

// const harry = [10, 20, [30, 40, 50], 60, 70];

// console.log(harry.flat());
// //now depending on how deeply nested an array is we have to set arguements lets see below

// const harry2 = [10, 20, 30, [40, 50, 60, [70, 80, 90]]];

// console.log(harry2.flat(2));

// //now lets see a more practical example of it
// //yeah now lets take a more practical approach
// //here we are going to get the account movements array and sum itall up

// const getArray = accounts
//   .map(function (acc) {
//     return acc.movements;
//   })
//   .flat()
//   .reduce(function (acc, sum) {
//     return acc + sum;
//   });
// console.log(getArray);
// //now lets use another array method flatmap which combines both the flat and map method

// const getusingflatmap = accounts
//   .flatMap(function (acc) {
//     return acc.movements;
//   })
//   .reduce(function (acc, mov) {
//     return acc + mov;
//   });

// console.log(getusingflatmap);

// //sorting arrays
// //normally we are supposed to do this useing the old fashion loops and stuff but we will be using in built javascript method
// //lets go!!

// const characters = ['hello', 'are', 'you', 'there'];

// //you will see that using this mrthod will sort out the array
// console.log(characters);
// console.log(characters.sort());
// //we can see that this got sorted alphabetically now lets use it on numbers

// const nums = [-300, -400, -568, 0, 100, 200, 4000, 2, 18];

// // console.log(nums);
// // console.log(nums.sort());
// //we can see that it did not quite sort it as planned that is because the sort method changes it to string before sortind it

// //now for us to do ut properly we have to set a callback function in the sort method

// //for us to do it this way we  have to use this two parametrs a and b  to compare
// //in which a signifies the first number and b signifies the second number in the loop
// //THIS IS THE ORIGINAL FORMAT
// //and it goes like this if  a >b return a positive number which means ascending order
// //or if it goes like this if  b >a return a negative number which means descending order

// //AND ALSO NOTE VERY IMPORTANT THE SORT METHOD IS MUTABLE

// //ascending order
// // let snums = nums.sort(function (a, b) {
// //   if (a > b) return 1;

// //   if (a < b) return -1;
// // });

// //DESCENDING ORDER JUST REVERSE IT
// // let snums = nums.sort(function (a, b) {
// //   if (a > b) return -1;

// //   if (a < b) return 1;
// // });

// // console.log(nums);
// // console.log(snums);

// //store put inside array
// // let store;
// // let arrrrr = [];
// // for (let i = 0; i < 5; i++) {
// //   store = prompt('enter number');
// //   arrrrr.push(Number(store));
// // }
// // console.log(arrrrr);

// //doing some array method practices
// //no1
// //who knew reduce could do this

// const getStuff = accounts
//   .slice()
//   .flatMap(function (mov) {
//     return mov.movements;
//   })
//   .reduce(function (acc, movs) {
//     if (movs > 0) acc += movs;

//     return acc;
//   }, 0);

// console.log(getStuff);

// //now lets do another example

// const getobjects = accounts
//   .slice()
//   .flatMap(function (mov) {
//     return mov.movements;
//   })
//   .reduce(
//     function (acc, mov) {
//       if (mov > 0) {
//         acc.deposits += mov;
//       } else {
//         acc.withdrawals += mov;
//       }

//       return acc;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(getobjects);

// //now lets do a titlecase

// function ConvertToTitleCase(title) {
//   const expections = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(function (mov) {
//       if (expections.includes(mov)) {
//         return mov;
//       } else {
//         return mov.replace(mov[0], mov[0].toUpperCase());
//       }
//     })
//     .join(' ');

//   return titCase;
// }

// console.log(ConvertToTitleCase('this is a nice title'));

//coding challenge #4

// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

// HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
for (const dg of dogs) {
  dg.RecomendedFoodPortion = Math.trunc(dg.weight ** 0.75 * 28);
}
let find;
console.log(dogs);
//2.
find = dogs.find(function (mov) {
  return mov.owners.includes('Sarah');
});

console.log(find);
console.log(
  `${
    find.curFood > find.RecomendedFoodPortion
      ? 'DOG EATING TOO MUCH'
      : 'DOG EATING TOO LITTLE'
  }`
);

//3.

const ownersEatTooMuch = dogs
  .filter(function (dg) {
    return dg.curFood > dg.RecomendedFoodPortion;
  })
  .flatMap(function (dg) {
    return dg.owners;
  });

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(function (dg) {
    return dg.curFood < dg.RecomendedFoodPortion;
  })
  .flatMap(function (dg) {
    return dg.owners;
  });

console.log(ownersEatTooLittle);

//5
const tf = dogs.some(function (dg) {
  return dg.curFood === dg.RecomendedFoodPortion;
});

console.log(tf);

//6.

const rc = dogs.some(function (dg) {
  return dg.curFood <= dg.RecomendedFoodPortion;
});
console.log(rc);

//7.

const okay = dogs.filter(function (fil) {
  return fil.curFood <= fil.RecomendedFoodPortion;
});

console.log(okay);

//8.
