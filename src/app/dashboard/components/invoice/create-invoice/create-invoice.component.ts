import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


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

  constructor(private formBuilder: FormBuilder) { 
    this.createInvoiceForm = this.formBuilder.group({
      customerName: '',
      email: '',
      items: this.formBuilder.array([ this.createItem() ])
    });
  }
 get header(): FormGroup {
    return this.formBuilder.group({
      title: '',
      summary: '',
      price: '',
      quantity: ''
    });
  }
  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: '',
      quantity: ''
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
    console.log(this.createInvoiceForm.value);
  }


}
