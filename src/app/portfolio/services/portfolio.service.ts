import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn:"root"
})
export class PortfolioService{
    constructor(public http: HttpClient){}

    public getdata():Observable<any>{
        return this.http.get("http://localhost:8080/portfolio");
    };
};