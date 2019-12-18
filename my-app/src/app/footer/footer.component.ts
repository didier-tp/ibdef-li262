import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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

  onChangeHumeur(){
    this.changementHumeur.emit( { value: this.humeur } );
  }


  constructor() { }

  ngOnInit() {
  }

}
