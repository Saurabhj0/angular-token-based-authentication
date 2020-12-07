
//import HttpRequest
//HttpRequest is used to receive the requests

//import HttpHandler
//it is used to send the request to the server

//import HttpEvent
//HttpEvent is used to handle the exceptions

//import Observable
//Observable used to handle the exceptions without crashing the applications

//import HttpInterceptor
//HttpInterceptor basically, customize the HttpRequests

import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn:"root"
})

export class tokenInterceptor implements HttpInterceptor{
    
    constructor(public service:TokenService){}
    intercept(req:HttpRequest<any>,handler:HttpHandler):Observable<HttpEvent<any>>{
        if(req.url == "http://localhost:8080/login")
        {
            return handler.handle(req);

        }
        else{
            const req1=req.clone({
                setHeaders:{
                    "token":this.service.getToken()
                }
            });
            return handler.handle(req1)
        }

        
    }
};