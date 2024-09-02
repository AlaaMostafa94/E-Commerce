import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { IProduct } from '../Models/iproduct';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  errorMessage='Error occured , Try again'
   token =localStorage.getItem('jwt')
  httpOptions;
  constructor(private httpClient: HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        //'Content-Type': 'application/json',
        Authorization : `Bearer ${this.token}`,
        //'Accept': 'application/json'
      })
    }
  }

  // private handleErrors(err: HttpErrorResponse) {
  //   if (err.status === 0) {
  //     console.error('An error occured: ', err.error)
  //   }
  //   else {
  //     console.error(`Backend returned code ${err.status} ,body: `, err.error)
  //   }

  //   return throwError(() => { 
  //     new Error(this.errorMessage) })

  // }
  GetAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.ApiUrl}/api/Products`,this.httpOptions)
  }

  GetProductById(prdId: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${environment.ApiUrl}/api/Products/${prdId}`)
  }

  AddNewProduct(prd: IProduct) {
    return this.httpClient.post(`${environment.ApiUrl}/api/Products`, prd)//.pipe(
      //retry(3),
      // catchError(this.handleErrors)
    //);
  }

  EditProduct(id: number, prd: IProduct) {
    return this.httpClient.put(`${environment.ApiUrl}/api/Products/${id}`, prd)
  }

  DeleteProduct(id: number) {
    return this.httpClient.delete(`${environment.ApiUrl}/api/Products/${id}`)
  }

}
