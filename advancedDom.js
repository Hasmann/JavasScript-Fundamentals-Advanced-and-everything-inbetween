'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (const opm of btnsOpenModal) {
  opm.addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////
///////////////
//////////////
//NOW LETS TALK ABOUT SOME IMPORTANT DOM MANIPULATION METHODS SUCH AS

//SELECTING,CREATING AND DELETING A DOM ELEMENT

//SELECTIG WE HAVE SELECTED ELEMENTS INTO THE DOM BUT LETS TALK ABOUT SOME OTHER METHOD WE DO NOT KNOW

//SELECTING ALL THE PAGE DOCUMENTS SUCH AS

const page = document.documentElement;
const head = document.head;

console.log(page);
//we can also select part of the pade such as

console.log(document.head);
console.log(document.body);

//we can also select all the elemets such as the tag

//unlike others that are stored in a node list this method is stored in some sort of an array
console.log(document.getElementsByTagName('button'));
//we can also select them based on their id and class alone
//like

// document.getElementById();
// document.getElementsByClassName();

//so lets create an element
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
//CREATING AN ELEMENT

// const cookie = document.createElement('div');
// //lets assign a class to the element
// cookie.classList.add('cookie-message');

// //lets add something to it
// cookie.innerHTML =
//   'THIS SITE USES COOKIES. <button class= "btn btn-cookie">GOT IT</button>';

// //so lets add it to the header

// //lets get the header element

// const header = document.querySelector('.header');

// header.prepend(cookie);

//now for deleting

//lets select the button

// document.querySelector('.btn-cookie').addEventListener('click', function () {
//   cookie.remove();
// });

// document.querySelector('.btn-cookie').style.backgroundColor = 'black';
// document.querySelector('.btn-cookie').style.color = 'white';

// console.log(getComputedStyle(cookie).display);

// document.documentElement.style.setProperty('--color-primary', 'orangeRed');

const logs = document.querySelector('#logo');

console.log(logs.getAttribute('src'));
// console.log(logs.setAttribute('src', 'images/user-2.jpg'));

//
// now lets add scrolling to the web page

//we can do this the old way or the new way but lets see the old way first

const learnMoreButton = document.querySelector('.btn--scroll-to');
const sect1 = document.querySelector('#section--1');

learnMoreButton.addEventListener('click', function () {
  //first of all we need to get the measurement of the button element to the page

  let buttonMeasurement = learnMoreButton.getBoundingClientRect();
  let sect1measurement = sect1.getBoundingClientRect();

  console.log(buttonMeasurement);

  //now lets get the scroll position for the  elemnts
  console.log(window.pageXOffset, window.pageYOffset);

  //now lets do the scroll

  //yes this is a little bit confusing but to get to the position we want we have to add the scrolll position with the relative position of the element

  // window.scrollTo(
  //   sect1measurement.left + window.pageXOffset,
  //   sect1measurement.top + window.pageYOffset
  // );

  //we can also add scrolling efect like thus

  // window.scrollTo({
  //   left: sect1measurement.left + window.pageXOffset,
  //   top: sect1measurement.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //and then the second method which is a lot eadier goes like this

  //select where we want to go to

  sect1.scrollIntoView({ behavior: 'smooth' });
});

//event listeners
//we have differnt typess of events and event and calling  event listeners such as

