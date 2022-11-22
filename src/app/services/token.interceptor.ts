import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const toExclude = "/login"

    if(request.url.search(toExclude) === -1){
      console.log("request = " +request);
      
      let jwt = this.authService.getToken();
    let reqWithToken = request.clone( {
    setHeaders: { Authorization : "Bearer "+jwt}
    } );
    console.log("final request = " +reqWithToken);
      return next.handle(reqWithToken);
    }
    return next.handle(request);
    
  }
}