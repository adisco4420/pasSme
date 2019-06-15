import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  private authUrl = `${environment.baseUrl}/users`;

  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post(`${this.authUrl}/register/`, user);
  }


}
