import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

// se quiser pegar a url do swagger.json
// import { servers } from './swagger.json'

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  private baseUrl = 'https://api.github.com/repos';

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newRequest = request.clone({
      url: `${this.baseUrl}${request.url}`
    });

    return next.handle(newRequest);
  }
}
