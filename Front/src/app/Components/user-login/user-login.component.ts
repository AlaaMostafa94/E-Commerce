import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { ILogin } from '../../Models/ilogin';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

   invalidLogin!:boolean
userLogin:ILogin
   constructor(private router:Router,private httpClient:HttpClient){
    this.userLogin={} as ILogin
   }
   login(){
  //   const credintials={
  //     'username':form.value.username,
  //     'password':form.value.password
  //   }

     this.httpClient.post(`${environment.ApiUrl}/api/Auth/UserLogin`,this.userLogin).subscribe({
      next:(response)=>{
        const token=(<any>response).token;
        localStorage.setItem('jwt',token);
        this.invalidLogin=false;
        this.router.navigate(['/']);
      },
      error:()=>{
        this.invalidLogin=true
      }
     })
  }
}
