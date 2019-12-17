import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss']
})
export class CalculatriceComponent implements OnInit {

  x : number = 1;
  y : number;
  res : number;

  onAddition(){
     this.res= this.x + this.y;
     //this.res = Number(this.x) + Number(this.y);
  }

  onMultiplication(){
    this.res= this.x * this.y;
 }

  constructor() { }

  ngOnInit() {
  }

}
