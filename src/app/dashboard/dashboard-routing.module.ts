import { ChartOfAccountsComponent } from './accounting/chart-of-accounts/chart-of-accounts.component';
import { SummaryComponent } from './accounting/summary/summary.component';
import { CreateInvoiceComponent } from './invoice/create-invoice/create-invoice.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: SidebarComponent,
    children: [
      { path: '', component: LandingComponent},
      { path: 'create-invoice', component: CreateInvoiceComponent},
      { path: 'act-summary', component: SummaryComponent},
      { path: 'chart-of-accounts', component: ChartOfAccountsComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
