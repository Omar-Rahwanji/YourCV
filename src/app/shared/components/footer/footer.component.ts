import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'll-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router, public homeService:HomeService) { }

  ngOnInit(): void {
  }

  goToProductsPage(){
    this.router.navigate(['products']);
  }

  goToAboutUsPage(){
    this.router.navigate(['about']);
  }

  goToContactUsPage(){
    this.router.navigate(['contact']);
  }

}
