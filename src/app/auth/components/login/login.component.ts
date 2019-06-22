import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submmitted = false; loading = false;
  errMsg = {status: false, code: 0 }; sucMsg;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email ]),
    password: new FormControl('', [Validators.required]),
  });
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.submmitted = true;
    this.errMsg = {status: false, code: 0 };; this.sucMsg = null;
    if (this.loginForm.valid) {
      this.loading = true;
      this.authSrv.loginUser(this.loginForm.value).subscribe(data => {
        this.loading = false; this.sucMsg = true;
        localStorage.setItem('currentUser', data['token']);
        this.router.navigate(['/dashboard']);
      }, err => {
        this.errMsg = {status: true, code: err.status};
        this.loading = false;
        console.log(err);
      });
    }
  }

}
