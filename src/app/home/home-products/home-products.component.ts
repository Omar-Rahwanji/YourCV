import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { productsDB } from '../../shared/data/products'; 
@Component({
  selector: 'll-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit {
  products = [];
  constructor(public productService:ProductService) { 
  }

  ngOnInit(): void { 
    this.productService.getProducts();
  }

}
