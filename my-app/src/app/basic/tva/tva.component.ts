import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.scss']
})
export class TvaComponent implements OnInit {

  ht : number ;
  taux : number ;
  listeTaux : number[] = [ 5 , 10 , 20];
  tva  : number ;
  ttc : number ;

  constructor() {
    this.taux = this.listeTaux[0];
   }

   onCaclulerTvaEtTtc(){
     this.tva = this .ht * this.taux / 100;
     this.ttc = Number(this.tva) + Number(this.ht);
   }

  ngOnInit() {
  }

  methIsNaN(val : any) : boolean {
    return isNaN(val);
  }

}
