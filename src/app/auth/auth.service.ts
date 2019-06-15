import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  private baseUrl = `${environment.baseUrl}/users`;

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user) {
    return this.http.post(`${this.baseUrl}/register/`, user,
    {headers: {'Content-Type': 'application/json'}});
  }
  loginUser(user) {
    return this.http.post(`${this.baseUrl}/login/`, user);
  }
  setup(form) {
    const body = {
      currency: form.businessCurrency,
      business_name: form.businessName,
      country: form.businessCountry,
      sector: form.businessSector,
      business_type: form.businessType
    };
    console.log(arguments);
    return this.http.post(`${this.baseUrl}/business/`, body);
  }
  storeToken(token: string) {
    return localStorage.setItem('currentUser', token);
  }
  isLogin() {
    return localStorage.getItem('currentUser');
  }
  logout() {
    localStorage.removeItem('currentUser');
    return this.router.navigate(['/auth/login']);
  }

}
