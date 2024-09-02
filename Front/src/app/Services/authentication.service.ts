import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegister } from '../Models/iregister';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }

  Register(model:IRegister):Observable<IRegister>{
    return this.httpClient.post<IRegister>(`${environment.ApiUrl}/api/Auth/register`,model);
  }
}
