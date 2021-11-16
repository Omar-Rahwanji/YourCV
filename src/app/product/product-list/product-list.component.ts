import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { productsDB } from '../../shared/data/products';

@Component({
  selector: 'll-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts();
    this.isLoaded = true;
  }
}
