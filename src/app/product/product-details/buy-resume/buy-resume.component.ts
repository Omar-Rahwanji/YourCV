import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-buy-resume',
  templateUrl: './buy-resume.component.html',
  styleUrls: ['./buy-resume.component.scss']
})
export class BuyResumeComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  paymentForm: FormGroup = new FormGroup({
    creditCardNumber: new FormControl('', [Validators.required]),
    expiryDate: new FormControl('', [Validators.required]),
    ccvNumber: new FormControl('', [Validators.required]),
  });

  pay(){
    this.productService.payed=true;
  }

}
