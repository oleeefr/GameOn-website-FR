// fonction pour le resposive de la bar de menu
export function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Selection de DOM Elements
export const modalbg = document.querySelector(".bground");
export const modalBtn = document.querySelectorAll(".modal-btn");
export const form = document.querySelector(".modalForm");
export const inputsForm = document.querySelectorAll("input");
export const inputRadioGrp = document.querySelectorAll("input[name=location]");
export const menu = document.querySelector(".icon");
export const modalMessageConfirm = document.querySelector(".message-confirmation");
export const closeModalBtn = document.querySelectorAll("button[name=closeButton]");

// launch modal form
export function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
export function closeModal() {
  modalbg.style.display = "none";
  modalMessageConfirm.style.display = "none";
  form.style.display = "block";
  initMessageinfo();
  form.reset();
}


// function permettant l'affichage du message d'erreur
// pour un champ de formulaire
// prend en entrée un objet input & un booléen
export function messageInfo (input, valid) {
  let visible = false;
  if (!valid) visible = true;
  input.parentElement.setAttribute("data-error-visible", visible);
}

// function permettant la réinitialisation des messages d'erreur
// des champs du formualire à false
function initMessageinfo () {
  let visible = false;
  inputsForm.forEach(element => { 
    element.parentElement.setAttribute("data-error-visible", visible);
  });
}


