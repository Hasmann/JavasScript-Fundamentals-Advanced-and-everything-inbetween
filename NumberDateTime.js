'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

//creating a general function for the number internationalization

function NumberInternationalization(value, locale, currencies) {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencies,
  }).format(value);
}

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const curr = new Date();
    let dt = new Date(acc.movementsDates[i]);
    let day = `${dt.getDate()}`.padStart(2, 0);
    let month = `${dt.getMonth() + 1}`.padStart(2, 0);
    let yr = dt.getFullYear();
    let getcalac = Math.round(Math.round(curr - dt) / (1000 * 60 * 60 * 24));

    console.log(getcalac);
    let pr;

    if (getcalac === 0) {
      pr = 'TODAY';
    } else if (getcalac <= 7) {
      pr = `${getcalac}Days Ago`;
    } else {
      pr = Intl.DateTimeFormat(navigator.language).format(dt);
    }

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${pr}</div>
        <div class="movements__value">${NumberInternationalization(
          mov,
          acc.locale,
          acc.currency
        )}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${NumberInternationalization(
    acc.balance,
    acc.locale,
    acc.currency
  )}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${NumberInternationalization(
    incomes,
    acc.locale,
    acc.currency
  )}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${NumberInternationalization(
    Math.abs(out),
    acc.locale,
    acc.currency
  )}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${NumberInternationalization(
    interest,
    acc.locale,
    acc.currency
  )}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

//creating the Timer

function creatingTimer() {
  const tick = function () {
    labelTimer.textContent = '';
    let min = String(Math.trunc(time / 60)).padStart(2, '0');
    let sec = String(Math.trunc(time % 60)).padStart(2, '0');

    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started';
    }

    time--;
  };
  let time = 10;
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
}

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    if (timer) clearInterval(timer);

    timer = creatingTimer();
    // Update UI

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movements.push(amount);
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    clearInterval(timer);
    timer = creatingTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  //now lts use our settimeout to delay the loan approval for a bit

  setTimeout(function () {
    if (
      amount > 0 &&
      currentAccount.movements.some(mov => mov >= amount * 0.1)
    ) {
      // Add movement
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());

      clearInterval(timer);
      // Update UI

      updateUI(currentAccount);
    }
  }, 3000);

  inputLoanAmount.value = '';
  clearInterval(timer);
  timer = creatingTimer();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//note that javascript works in base 10

console.log(0.1 + 0.2);
//ever noticed how we use number method to turn a string into an integer like this

console.log(Number('23'));
//we can do it in a simple manner like this just by adding a plus to the front
console.log(+'23');

//we can also do parsing  using the number method is not necessary but it is a good practice

console.log(Number.parseInt('24'));
//we can alsouse it to geta number fro a group of strings
console.log(Number.parseInt('25x'));
//just make sure the first number is an integer
//something like this will not work
console.log(Number.parseInt('exe25'));
console.log(Number.parseInt('2.5rtx'));

//we can also parse a float

//which in this case is useful for getting html and css values
console.log(Number.parseFloat('2.5rem'));

//we can also check conditions in an number

//but i wont recommend this as it is flawed
console.log(Number.isNaN('son'));
console.log(Number.isNaN(15));

//but this is recommended

console.log(Number.isFinite(23));

console.log(Number.isFinite('son'));

console.log(Number.isFinite(100 / 0));

// now lets do some math and rounding operations

//the math.sqrt method
//this math method is used to find the square root of numbers e.g

console.log(Math.sqrt(25));

//we also have the math maximum and minimum method which is used to find the max and min in a set of numbers

//as you can see from the array method which has been unpacked we will get the max and min from the array
const findMax = [10, 20, 40, 40, 50];
console.log(Math.max(...findMax));
console.log(Math.min(...findMax));

//we can also create a function for getting a random number in a range of numbers

function range(max, min) {
  let rand = Math.floor(Math.random() * (max - min) + 1) + min;
  console.log(rand);
}

range(20, 10);
//now lets see some more rounding opertors

//this method rounds it to the nearest whole number so 12.3=12 and 12.5=13
console.log(Math.round(12.3));
console.log(Math.round(12.5));
//there is also the floor and ceil in which floor roundsit to the last whole number and ceil to the next

//this should return 12 and 13 respectively
console.log(Math.floor(12.8));
console.log(Math.ceil(12.3));

//now we also have a very important method called tofixed which  is not in the math library so can be used as a dot operator but the downside is that it returns a stringreturns a certain decimal number
//for example the parameter it holds should be given an arguements of how many decimal points it should return
// but thankfully we have our + operator to make it easier to convert to an integer

console.log(+(2.45677890020200202928282828).toFixed(4));

//now lets work with the remainder operator
// /the remainder operator is simply just the modulus we used to do in high school to return the remainder using the % operator

//for example

//this will return zero as it has no remainder
console.log(10 % 2);

//but this will return 1
console.log(10 % 3);
//we can do this on and on and on but lets try a more practical example
//lets change the background on each movements entries

