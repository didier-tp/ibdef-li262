import { Component, OnInit } from '@angular/core';
import { Login } from '../common/data/login';
import { LoginService } from '../common/service/login.service';
import { LoginResponse } from '../common/data/loginResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login : Login = new Login();
  message : string;
  loginSuccessful : boolean = false;

  onLogin(){
    //this.message = "login="+JSON.stringify(this.login);
    this.loginService.postLogin(this.login)
                     .subscribe(
                       (loginResponse) => { this.gererLoginResponse(loginResponse)} ,
                       (error) => { this.message="echec auth : " + error}
                     );
    
  }

  private gererLoginResponse(loginResponse:LoginResponse){
      //this.message = loginResponse.message ;
      this.message = JSON.stringify(loginResponse);
      if(loginResponse.status){
        this.loginSuccessful=true;
      }else {
        this.loginSuccessful=false;
      }
  }

  constructor(private loginService: LoginService,
              private router : Router) { }

  naviguer(ou:string){
    let link = [ ou];
    this.router.navigate(link);
  }              

  ngOnInit() {
    //default value (Tp):
    this.login.username="admin1";
    this.login.password="pwdadmin1";
    this.login.roles="admin";
  }

}
