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
    this.montantConverti = this.deviseService.convertir(this.codeDeviseSource,
                                                        this.codeDeviseCible,
                                                        this.montant);
  }

  constructor(private deviseService: DeviseService) {
    //injection de dépendance
   }

  ngOnInit() {
    this.listeDevises = this.deviseService.rechercherDevises();
  }

}
