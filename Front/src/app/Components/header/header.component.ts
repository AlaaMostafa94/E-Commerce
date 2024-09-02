import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

//   constructor(private router:Router){}

// goToLogin(){
//   this.router.navigate(['/Login'])
// }

//   isUserAuthenticated(){
//     const token:string|null=localStorage.getItem('jwt')
//     if(token){
//       return true;
//     }
//     else{
//       return false;
//     }
//   }
  
//   logOut(){
//     localStorage.removeItem('jwt');
//   }


}
