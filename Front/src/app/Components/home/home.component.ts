import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router:Router,private jwtHelper:JwtHelperService){}

goToLogin(){
  this.router.navigate(['/Login'])
}
goToRegister(){
  this.router.navigate(['/Register'])

}

  isUserAuthenticated(){
    const token:string|null=localStorage.getItem('jwt')
    if(token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    else{
      return false;
    }
  }
  
  logOut(){
    localStorage.removeItem('jwt');
  }

}
