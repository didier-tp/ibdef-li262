import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { BasicComponent } from './basic/basic.component';
import { ConversionComponent } from './conversion/conversion.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { TvaComponent } from './basic/tva/tva.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'login', component: LoginComponent } ,
  { path: 'basic', component: BasicComponent ,
  children: [
   { path: 'tva', component: TvaComponent },
   { path: 'calculatrice/:mode', component: CalculatriceComponent },
   { path: '', redirectTo: 'tva', pathMatch: 'prefix'}
   ]
  } ,
  { path: 'conversion', component: ConversionComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
