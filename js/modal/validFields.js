// Importation des méthodes permettant le controle des champs
// du formulaire
import {ControlCheck} from '../utils/ControlCheck.js';

//Importation des entrées du formulaire
import {inputsForm, inputRadioGrp, messageInfo} from './modal.js';

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
                        messageInfo(input, valid);
                        break

                    case 'last':
                        valid = ControlCheck.minCharacter(input.value,2);
                        messageInfo(input, valid);
                        break

                    case 'email':
                        valid = ControlCheck.isEmail(input.value);
                        messageInfo(input, valid);
                        break

                    case 'birthdate':
                        valid = ControlCheck.isDateValid(input.value);
                        messageInfo(input, valid);
                        break

                    case 'quantity':
                        valid = ControlCheck.isPositive(input.value);
                        messageInfo(input, valid);
                        break
                }
                break

            case 'checkbox-input':
                switch (input.name) {
                    case 'location':
                        valid = validRadioFields();
                        messageInfo(input, valid);
                        break

                    case 'condition':
                        if (!input.checked) valid = false;
                        messageInfo(input, valid);
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
