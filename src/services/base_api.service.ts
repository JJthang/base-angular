import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const NEXT_PUBLIC_API_URL = 'https://sandbox.hearme.vn:7022/oauth'; // Replace with your actual API URL

@Injectable()
export class AuthHttpService implements HttpInterceptor {
  constructor(private http: HttpClient) {}

  // Intercepting request to add Authorization token
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('accessToken');

    if (token) {
      // Clone the request to add the Authorization header
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        url: `${NEXT_PUBLIC_API_URL}${req.url}`, // Prepend the base API URL
      });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 || error.status === 403) {
          localStorage.removeItem('accessToken');
          // Optionally redirect to login page
          // window.location.href = '/login';
        }
        return throwError(error);
      })
    );
  }
}
