import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { loginService } from './../services/login.service';
import { Component } from "@angular/core";

@Component({
    selector:"login",
    templateUrl:"./login.component.html"
})

export class loginComponent{
    constructor(public service:loginService,public Router:Router){}
    public uname:any;
    public upwd:any;
    public login(login_details):any{
        this.service.signin(login_details).subscribe((posRes)=>{
            if(posRes.login === "success"){
                window.localStorage.setItem("login_details",JSON.stringify(posRes));
                this.Router.navigate(["/dashboard"]);
            }else{
                alert("login failed")
            }
        },(errRes: HttpErrorResponse)=>{
            console.log(errRes)
        })
    }

}