import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  declarations: [LoginComponent, RegisterComponent, OnboardingComponent, ConfirmationComponent, ForgetPasswordComponent],
  providers: [AuthService]
})
export class AuthModule { }
