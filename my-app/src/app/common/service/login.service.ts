import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../data/login';
import { LoginResponse } from '../data/loginResponse';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http : HttpClient) { }

  public postLogin(login : Login):Observable<LoginResponse> {
    let authUrl : string = "./login-api/public/auth" ; //avec ng serve --proxy-config proxy.conf.json
    return this.http.post<LoginResponse>(authUrl ,
                                        login,
                                        {headers: this._headers} )
                    .pipe(
                            tap( (loginResponse) => { this.storeTokenIfSuccessfulLogin(loginResponse); })
                    )
    }

    private storeTokenIfSuccessfulLogin(loginResponse: LoginResponse){
        if(loginResponse.status){
          localStorage.setItem("token",loginResponse.token);
          //sessionStorage.setItem("token",loginResponse.token);
          //ou ...
        }
    }
}
