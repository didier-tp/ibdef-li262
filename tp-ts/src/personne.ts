class Personne{

    constructor(public nom:string="?",public prenom:string="?",private _age:number=0){
    }

    public get age() { return this._age; }
    public set age(newAge : number) { if(newAge>=0) 
                                          this._age =newAge; }

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
console.log( JSON.stringify(p2));