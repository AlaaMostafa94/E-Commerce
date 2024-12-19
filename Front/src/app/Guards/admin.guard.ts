import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const jwtHelper = inject(JwtHelperService)

  const token=localStorage.getItem('jwt')
// debugger;
  if(token && !jwtHelper.isTokenExpired(token)){
 return true;
  }
  else{
    router.navigate(['/AdminLogin'])
    return false
  }};
