import { DashboardService } from './../../../dashboard.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss']
})
export class CreateInvoiceComponent implements OnInit {
  imageText = `Maximum 5MB in size.
  JPG, PNG, or GIF formats.
  Recommended size: 300 x 200 pixels`;
  createInvoiceForm: FormGroup;
  items: FormArray;

  invoiceHeaderForm = new FormGroup({
    title: new FormControl(''),
    summary: new FormControl('')
  })
  invoiceFooterForm = new FormGroup({
    note: new FormControl('')
  })
  addCustomerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phoneNo: new FormControl(''),
    address: new FormControl('')
  })

  constructor(private formBuilder: FormBuilder, private dashSrv: DashboardService) { 
    this.createInvoiceForm = this.formBuilder.group({
      invoiceNo: new FormControl(''),
      posNo: '',
      invoiceDate: '',
      paymentDue: '',
      items: this.formBuilder.array([ this.createItem() ])
    });
  }
  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: 0,
      quantity: 1
    });
  }
  get itemsControl() {
    return this.createInvoiceForm.get('items');
  }
  addItem(): void {
    this.items = this.createInvoiceForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  removeItem(index) {
    console.log(index);
    this.items = this.createInvoiceForm.get('items') as FormArray;
    this.items.removeAt(index)
  }
  ngOnInit() {
  }

  selectImage(event) {
    const fileName = event.target.files[0].name;
    this.imageText = fileName;
  }
  triggerImg() {
    document.getElementById('uploadFile').click();
  }
  create() {
    console.log(this.createInvoiceForm.value, this.invoiceFooterForm.value, this.invoiceHeaderForm.value);
    const body = {...this.createInvoiceForm.value, ...this.invoiceFooterForm.value, ...this.invoiceHeaderForm.value  }
    this.dashSrv.createInvoice(body).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })

  }
  addCustomer() {
    console.log(this.addCustomerForm.value);
    
  }


}
