import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/model/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginArray:Login[]=[];
  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  returnUrl:string;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService:LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loginService.getLogin().subscribe(data=>{this.loginArray=data})
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    let username = this.loginForm.controls.email.value;
    let password=this.loginForm.controls.password.value;

    let flag=0
    for(let i=0;i<this.loginArray.length;i++){
      if(username==this.loginArray[i].email && password==this.loginArray[i].password)
        {
          localStorage.setItem("addnew",username)
          flag=1
          break;
        }
        
    }
    if (this.loginForm.controls.email.value == "admin@gmail.com" &&
      this.loginForm.controls.password.value == "123456") {
      localStorage.setItem("username", username);
      this.router.navigate(['/listUser']);
    }
    else if(flag){
      this.router.navigate(['/listUser']);
    }
    else {
      this.invalidLogin = true;
    }
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

}