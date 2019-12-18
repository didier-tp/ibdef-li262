import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

export interface ChangeHumeurEvent {
  value : string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  humeur : string ="?";
  listeHumeurs= [ "?" , "bonneHumeur" , "mauvaiseHumeur"];

  @Output()
  changementHumeur : EventEmitter<ChangeHumeurEvent> = new EventEmitter<ChangeHumeurEvent>();

  onChangeHumeur(evt : any ){
    this.humeur = evt.target.value;
    console.log("humeur="+this.humeur);
    this.changementHumeur.emit( { value: this.humeur } );
  }

  listeCouleurs = ["yellow" , "lightgrey"  , "cyan" , "blank"];

  constructor(public preferencesService : PreferencesService ) { 
    //injection automatique du service @injectable via constructeur de composant 
    //angular 
  }

  ngOnInit() {
  }

}
