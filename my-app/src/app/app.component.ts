import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title :string = 'my-app';

  onChangementHumeur(event : {value:string}){
    console.log("nouvelle humeur = "  + event.value);
    alert(event.value);
  }
}
