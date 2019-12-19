import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  //public couleurFondPreferee : string = "yellow"; //default value

  public bsCouleurFond : BehaviorSubject<string>
              = new BehaviorSubject<string>("yellow");
     
  public majCouleurFond(nouvelleCouleur : string){
    this.bsCouleurFond.next(nouvelleCouleur);
    //.next() change la valeur interne du BehaviorSubject (Object)
    //et ça va automatiquement redéclenché toutes les callbacks
    //enregistrées via subscribe
  }            

  constructor() { }
}