//case i
//the way of calling events we always use
const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function () {
//   alert('the king is here');
// });

// //case2
// h1.onmouseenter = function () {
//   alert('the king is here');
// };

//or we can do it like in the html

// function call() {
//   alert('hello there');
// }

// //and we can also remove event listeners like

// setTimeout(function () {
//   h1.removeEventListener('mouseenter', call);
//   h1.textContent = 'hasmann rulz';
// }, 3000);

//now lets talk aboutevent propagation
//what is event propagation you say event propagation is simplt the way an event works that is in finding targeting an bubbling phase
//the three faces in event propagation is
//the capturing
// which is the process of scanning through the whole html document to find the target html element which has the event

//targeting phase
//this is the process of getting orreaching the target html element ehich has the event listener

//bubbling this is the process of scanning back up the entire html document

//just think of the whole proceess as a parent child relationship
//which in the capturing [hase it scans down everp parent till it reaches its child and scans up every child till it goes back up to the parent which is called the bubbling phase

//now lets see event propagation in practice

// const nav = document.querySelector('.nav');
// const navLinks = document.querySelector('.nav__links');
// const navlink = document.querySelector('.nav__link');

// //lets generate a random number from 0-255

// function rand(min, max) {
//   return Math.floor(Math.random() * (max - min) + min + 1);
// }

// function rgb() {
//   return `rgb(${rand(0, 255)},${rand(0, 255)},${rand(0, 255)})`;
// }

// navlink.addEventListener('click', function (e) {
//   this.style.backgroundColor = rgb();
//   console.log('click navlink');
//   console.log(e.target());

//   //we can also prevent event propagation by doing
//   // e.stopPropagation
//   //but i donot  recommend doing it only do it on large applications
// });

// navLinks.addEventListener('click', function (e) {
//   this.style.backgroundColor = rgb();
//   console.log('click navlinks');
//   console.log(e.target());
// });

// nav.addEventListener('click', function (e) {
//   this.style.backgroundColor = rgb();
//   console.log('click nav');
//   console.log(e.target());
// });

//event DELEGATION

//lets set the scrolling for all the links in the html
//we are going to do it in two different ways whichthe first which will be looping through it
//the second is using event delegation

//NOW THIERE IS A PROBLEM WITH THIS ESPECIALL IF WE AFRE DOING WITH A LARGE NUMBER
//THATS WHY WE USE EVENT DELEGATION
const navs = document.querySelectorAll('.nav__link');

for (const nav of navs) {
  nav.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('link');
    let id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
}

//LETS SEE HERE

//USING EVENT DELEGATION

// const navlinkks = document.querySelector('.nav__links');

// navlinkks.addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log(e.target);

//   if (e.target.classList.contains('nav__link')) {
//     console.log('link');
//     let id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });

//TO DO EVENT DELEGATION WE HAVE TO FIND SOMETHING THAT THEY ALL HAVE IN COMMON AND USE THE E.TARGET
//AS A BASIS OF A CONDITION AS ABOVE TO GET THE INFO

//now lets do DOM TRAVERSING

//LETS GET IT!!
const hi = document.querySelector('h1');

//lets get the children
console.log(hi.childNodes);
//which returns all the children of h1  node list

console.log(hi.children);
//which returns all the children of h1 children element

hi.firstElementChild.style.color = 'white';
//we can also get the frst  element
hi.lastElementChild.style.color = '';
//we can also get the last  element

const elementarry = [...hi.children];

for (let i = 0; i < elementarry.length; i++) {
  if (i === 0) {
    elementarry[i].style.color = 'black';
  }
}

//we can also do dom trasversing to find the parent of the selected element

// we can also get the parent node list
console.log(hi.parentNode);

//and we can also get the parent element

console.log(hi.parentElement);

//there is also a method called closest whichlike the queryselector which scans down the document
//the closest sacns upwards through the parent

hi.closest('.header');
hi.closest('h1').style.backgroundColor = '';

//we can also find the next sibling
//this returns a node
console.log(hi.previousSibling);
console.log(hi.nextSibling);

//this returns an html element collection property

console.log(hi.previousElementSibling);
console.log(hi.nextElementSibling);

//we cna also find all the siblings like

console.log(hi.parentElement.children);

/////////
/////////
/////////
/////////
/////////
/////////
/////////

const maintab = document.querySelector('.operations__tab-container');
const optb = document.querySelectorAll('.operations__tab');
const opc = document.querySelectorAll('.operations__content');

maintab.addEventListener('click', function (e) {
  console.log('TAB');
  //////
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  if (!clicked) return;

  for (const op of optb) {
    op.classList.remove('operations__tab--active');
  }

  for (const oc of opc) {
    oc.classList.remove('operations__content--active');
  }

  clicked.classList.add('operations__tab--active');

  console.log(`operations__content--${clicked.dataset.tab}`);

  let set = document.querySelector(
    `.operations__content--${clicked.dataset.tab}`
  );

  set.classList.add('operations__content--active');
});

//now lets do the  navigation hover effect

//lets use dry principle for the following using the bind method to pass parameters
function handleEvents(e) {
  if (e.target.classList.contains('nav__link')) {
    const hov = e.target;
    const siblings = document.querySelectorAll('.nav__link');
    const logo = document.querySelector('img');

    for (const sib of siblings) {
      if (sib !== hov) sib.style.opacity = this;
    }

    logo.style.opacity = this;
  }
}

const nav = document.querySelector('.nav');

nav.addEventListener('mouseover', handleEvents.bind(0.5));

nav.addEventListener('mouseout', handleEvents.bind(1));

//using intersectionObsrver to api add sticky navigationBar

// function observerCallback(entries, observer) {
//   entries.forEach(element => {
//     console.log(element);
//   });
// }

// const observerObject = {
//   root: null,
//   threshold: 0.2,
// };

// const observer = new IntersectionObserver(observerCallback, observerObject);

// observer.observe(sect1);

// const num = 1.344555;

//doing sticky nav bar using intersectionObserver api

const heads = document.querySelector('.header');

function navFunc(entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

const navObserve = new IntersectionObserver(navFunc, {
  root: null,
  threshold: 0,
  rootMargin: `-${nav.getBoundingClientRect().height}px`,
});
navObserve.observe(heads);

//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////

//impleenting a scrolling behaviour

const sectionss = document.querySelectorAll('.section');
function sectObsFunc(entries, observer) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    entry.target.classList.remove('section--hidden');
  }
  // observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(sectObsFunc, {
  root: null,
  threshold: 0.15,
});

for (const scts of sectionss) {
  scts.classList.add('section--hidden');
  sectionObserver.observe(scts);
}

//nw lets do lazy loading foe the pages images

const lazyImg = document.querySelectorAll('img[data-src]');

function imgobfunc(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
}

const imageObserver = new IntersectionObserver(imgobfunc, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

for (const li of lazyImg) {
  imageObserver.observe(li);
}

//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////

//CREATING SLIDESHOW

const sliderRight = document.querySelector('.slider__btn--right');
const sliderLeft = document.querySelector('.slider__btn--left');

const sliders = document.querySelectorAll('.slide');

const slideSect = document.querySelector('#section--3');
for (const [i, sli] of sliders.entries()) {
  sli.style.transform = `translateX(${100 * i}%)`;
}

let sliding = 0;

function slideRight() {
  if (sliding === sliders.length - 1) {
    sliding = -1;
  }
  ++sliding;

  for (const [i, sli] of sliders.entries()) {
    sli.style.transform = `translateX(${100 * (i - sliding)}%)`;
  }
}

function slideLeft() {
  if (sliding === 0) {
    sliding = 1;
  }
  --sliding;

  for (const [i, sli] of sliders.entries()) {
    sli.style.transform = `translateX(${100 * (i - sliding)}%)`;
  }
}

sliderRight.addEventListener('click', function () {
  slideRight();
});

sliderLeft.addEventListener('click', function () {
  slideLeft();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') {
    slideRight();
  } else if (e.key === 'ArrowLeft') {
    slideLeft();
  }
});
