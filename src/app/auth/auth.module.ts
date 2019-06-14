import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent, OnboardingComponent, ConfirmationComponent, ForgetPasswordComponent]
})
export class AuthModule { }
