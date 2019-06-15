import { CoreService } from './../../../core/core.service';
import { AuthService } from './../../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
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
    businnessSector: new FormControl('', Validators.required),
    businessCountry: new FormControl('', Validators.required),
    businessCurrency: new FormControl('', Validators.required),
  });
  get onboardControl() {
    return this.onboardingForm.controls;
  }

  constructor(private router: Router, private coreSrv: CoreService) { }
  countries = []; sectors = [];
  currencies = [
    {name: 'Dollar', slug: 'dollar'},
    {name: 'Naira', slug: 'naira'},
    {name: 'Euro', slug: 'euro'},
    {name: 'Pounds', slug: 'pounds'}
  ];
  businessTypes = [
    {name: 'Sole Proprietorship', slug: 'sole_proprietorship'},
    {name: 'Partnership', slug: 'partnership'},
    {name: 'Limited Liability', slug: 'limited_liability'},
    {name: 'Coperative', slug: 'coperative'},
    {name: 'Corporation', slug: 'corporation'}
  ];
  ngOnInit() {
    this.fetchData();
  }
  setup() {
    this.submitted = true;
    console.log(this.onboardingForm.value);
  }
  fetchData() {
    this.coreSrv.getCountries().take(1).subscribe((data: any) => this.countries = data);
    this.coreSrv.getSector().take(1).subscribe((data: any)  => this.sectors = data);
  }

}
