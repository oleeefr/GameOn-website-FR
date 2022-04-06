// Importation des elements du DOM de la modal formulaire
import  {editNav, 
         menu, 
         form, 
         modalBtn, 
         launchModal, 
         modalMessageConfirm, 
         closeModalBtn,
         reinitialisationFormulaire, 
         closeModal 
        } from './modal/modal.js';

// Importation du contrôle du formulaire
import {validFields} from './modal/validFields.js';

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));

//menu responsive du site
menu.onclick = () => {editNav()};

// lancement de la validation du formulaire
form.onsubmit = (e) => {
  e.preventDefault();
  if(validFields()) {
    reinitialisationFormulaire();
    form.style.display = "none";
    modalMessageConfirm.style.display = "grid";
  };
}

