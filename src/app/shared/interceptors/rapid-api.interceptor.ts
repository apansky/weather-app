import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiKey } from './../constants/rapid-api';

@Injectable({
  providedIn: 'root'
})
export class RapidApiInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req.clone({ setHeaders: {
      'x-rapidapi-key': apiKey
    }}));
  }
}
