import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {
/*
 private devises = [
    { code : "EUR" , name : "euro" , change : 0.9} ,
    { code : "USD" , name : "dollar" , change : 1} ,
    { code : "GBP" , name : "livre" , change : 0.8} ,
    { code : "JPY" , name : "yen" , change : 125} 
  ];
*/
  rechercherDevises() : Observable<Devise[]> {
    let url = "./devise-api/public/devise";
    //NB: l'url relative sera préfixée par http://localhost:8282  ou autre
    //selon la configuration de proxy.conf.json (option --proxy-config de ng serve)
    //ou selon une configuration équivalente (reverse-proxy) d'un vrai serveur
    //http de production (ex: IIS , Apache , nginx , ...)
    return this.http.get<Devise[]>(url);
    //préversion de simulation (compatible futur appel asynchrone)
    //return of(this.devises);
  }

  public convertir(codeMSource:string , codeMCible : string , montant: number) 
                      : Observable<number> {
    //.../devise-api/public/convert?source=EUR&target=USD&amount=200
    let url = `./devise-api/public/convert?source=${codeMSource}&target=${codeMCible}&amount=${montant}`;
            return this.http.get<any>(url)
                       .pipe(
                         map((objReponse:any)=> { return objReponse.result; })
                       );
     //préversion de simulation
     //console.log("codeMSource="+codeMSource);
     //console.log("codeMCible="+codeMCible);
     //return of(montant * 2.0);
  }

  constructor(private http : HttpClient) { }
}
