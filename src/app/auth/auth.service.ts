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
    const body = {username: user.email, password: user.password};
    return this.http.post(`${this.baseUrl}/login/`, body);
  }
  setup(form) {
    const token = localStorage['currentUser'];
    console.log(token);
    const body = {
      "business_name": "Alade and Sons",
      "sector": "manufacturing",
      "country": "nigeria",
      "currency": "naira",
      "business_type": "corporation"
    };
    console.log(arguments);
    return this.http.post(`${this.baseUrl}/business/`, body, {
      headers: {
        'Authorization': token
      }});
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
