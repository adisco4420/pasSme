import { SummaryComponent } from './components/accounting/summary/summary.component';
import { CreateInvoiceComponent } from './components/invoice/create-invoice/create-invoice.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SidebarComponent } from './components/core/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: SidebarComponent,
    children: [
      { path: '', component: LandingComponent},
      { path: 'create-invoice', component: CreateInvoiceComponent},
      { path: 'act-summary', component: SummaryComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
