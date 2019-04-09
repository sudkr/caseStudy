import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:3000/users";
  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<Users[]>(this.baseUrl);;
  }

  getUserById(id: number) {
    return this.http.get<Users>(this.baseUrl + '/' + id);
  }
  
  addUser(user:Users){
    return this.http.post(this.baseUrl,user);
  }

  deleteUser(user: Users){
    return this.http.delete(this.baseUrl+'/'+user.id);
  }
}