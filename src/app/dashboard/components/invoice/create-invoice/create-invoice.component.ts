import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss']
})
export class CreateInvoiceComponent implements OnInit {
  imageText = `Maximum 5MB in size.
  JPG, PNG, or GIF formats.
  Recommended size: 300 x 200 pixels`;

  constructor() { }

  ngOnInit() {
  }

  selectImage(event) {
    const fileName = event.target.files[0].name;
    this.imageText = fileName;
  }
  triggerImg() {
    document.getElementById('uploadFile').click();
  }

}
