'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const buttonScroll = document.querySelector('.btn--scroll-to');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (const mod of btnsOpenModal) mod.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const moveTo = document.querySelector('#section--1');
buttonScroll.addEventListener('click', function () {
  moveTo.scrollIntoView({ behavior: 'smooth' });
});

//using event delegation

const navLinks = document.querySelector('.nav__links');

navLinks.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    let navScroll = e.target.getAttribute('href');
    document.querySelector(navScroll).scrollIntoView({ behavior: 'smooth' });
  }
});

function navHov(e) {
  if (e.target.classList.contains('nav__link')) {
    const hovLink = e.target;

    for (const nl of navlink) {
      if (nl != hovLink) {
        nl.style.opacity = this;
      }
    }
  }
  document.querySelector('#logo').style.opacity = this;
}

const navlink = document.querySelectorAll('.nav__link');

navLinks.addEventListener('mouseover', navHov.bind(0.5));

navLinks.addEventListener('mouseout', navHov.bind(1));

//setting the tab

const tabCon = document.querySelector('.operations__tab-container');

const tabbtn = document.querySelectorAll('.operations__tab');

const tabtxt = document.querySelectorAll('.operations__content');
tabCon.addEventListener('click', function (e) {
  if (e.target.closest('button')) {
    const tab = e.target;
    console.log(tab);
    for (const tb of tabbtn) {
      tb.classList.remove('operations__tab--active');
    }

    tab.classList.add('operations__tab--active');

    for (const tbx of tabtxt) {
      tbx.classList.remove('operations__content--active');
    }

    document
      .querySelector(`.operations__content--${tab.dataset.tab}`)
      .classList.add('operations__content--active');
  }
});

//Doing page effects

const allSection = document.querySelectorAll('.section');

function obsfunc(entries, observer) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    entry.target.classList.remove('section--hidden');
  }
}

const sectObs = new IntersectionObserver(obsfunc, {
  root: null,
  threshold: 0.15,
});

for (const as of allSection) {
  as.classList.add('section--hidden');
  sectObs.observe(as);
}

function imgobsfunc(entries, observer) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });
  }
}

const imageobserver = new IntersectionObserver(imgobsfunc, {
  root: null,
  threshold: 0,
});

const shwimage = document.querySelectorAll('img[data-src]');

for (const shim of shwimage) {
  imageobserver.observe(shim);
}

const heads = document.querySelector('header');
const sticknav = document.querySelector('.nav');

function stiobsfunc(entries, observe) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    sticknav.classList.add('sticky');
  } else {
    sticknav.classList.remove('sticky');
  }
}

const stickyNavobs = new IntersectionObserver(stiobsfunc, {
  root: null,
  threshold: 0,
});

stickyNavobs.observe(heads);
