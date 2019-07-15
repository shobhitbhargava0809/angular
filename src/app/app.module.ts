import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { ForgotpwComponent } from './forgotpw/forgotpw.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpwComponent } from './resetpw/resetpw.component';

import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BindingComponent } from './binding/binding.component';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { JoinComponent } from './join/join.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    OrderComponent,
    LoginComponent,
    ForgotpwComponent,
    SignupComponent,
    ResetpwComponent,
    AdmindashboardComponent,
    PagenotfoundComponent,
    BindingComponent,
    JoinComponent,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
