import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginurl:string="http://localhost:3000/users"
  constructor(private http:HttpClient) { }

  getLogin(){
    return this.http.get<Login[]>(this.loginurl);
  }

  addLogin(login:Login){
    return this.http.post(this.loginurl,login);
  }
}
