import { HttpErrorResponse } from '@angular/common/http';
import { contactService } from './../services/contact.service';
import { Component } from '@angular/core';
@Component({
    selector:"contact",
    templateUrl:"./contact.component.html"
})

export class contactComponent{
    public result:any;
    constructor(public service:contactService){}
    ngOnInit(){
        this.service.getData().subscribe((posRes)=>{
            this.result=posRes;
            console.log(this.result)
        },(errRes: HttpErrorResponse)=>{
            console.log(errRes)
        })
    };
};