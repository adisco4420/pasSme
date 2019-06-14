import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  submitted = false;
  forgetPasswordForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email])
  });
  get email() {return this.forgetPasswordForm.get('email'); }

  constructor() { }

  ngOnInit() {
  }

  forgetPassword() {
    this.submitted = true;
    console.log(this.forgetPasswordForm.value);
  }

}
