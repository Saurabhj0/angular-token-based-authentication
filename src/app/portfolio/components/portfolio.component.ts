import { Component, NgModule } from '@angular/core';
import { PortfolioService } from "../services/portfolio.service";
import { HttpErrorResponse } from '@angular/common/http';
@Component({
    selector:"portfolio",
    templateUrl:"./portfolio.component.html"
})

export class portfolioComponent{
    public result:any;

    constructor(public service:PortfolioService){}

    ngOnInit(){
        this.service.getdata().subscribe((posRes)=>{
            this.result=posRes;
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
        });
    };
};
