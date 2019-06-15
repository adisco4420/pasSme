import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  private authUrl = `${environment.baseUrl}/users`;

  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post(`${this.authUrl}/register/`, user,
    {headers: {'Content-Type': 'application/json'}});
  }
  loginUser(user) {
    return this.http.post(`${this.authUrl}/login/`, user);
  }
  storeToken(token: string) {
    return localStorage.setItem('currentUser', token);
  }
  isLogin() {
    return localStorage.getItem('currentUser');
  }

}
