class Personne{
    nom : string;
    prenom : string;
    age :  number;

    constructor(nom:string="?",prenom:string="?",age:number=0){
        this.nom=nom;
        this.prenom=prenom;
        this.age=age;
    }

    nomComplet():string{
        return `${this.prenom} ${this.nom}`;
    }
}

let p1 : Personne;
p1 = new Personne();
p1.nom = "Bon" ;
p1.prenom = "jean";
p1.age = 25;

console.log(p1.nomComplet());
console.log(p1);
let p2 = new Personne("Therieur","alex",30);
console.log(p2.nomComplet());
console.log(p2);