labelBalance.addEventListener('click', function () {
  const enterr = [...document.querySelectorAll('.movements__row')];
  for (const [i, enter] of enterr.entries()) {
    if (i % 2 === 0) {
      enter.style.backgroundColor = 'teal';
    }
    if (i % 2 === 1) {
      enter.style.backgroundColor = 'orange';
    }
  }
});

//now lets talk about big int
//big int as the name implies is used for big numbers in which integer cannot accomodate as integers itself has a maximum values
//as we all know int has a space of 64 bit and normally the value itself take 53 bit out of the 64 and the memory and space allocation takes 11bit out of the 64
//to solve this problem big int was introduced in es 2020 and can be used like a normal integer with some stopgaps
//lets start to use big int we do
let sum = 1000000n;
//putting an n at the back like this
console.log(sum);
//we can also do some operations like

console.log(1000n + 1000n);

//but we cannot do this because of type conversion

// console.log(1000 + 1000n);

//but we can still do

console.log('hello there ben' + 10000n);

// and we can still do some boolean operation such as

console.log(1000n >= 1000);

//we can even do the ones which we know cannot do 😂😂😂😂😂
console.log(1000n === 1000);

//even divisions is jus that in bigint divisions are rounded to the next whole
console.log(10n / 3n);
console.log(10 / 3);

//you get the gist

//now lets move on to creating dates
//dates can be created in4 ways
//thisis one of the ways

const date = new Date();

console.log(new Date('December 24 2015'));

console.log(new Date(0));

console.log(new Date(2030, 11, 20, 23, 23, 13));
console.log(new Date(account1.movementsDates[2]));

//there are also time methods such as

const tdate = new Date();
console.log('TIME METHODS');

console.log(tdate.getFullYear());
console.log(tdate.getMonth());
//gets the date
console.log(tdate.getDate());
//gets the day in a week
console.log(tdate.getDay());
console.log(tdate.getHours());
console.log(tdate.getMinutes());
console.log(tdate.getSeconds());
console.log(tdate.toISOString());

//now if we want to get the timestamp which is the millisecond since when unix was created
//we can do date .now to get the time stamp from when unix was created

console.log(Date.now());

console.log(new Date(Date.now()));

//we can also use set
//eg

console.log(tdate.setFullYear(2040));

//now lets talk about internationalizing date and time in javascript
//before we start what is internationalization itis changing the cofe settings mainly language and date time format into a users format

//now lets gooo

//in which the Intl is the internationalization api call the .DTF holds The countries ISO and the format holds the date format
//THE .DTF CAN ALSO HOLD OPTIONS WHICH I AM SURE WE CAN SEE IN THE INTELLISCENCE which comes in form of an object

const getDateForm = Intl.DateTimeFormat('en-GB').format(new Date());

console.log(getDateForm);

// lets see in this other eaxample

const op = {
  month: 'numeric',
  // weekday: 'long',
  year: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};
//and we can also set the language using

let is = navigator.language;

const getfull = Intl.DateTimeFormat(is, op).format(new Date());

console.log(getfull);

//we can also format numbers using internalization
//the settings is almost the same as using the date internationalization

//lets goooo

const number = 10000000.3456;

const intnum = Intl.NumberFormat('en-GB').format(number);

console.log(intnum);

//WE CAN ALSO ADD OPTIONS WHICH IS ALSO IN THE FORM OF AN OBJECT

const opt = {
  style: 'currency',
  currency: 'EUR',
};

const intnum1 = Intl.NumberFormat('en-GB', opt).format(number);

console.log(intnum1);

//NOW LETS ADD IT TO OUR EXISTING CODE

//now lwts talk about timers there are two types of timers which are the settimeout and the set timeinterval

//lets see the set timeout
//the setTimeout carries out the task in its callback function only when the time is already executed lets take an example

setTimeout(function () {
  console.log('DONT CALL ME BACK OO');
}, 3000);

//IN WHICH 1000 MILISECOND IS EQUAL TO ONE SECOND

//we can also set arguements in the function such settimeout function

const firstTimer = setTimeout(
  function (talk1, talk2) {
    console.log(`DONT CALL ME BACK OO X2 by ${talk1}${talk2}`);
  },
  3000,
  'mayorkun',
  'X joeboy'
);

//we can also stop the timer like this
let talks = 'mayorkun';
if (talks === 'mayorkun') clearTimeout(firstTimer);

//the name of the timeout inside the cleartimeout

console.log('LOADING');
//but the arguements have to be called in outside withe the specified time

//WE CAN ALSO SET THE TIME INTERVAL WHICH IS SIMILIAR BUT UNLIKE THE SETTIMEOUT THAT STOPS ON ITS OWN THE SET INTERVAL WILL CONTINUE TO RUN

//LETS SEE AN EXAMPLE

// setInterval(function () {
//   const date = new Date();
//   console.log(date);
// }, 1000);

//now lets format the set interval like jonas told us to do

setInterval(function () {
  const date = new Date();
  let formDate = Intl.DateTimeFormat(navigator.language, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(date);
  console.log(formDate);
}, 1000);
