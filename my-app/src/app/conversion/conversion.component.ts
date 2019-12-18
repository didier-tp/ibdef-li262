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
    this.montantConverti = 2.0;
  }

  constructor(private deviseService: DeviseService) {
    //injection de dépendance
   }

  ngOnInit() {
  }

}
