import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { SidebarComponent } from './components/core/sidebar/sidebar.component';
import { DashHeaderComponent } from './components/core/dash-header/dash-header.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [LandingComponent, SidebarComponent, DashHeaderComponent]
})
export class DashboardModule { }
