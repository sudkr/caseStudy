import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Users } from '../../model/users';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users:Users[];
  constructor( private userservice:UserService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem("username")!=null){
      this.userservice.getUser().subscribe(data=>{
        this.users = data;
      });
    }
    else{
      this.router.navigate(['/login']);
    }
  }

  deleteUser(users: Users): void{
    let r = confirm("Do you want to delete the user");
    if(r == true){
      this.userservice.deleteUser(users).subscribe(
        () => {this.users = this.users.filter(u => u !== users)}
      );      
    }
  }

  addUser(){
    this.router.navigate(['/addUser']);
  }

  logOut(){
      this.router.navigate(['/login']);
  }

  isLogged() {
    return localStorage.getItem("username") != null;
  }
}
