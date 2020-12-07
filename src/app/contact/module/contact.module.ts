import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TokenModule } from './../../token/token.module';
import { contactComponent } from './../components/contact.component';
import { contactService } from './../services/contact.service';
import { NgModule } from '@angular/core';
@NgModule({ 
    providers:[contactService], 
    declarations:[contactComponent],
    imports:[TokenModule,
             HttpClientModule,
             CommonModule,
            RouterModule.forChild([{path:"",component:contactComponent}])] ,        
    exports:[contactComponent]
})
export class ContactModule{}