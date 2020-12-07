import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([
      {path:"",loadChildren:()=> import("./login/module/login.module").then(obj=>obj.loginModule)},
      {path:"dashboard",loadChildren:()=> import("./dashboard/modules/dashboard.module").then(obj=>obj.dashboardModules)}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
