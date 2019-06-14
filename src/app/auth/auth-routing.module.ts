import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'onboarding', component: OnboardingComponent},
  { path: 'confirm', component: ConfirmationComponent}
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class AuthRoutingModule { }
