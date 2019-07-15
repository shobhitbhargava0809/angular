import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { JoinComponent } from './join/join.component';



const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'order' , component:OrderComponent},
  {path:'login', component:LoginComponent},
  {path:'login/forgot password', component:ForgotpwComponent },
  {path:'login/sign up', component:SignupComponent},
  {path:'login/forgot password/resetpw', component:ResetpwComponent},
  {path:'login/admindashboard', component:AdmindashboardComponent},
  {path:'binding',component:BindingComponent},
  {path:'join',component:JoinComponent},
 
 
  {path:'**',component:PagenotfoundComponent},



  {path:'', redirectTo:'home',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
 
