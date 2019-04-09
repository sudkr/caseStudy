import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'listUser', component:ListUserComponent},
  {path:'addUser', component:AddUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
