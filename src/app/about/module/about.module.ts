import { TokenModule } from './../../token/token.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './../components/about.component';
import { NgModule } from "@angular/core";
import { AboutService } from "../services/about.service";

@NgModule({
    declarations:[AboutComponent],
    providers:[AboutService],
    imports:[CommonModule,HttpClientModule,RouterModule.forChild([{path:'',component:AboutComponent}]),TokenModule],
    exports:[AboutComponent]
})
export class AboutModule{};