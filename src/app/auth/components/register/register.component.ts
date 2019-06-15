import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted = false
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email ]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  constructor(private authSrv: AuthService) { }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }

  ngOnInit() {
  }
  register() {
    this.submitted = true;
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      this.authSrv.registerUser(this.registerForm.value).subscribe(data => {
        console.log(data);
      }, err => console.log(err));
    } else {
      console.log('invalid');
    }

  }

}
