import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
  submitted = false;
  onboardingForm = new FormGroup({
    businessName: new FormControl('', Validators.required),
    businessType: new FormControl('', Validators.required),
    businessCountry: new FormControl('', Validators.required),
    businessCurrency: new FormControl('', Validators.required),
  });
  get onboardControl() {
    return this.onboardingForm.controls;
  }

  constructor() { }

  ngOnInit() {
  }
  setup() {
    this.submitted = true;
    console.log(this.onboardingForm.value);
  }

}
