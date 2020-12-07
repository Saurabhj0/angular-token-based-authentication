import { TokenModule } from './../../token/token.module';
import { PortfolioService } from './../services/portfolio.service';
import { CommonModule } from '@angular/common';
import { portfolioComponent } from './../components/portfolio.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
@NgModule({
    declarations:[portfolioComponent],
    imports:[CommonModule,
             HttpClientModule,
             TokenModule,
            RouterModule.forChild([{path:"",component:portfolioComponent}])],
    providers:[PortfolioService],
    exports:[portfolioComponent]
})
export class PortfolioModule{}