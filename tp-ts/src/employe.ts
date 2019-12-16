import { Personne } from "./personne";

export class Employe extends Personne{
    public numero : number = 0;
    public salaire : number = 0;
    constructor(nom:string="?" , prenom:string="?"){
        super(nom,prenom);
    }

    nomComplet():string{
        return super.nomComplet() + " (employe) ";
    }
} 