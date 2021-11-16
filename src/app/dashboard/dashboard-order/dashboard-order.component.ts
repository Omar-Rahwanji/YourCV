import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardCustomerService } from 'src/app/Service/dashboard-customer.service';

@Component({
  selector: 'app-dashboard-order',
  templateUrl: './dashboard-order.component.html',
  styleUrls: ['./dashboard-order.component.scss']
})
export class DashboardOrderComponent implements OnInit {
  orders = [];

  constructor(private router:Router, public orderservice:DashboardCustomerService) {}

  ngOnInit(): void {
    
    
    debugger
    this.orderservice.GetAllResumeById(1);
  }

  

Delete(id:number){
  debugger

  debugger
    this.orderservice.DeleteResumebyID(id);
    //this.toastr.success('Deleted Item');
  
    window.location.reload();


 
   // this.toastr.warning('This item cannot be deleted')
  }

}

