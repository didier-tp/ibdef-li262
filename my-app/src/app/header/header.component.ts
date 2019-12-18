import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  
  ngOnChanges(){
    console.log("ngOnChanges() appele avec titre = " + this.titre);
  }

  @Input()
  titre : string = "titre par defaut";

  constructor() {
    console.log("constructor() appele avec titre = " + this.titre);
   }

  ngOnInit() {
    console.log("ngOnInit() appele avec titre = " + this.titre);
  }

}
