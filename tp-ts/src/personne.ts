export class Personne{

    constructor(public nom:string="?",public prenom:string="?",private _age:number=0){
    }

    public get age() { return this._age; }
    public set age(newAge : number) { if(newAge>=0) 
                                          this._age =newAge; }

    nomComplet():string{
        return `${this.prenom} ${this.nom}`;
    }
}