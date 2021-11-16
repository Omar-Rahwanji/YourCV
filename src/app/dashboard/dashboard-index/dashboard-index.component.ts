import { Component, Input, OnInit } from '@angular/core';
import { productsDB } from 'src/app/shared/data/products';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { DomSanitizer } from '@angular/platform-browser';
import { DashboardCustomerService } from 'src/app/Service/dashboard-customer.service';

@Component({
  selector: 'll-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.scss']
})
export class DashboardIndexComponent implements OnInit  {
  @Input () templateId:number|undefined;
   templates:any=[{}];
  view = 'list';

  products;
  constructor(private sanitizer: DomSanitizer,private indexervice:DashboardCustomerService,public tostr:ToastrService,private spiner:NgxSpinnerService,private router:Router,private dialog:MatDialog) {}

  ngOnInit(): void {
    this.getAllTemplate();
    
  }

  getAllTemplate(){
    debugger
    this.spiner.show();
    debugger
    this.indexervice.getAll().subscribe((res:any)=>{
      this.indexervice.data=res;
      this.spiner.hide();
      //this.tostr.success('Data Retrived !!!')
    },err=>{
      this.spiner.hide();
      //this.tostr.error('something want worring!!')
    })

}



getImagePath(value:string ){

  let basePath=this.sanitizer.bypassSecurityTrustUrl ('C:/Users/lenovo/Desktop/YourCv/Tahaluf.YourCV.API/Properties/assets/images/templates/');
  return basePath+value;
  
  
  }
}