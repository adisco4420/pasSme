import { DashboardService } from './dashboard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LandingComponent } from './landing/landing.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { CreateInvoiceComponent } from './invoice/create-invoice/create-invoice.component';
import { SummaryComponent } from './accounting/summary/summary.component';
import { SharedModule } from '../shared/shared.module';
import { ChartOfAccountsComponent } from './accounting/chart-of-accounts/chart-of-accounts.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [LandingComponent, SidebarComponent, CreateInvoiceComponent, SummaryComponent, ChartOfAccountsComponent],
  providers: [DashboardService]
})
export class DashboardModule { }
