import { Component, OnInit } from '@angular/core';
import { Login } from '../common/data/login';
import { LoginService } from '../common/service/login.service';
import { LoginResponse } from '../common/data/loginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login : Login = new Login();
  message : string;

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
  }

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    //default value (Tp):
    this.login.username="admin1";
    this.login.password="pwdadmin1";
    this.login.roles="admin";
  }

}
