import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-dashboard-admin-layout',
  templateUrl: './dashboard-admin-layout.component.html',
  styleUrls: ['./dashboard-admin-layout.component.scss']
})
export class DashboardAdminLayoutComponent implements OnInit {

  isLessThenLargeDevice;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router,public adminservice:AdminService) {}

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 1199px)']).subscribe(({ matches }) => {
      this.isLessThenLargeDevice = matches;

      this.adminservice.getAdminProfile(1);
    });


    //this.adminservice.getAdminProfile(this.id);

  }
  onLogout(): void {
    localStorage.clear();
    this.router.navigate(['auth/login']);
  }


  getImagePath(value:string ){

    let basePath="C:/Users/DELL/Desktop/YourCv/Tahaluf.YourCV.API/Properties/assets/images/customers/";
    return basePath+value;
    
    }


}
