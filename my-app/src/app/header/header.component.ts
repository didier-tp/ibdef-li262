import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  couleurFondPreferee  : string = "yellow";

  ngOnInit() {
    console.log("ngOnInit() appele avec titre = " + this.titre);
    this.preferencesService.bsCouleurFond
          .subscribe(
            (nouvelleCouleur : string)=>{ 
                  this.couleurFondPreferee = nouvelleCouleur;
                  console.log("nouvelleCouleur:"+nouvelleCouleur);
            }
          )
  }
  
  ngOnChanges(){
    console.log("ngOnChanges() appele avec titre = " + this.titre);
  }

  @Input()
  titre : string = "titre par defaut";

  constructor(public preferencesService : PreferencesService) {
    console.log("constructor() appele avec titre = " + this.titre);
   }

  

}
