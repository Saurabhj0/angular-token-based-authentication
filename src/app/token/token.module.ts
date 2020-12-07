import { tokenInterceptor } from './token.interceptor';
import { TokenService } from './token.service';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
    imports:[CommonModule,HttpClientModule],
    declarations:[],
    providers:[TokenService,{
        provide:HTTP_INTERCEPTORS,
        useClass:tokenInterceptor,
        multi:true
    }],
})

export class TokenModule{}