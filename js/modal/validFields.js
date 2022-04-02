// Importation des méthodes permettant le controle des champs
// du formulaire
import {ControlCheck} from '../utils/ControlCheck.js';

//Importation des entrées du formulaire
import {inputsForm,inputRadioGrp} from './modal.js';

// Fonction permettant de valider un champ à partir des régles de restriction
// Prend en entrée un objet input & renvoie un booléen
// si oui le champ est validé
function checkPerField (input) {
        let valid=true;
        switch (input.className) {
            
            case 'text-control':
                switch(input.name) {

                    case 'first':
                        valid = ControlCheck.minCharacter(input.value,2);
                        if (!valid) input.parentElement.setAttribute("data-error-visible", true);
                        break

                    case 'last':
                        valid = ControlCheck.minCharacter(input.value,2);
                        if (!valid) input.parentElement.setAttribute("data-error-visible", true);
                        break

                    case 'email':
                        valid = ControlCheck.isEmail(input.value);
                        if (!valid) input.parentElement.setAttribute("data-error-visible", true);
                        break

                    case 'birthdate':
                        valid = ControlCheck.isDateValid(input.value);
                        if (!valid) input.parentElement.setAttribute("data-error-visible", true);
                        break

                    case 'quantity':
                        valid = ControlCheck.isPositive(input.value);
                        if (!valid) input.parentElement.setAttribute("data-error-visible", true);
                        break
                }
                break

            case 'checkbox-input':
                switch (input.name) {
                    case 'location':
                        valid = validRadioFields();
                        if (!valid) input.parentElement.setAttribute("data-error-visible", true);
                        break

                    case 'condition':
                        if (!input.checked) valid = false;
                        if (!valid) input.parentElement.setAttribute("data-error-visible", true);
                        break
                }   
                break
           
        }
        return valid;
};

// fonction permettant de parcourir le formulaire
// pour le controle des champs. Renvoie un booléen
// si oui les tous champs sont valides.
export function validFields() {
    let formConform = true;
    inputsForm.forEach(element => { 
           if (!checkPerField(element)) formConform = false;
    });

    return formConform;
}

// fonction permettant de parcourir le groupe
// entrée de bouton radio pour un contrôle de check
// renvoie un booléen vrai si un bouton radio est coché
function validRadioFields() {
    let checked = false;
    inputRadioGrp.forEach((input) => {
        if (input.checked) checked = true;
        return;
      });
    return checked;
}
