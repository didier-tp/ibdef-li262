import { Component, OnInit } from '@angular/core';
import { Devise } from '../common/data/devise';
import { map } from 'rxjs/operators'
import { DeviseService } from '../common/service/devise.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  listeDevises : Devise[] = [];
  codeDeviseSource : string;
  codeDeviseCible : string;
  montant : number;
  montantConverti : number;

  onConvertir(){
    //préversion:
    this.deviseService.convertir(this.codeDeviseSource,
                                this.codeDeviseCible,
                                this.montant)
          .subscribe(
            (sommeConvertie: number)=>{ this.montantConverti = sommeConvertie },
            (error)=>{ console.log(error); }
          );
  }

  constructor(private deviseService: DeviseService) {
    //injection de dépendance
   }

  ngOnInit() {
     this.deviseService.rechercherDevises()
         .pipe(
           map( (tabDevises:Devise[]) =>  
            tabDevises.sort(
              (d1,d2) => d1.code.localeCompare(d2.code)
            )
           )
         )
         .subscribe(
            (tabDevises:Devise[])=>{ this.gererListeDevises(tabDevises);  },
            (error)=>{ console.log("erreur:" + error);}                      
         );
      
  }

  private gererListeDevises(tabDevises : Devise[]){
    this.listeDevises = tabDevises;
    console.log("tabDevises:" + tabDevises);
    this.codeDeviseSource = this.listeDevises[0].code;
    this.codeDeviseCible = this.listeDevises[0].code;
  }

}
