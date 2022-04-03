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
// export const formData = document.querySelectorAll(".formData");

export const form = document.querySelector(".modalForm");
export const inputsForm = document.querySelectorAll("input");
export const inputRadioGrp = document.querySelectorAll("input[name=location]");
export const menu = document.querySelector(".icon");
export const modalMessageConfirm = document.querySelector(".message-confirmation");
export const closeModalBtn = document.querySelectorAll("button[name=closeButton]");

// launch modal formm
export function launchModal() {
  modalbg.style.display = "block";
}

export function closeModal() {
  modalbg.style.display = "none";
  form.reset();
}


