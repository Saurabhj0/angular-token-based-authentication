import {  Router } from '@angular/router';
import { LogoutService } from './../services/logout.service';
import { Component } from "@angular/core";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector:"dashboard",
    templateUrl:"./dashboard.component.html"
})
export class dashboardComponent{
    constructor(public serivce:LogoutService,
                public Router: Router){}

    public logout():any{
        this.serivce.signout().subscribe((posRes)=>{
            if (posRes.logout == "success")
            {
                window.localStorage.removeItem("login_details");
                this.Router.navigate(["/"])
            }
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes)
        })
    }
}