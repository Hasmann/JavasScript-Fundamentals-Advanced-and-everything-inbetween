"use strict";

const btnshowModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const btncloseModal = document.querySelector(".close-modal");
const overlayHidden = document.querySelector(".overlay");

function showmodal() {
  modal.classList.remove("hidden");
  overlayHidden.classList.remove("hidden");
}

function closemodal() {
  modal.classList.add("hidden");
  overlayHidden.classList.add("hidden");
}

function escapemodal(e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closemodal();
  }
}

for (let i = 0; i < btnshowModal.length; i++) {
  console.log("Button Clicked");
  btnshowModal[i].addEventListener("click", showmodal);
}

btncloseModal.addEventListener("click", closemodal);
overlayHidden.addEventListener("click", closemodal);

//using the escape key in the keyboard keyboard eventListener

document.addEventListener("keydown", escapemodal);
