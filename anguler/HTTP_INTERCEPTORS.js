/**
 * What is interceptor in Angular interview questions?
    In Angular, interceptors are classes that can be used to intercept and manipulate HTTP requests and responses. They provide a way to modify or handle HTTP requests globally before they are sent to the server or to modify the HTTP responses before they are delivered to the calling code.

 
    Interceptors are useful for tasks like adding authentication headers, logging, error handling, caching, and more. 

    To create an interceptor in Angular, you need to implement the HttpInterceptor interface and define the logic for intercepting requests and responses.
    
Here’s an example of an HTTP interceptor that adds an authorization header to outgoing requests:


Create the interceptor class:
 // auth-interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest,
    next: HttpHandler
  ): Observable> {
    // Add authorization header to the request
    const authToken = 'your_auth_token_here';
    const authRequest = request.clone({
      setHeaders: { Authorization: `Bearer ${authToken}` },
    });

    // Pass the modified request to the next interceptor or the HTTP handler
    return next.handle(authRequest);
  }
}


2. Register the interceptor:
To use the interceptor, you need to provide it in the AppModule or the module where your HTTP requests are made.
 // app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class AppModule {}

In this example, we register the AuthInterceptor as a provider for the HTTP_INTERCEPTORS multi-provider token. The multi: true option indicates that this interceptor can be one of many, as multiple interceptors can be provided.
Now, whenever an HTTP request is made in your application, the AuthInterceptor will intercept the request, add the authorization header, and pass it on to the next interceptor or the actual HTTP handler. This way, you can centralize common HTTP request-related tasks and keep your code clean and maintainable.
 * 
 * 
 */