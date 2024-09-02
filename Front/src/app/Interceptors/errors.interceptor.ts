import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(3),
      catchError((error: HttpErrorResponse) => {
        console.error('error occurred:', error);
        return throwError(()=>new Error('Error occured , Try later'));
      })
    );
  }
}