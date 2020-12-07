import { Observable } from 'rxjs';
import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn:"root"
})
export class LogoutService{
    constructor(public http: HttpClient){};
    public signout():Observable<any>{
        return this.http.get("http://localhost:8080/logout");
    };
};