import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const jwtHelper = inject(JwtHelperService)

  const token=localStorage.getItem('jwt')
// debugger;
  if(token && !jwtHelper.isTokenExpired(token)){
   // router.navigate(['/Products/ProductList'])
 return true;
  }
  else{
    router.navigate(['/Login'])
    return false
  }

};
