import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class DashboardService {
  token;
  baseUrl = environment.baseUrl;
  constructor(private http:  HttpClient) {
    this.token = localStorage['currentUser'];
  }
  createInvoice(form) {
    const body = {
      customer: {},
      items: [],
      title: '',
      summary: '',
      invoice_number: 0,
      po_so_number: 0,
      total: 0,
      notes: '',
      invoice_date: new Date(),
      payment_due_date: new Date(),
      status: '',
      currency: '',
      column_config: {}
    }
    return this.http.post(`${this.baseUrl}/${this.token}/invoices`, body);
  }

}
