import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home-testimonials',
  templateUrl: './home-testimonials.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css', './home-testimonials.component.scss']
})
export class HomeTestimonialsComponent implements OnInit {

  constructor(public homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.getTestimonialData();
  }

}
