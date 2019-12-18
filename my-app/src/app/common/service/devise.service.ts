import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

 private devises = [
    { code : "EUR" , name : "euro" , change : 0.9} ,
    { code : "USD" , name : "dollar" , change : 1} ,
    { code : "GBP" , name : "livre" , change : 0.8} ,
    { code : "JPY" , name : "yen" , change : 125} 
  ];

  //rechercherDevises() : Observable<Devise[]> {
  public rechercherDevises() : Devise[] {
    //préversion de simulation
    return this.devises;
  }

  public convertir(codeMSource:string , codeMCible : string , montant: number) : number {
     //préversion de simulation
     return montant * 2.0;
  }

  constructor() { }
}
