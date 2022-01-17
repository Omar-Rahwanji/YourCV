import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { DashboardCustomerService } from 'src/app/Service/dashboard-customer.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-dashboard-order',
  templateUrl: './dashboard-order.component.html',
  styleUrls: ['./dashboard-order.component.scss']
})
export class DashboardOrderComponent implements OnInit {
  orders = [];

  constructor(private router: Router, public orderservice: DashboardCustomerService) { }

  ngOnInit(): void {
    let StringToken = localStorage.getItem('token');
    let Token: any = jwtDecode(StringToken);
    this.orderservice.GetAllResumeById(Number(Token.nameid));
  }

  Delete(resumeId: number) {
    this.orderservice.DeleteResumebyID(resumeId);
    //this.toastr.success('Deleted Item');
    // this.toastr.warning('This item cannot be deleted')
  }

}

