import { DashboardService } from './dashboard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { SidebarComponent } from './components/core/sidebar/sidebar.component';
import { CreateInvoiceComponent } from './components/invoice/create-invoice/create-invoice.component';
import { SummaryComponent } from './components/accounting/summary/summary.component';
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
