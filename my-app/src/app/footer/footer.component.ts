import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';
import { TraductionService } from '../common/service/traduction.service';
import { OnLineOffLineService } from '../common/service/on-line-off-line.service';

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

  private onLine:boolean;

  couleurFondPreferee : string ="yellow";

  onChangeCouleur(){
    this.preferencesService.majCouleurFond(this.couleurFondPreferee);
  }

  @Output()
  changementHumeur : EventEmitter<ChangeHumeurEvent> = new EventEmitter<ChangeHumeurEvent>();

  onChangeHumeur(evt : any ){
    this.humeur = evt.target.value;
    console.log("humeur="+this.humeur);
    this.changementHumeur.emit( { value: this.humeur } );
  }

  listeCouleurs = ["yellow" , "lightgrey"  , "cyan" ];

  constructor(public preferencesService : PreferencesService,
              public traductionService : TraductionService,
              private onlineOfflineService: OnLineOffLineService ) { 
    //injection automatique du service @injectable via constructeur de composant 
    //angular 
  }

  ngOnInit() {
    this.onlineOfflineService.connectionChanged
            .subscribe( (onLine)=>{this.onLine = onLine;})
  }

}
