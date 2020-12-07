import { TokenModule } from './../../token/token.module';
import { LogoutService } from './../services/logout.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { dashboardComponent } from './../components/dashboard.component';
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations:[dashboardComponent],
    imports:[TokenModule, CommonModule,HttpClientModule,RouterModule.forChild([{path:"", component: dashboardComponent,children:[
        {path:"about",loadChildren:()=> import("../../about/module/about.module").then(obj=>obj.AboutModule)},
        {path:"contact",loadChildren:()=>import("../../contact/module/contact.module").then(obj=>obj.ContactModule)},
        {path:"portfolio",loadChildren:()=>import("../../portfolio/module/portfolio.module").then(obj=>obj.PortfolioModule)}
    ]}])],
    providers:[LogoutService],
    exports:[dashboardComponent]
})
export class dashboardModules{}