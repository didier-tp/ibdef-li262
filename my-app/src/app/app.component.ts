import { Component } from '@angular/core';
import { ChangeHumeurEvent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title :string = 'my-app';

  onChangementHumeur(event : ChangeHumeurEvent){
    console.log("nouvelle humeur = "  + event.value);
    alert(event.value);
  }
}
