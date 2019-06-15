import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SidebarComponent } from './components/core/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: SidebarComponent,
    children: [
      { path: '', component: LandingComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
