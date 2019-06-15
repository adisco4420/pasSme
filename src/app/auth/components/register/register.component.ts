import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  loading = false;
  errMsg = {status: false, code: 0 };
  sucMsg = false;
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email ]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  constructor(private authSrv: AuthService, private router: Router) { }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }

  ngOnInit() {
  }
  register() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.loading = true;
      this.errMsg = {status: false, code: 0};
      this.authSrv.registerUser(this.registerForm.value).subscribe(data => {
        this.loading = false; this.sucMsg = true;
        this.goToSetup();
      }, err => {
        this.errMsg = {status: true, code: err.status};
        this.loading = false;
      });
    } else {
      console.log('invalid');
    }

  }
  goToSetup() {
    setTimeout(() => {
      this.router.navigate(['/auth/onboarding']);
    }, 2000);
  }

}
