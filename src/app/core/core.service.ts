import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class CoreService {
  private baseUrl = `${environment.baseUrl}/users`;

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get(`${this.baseUrl}/countries/`);
  }
  getSectors() {
    return this.http.get(`${this.baseUrl}/sectors/`);
  }
  getCurrencies() {
    return this.http.get(`${this.baseUrl}/currencys/`);
  }
  getBusinessTypes() {
    return this.http.get(`${this.baseUrl}/business_types/`);
  }

}
