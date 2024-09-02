import { Component } from '@angular/core';
import { AuthenticationService } from '../../Services/authentication.service';
import { IRegister } from '../../Models/iregister';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  invalidRegister!:boolean
  model:IRegister={} as IRegister
  constructor(private authService:AuthenticationService,private router:Router){}

  register(user:IRegister){
    this.authService.Register(user).subscribe({
      next:(response)=>{
        const token=(<any>response).token;
        localStorage.setItem('jwt',token);
        this.invalidRegister=false
        this.router.navigate(['/'])
      },
      error:()=>{
        this.invalidRegister=true
      }
    })
  }

}
