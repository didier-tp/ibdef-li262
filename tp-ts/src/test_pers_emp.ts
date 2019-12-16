
import { Personne } from "./personne";
import { Employe } from "./employe";

let p1 : Personne;
p1 = new Personne();
p1.nom = "Bon" ;
p1.prenom = "jean";
p1.age = 25;

let e1 : Employe = new Employe("Therieur" , "alain");
e1.numero=12;
e1.salaire=2500;
console.log("e1.nomComplet()="+e1.nomComplet());
console.log(e1);

let e_or_p : Personne;
e_or_p = e1;
console.log("type de l'instance référencée par e_or_p=" + typeof e_or_p)
console.log(e1);


console.log(p1.nomComplet());
console.log(p1);
let p2 = new Personne("Therieur","alex",30);
console.log(p2.nomComplet());
console.log( JSON.stringify(p2));