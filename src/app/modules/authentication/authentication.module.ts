import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './_components/login/login.component';
import { SignupComponent } from './_components/signup/signup.component';
import { ResetPassComponent } from './_components/reset-pass/reset-pass.component';
import { InitComponent } from './_pages/init/init.component';



@NgModule({
  declarations: [LoginComponent, SignupComponent, ResetPassComponent, InitComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
