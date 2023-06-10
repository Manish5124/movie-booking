import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {
    console.log("interceptor is calling.....");
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  
    let authReq = request;
  
      const token = this.authService.getToken();
    console.log("token in interceptor=>",token);
      if(token != null){
        authReq = request.clone({headers: request.headers.set('Authorization', 'Bearer '+token)});
      }
  
      return next.handle(authReq);
    }
  }
  
  export const authInterceptorProviders = [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ];
  