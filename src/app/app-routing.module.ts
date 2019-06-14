import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: '', redirectTo: '/auth/register', pathMatch: 'full' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'}
    { path: '**', redirectTo: '/' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
