const shpBtn0 = document.querySelector('#shopBtn--0');
const shpBtn1 = document.querySelector('#shopBtn--1');
const shpBtn2 = document.querySelector('#shopBtn--2');

let content = document.querySelector('.content');
let Total = document.querySelector('.total');

let price = 0;
let info = '';
let total = 0;
let carshow = '';

const oneSidedDice = {
  info: 'one sided dice-$5-',
  price: 5,
};

const TwoSidedDice = {
  info: 'Two sided dice-$7-',
  price: 7,
};
const ThreeSidedDice = {
  info: 'Tre sided dice-$9-',
  price: 9,
};

function printDice(objects) {
  carshow += objects.info;
  total += objects.price;

  content.textContent = carshow;
  Total.textContent = total + '$';
}
shpBtn0.addEventListener('click', function () {
  printDice(oneSidedDice);
});

shpBtn1.addEventListener('click', function () {
  printDice(TwoSidedDice);
});

shpBtn2.addEventListener('click', function () {
  printDice(ThreeSidedDice);
});

console.log(total);
