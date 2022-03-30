export function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
export const modalbg = document.querySelector(".bground");
export const modalBtn = document.querySelectorAll(".modal-btn");
export const formData = document.querySelectorAll(".formData");

// launch modal event
/* modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));*/

// launch modal formm
export function launchModal() {
  modalbg.style.display = "block";
}