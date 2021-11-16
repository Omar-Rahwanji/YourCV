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

  searchResume(resumeName: any) {
    resumeName=resumeName.toLowerCase();
    this.productService.templateDocuments = this.productService.templateDocuments.filter((x) => x.name.toLowerCase().includes(resumeName));
    console.log('searched');
  }

  reloadPage(){
    window.location.reload();
  }
}
