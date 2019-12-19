import { Component, OnInit } from '@angular/core';
import { Devise } from '../common/data/devise';
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
         .subscribe(
           (tabDevises:Devise[])=>{ this.listeDevises = tabDevises;
                                    console.log("tabDevises:" + tabDevises)
                                  },
            (error)=>{ console.log("erreur:" + error);}                      
         );
  }

}
