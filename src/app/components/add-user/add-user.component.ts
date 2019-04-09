import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/model/login';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  loginArray: Login[] = [];
  registerForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;

  constructor(private formbuilder: FormBuilder,
    private router: Router, private userservice: UserService, private loginService: LoginService) { }

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    let username = this.registerForm.controls.email.value;

    for (let i = 0; i < this.loginArray.length; i++) {
      // if (username == !this.loginArray[i].email) {
      //   alert("User already exists..!");
      //   this.userservice.addUser(this.registerForm.value)
      //   .subscribe(data =>{
      //     this.router.navigate(['listUser'])
      //   }
      //   );


        if (username == this.loginArray[i].email) {
          alert("User already exists..!");}
          else{
          this.userservice.addUser(this.registerForm.value)
          .subscribe(data =>{
            this.router.navigate(['listUser'])
          }
          );
      break;
      }
    }





    // this.userservice.addUser(this.registerForm.value)
    //   .subscribe(data =>
    //     //{alert('record Added..!!')}
    //     this.router.navigate(['listUser'])
    //   );
    this.loginService.getLogin().subscribe()
    this.router.navigate(['listUser']);
  }

  backToList() {
    this.router.navigate(['listUser']);
  }
}
