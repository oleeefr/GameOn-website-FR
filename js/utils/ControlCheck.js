
export class ControlCheck {

    // Méthode static permettant de controler si l'argument est un nombre
    // si oui alors renvoie true
    static isNumber (number) {
        /*
        if(parseInt(number)==='NaN') return false;
        return true;*/
        return !(parseInt(number)==='NaN');
    }

    // Méthode static permettant de controler si l'argument est null
    // si oui alors renvoie False
    static isNull (arg) {
        
        return !(arg === 'Null');
    }

    // Méthode static permettant de controler si l'argument est vide
    // si oui alors renvoie False
    static isEmpty (arg) {

        return (arg.length>0);
    }

    // Méthode static permettant de controler si l'argument est positif ou égal à 0
    // si oui alors renvoie true
    static isPositive (arg) {

        return (this.isEmpty(arg) && arg>=0);
    }

    // Méthode static permettant de contrôler si l'argument est de longueur
    // minimum min
    // si oui alors renvoie True
    static minCharacter (string, min) {
        /*
        if (string.length>= min) return false;
        return true; */
        return string.length>= min;
    }

    // Méthode static permettant de contrôler si l'argument est un
    // email valide
    // si oui alors renvoie True
    static isEmail (email) {
        let pattern ="^[a-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$";
        /*
        if (email.match(pattern)=== null) return false;
        return true; */
        return !(email.match(pattern)=== null);
    }


    // Méthode static permettant de contrôler si l'argument est une
    // date au bon format valide jj/mm/aaaa
    // si oui alors renvoie True
    static isDateValid (date) {
        let dateObject = new Date (date).toLocaleDateString("fr");
        let pattern ="^([123]0|[012][1-9]|31)\/(0[1-9]|1[012])\/(19[0-9]{2}|2[0-9]{3})$";
        return !(dateObject.match(pattern)=== null);
    }

}