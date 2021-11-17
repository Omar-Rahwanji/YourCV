import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Service/admin.service';
import { UsersServiceService } from 'src/app/Service/users-service.service';

@Component({
  selector: 'app-dashboard-admin-profile',
  templateUrl: './dashboard-admin-profile.component.html',
  styleUrls: ['./dashboard-admin-profile.component.scss']
})
export class DashboardAdminProfileComponent implements OnInit {

  constructor(public adminservice:AdminService) { }

  ngOnInit(): void {
    debugger
    
    this.adminservice.getAdminProfile(1);

  }

  getImagePath(value:string ){

    let basePath="C:/Users/DELL/Desktop/YourCv/Tahaluf.YourCV.API/Properties/assets/images/customers/";
    return basePath+value;
    
    }

}
