import { Component } from '@angular/core';
import { ILogin } from '../../Models/ilogin';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  invalidLogin!:boolean
  adminLogin:ILogin
  constructor(private router:Router,private httpClient:HttpClient){
    this.adminLogin={} as ILogin
   }

   login(){

  
       this.httpClient.post(`${environment.ApiUrl}/api/Auth/AdminLogin`,this.adminLogin).subscribe({
        next:(response)=>{
          const token=(<any>response).token;
          localStorage.setItem('jwt',token);
          this.invalidLogin=false;
          this.router.navigate(['/Admin']);
        },
        error:()=>{
          this.invalidLogin=true
        }
       })
    }

}
