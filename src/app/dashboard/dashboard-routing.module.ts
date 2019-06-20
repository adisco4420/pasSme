import { CreateInvoiceComponent } from './components/invoice/create-invoice/create-invoice.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SidebarComponent } from './components/core/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: SidebarComponent,
    children: [
      { path: '', component: LandingComponent},
      { path: 'create-invoice', component: CreateInvoiceComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
