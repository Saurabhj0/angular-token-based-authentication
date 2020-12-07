import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn:"root"
})
export class AboutService{
    constructor(public http: HttpClient){}

    public getData():Observable<any>{
        return this.http.get("http://localhost:8080/about");
    }
}