import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PermissionServiceService } from 'src/app/Service/permission-service.service';
import { CreatePermessionRoleComponent } from '../create-permession-role/create-permession-role.component';
import { CreatePermessionComponent } from '../create-permession/create-permession.component';

@Component({
  selector: 'app-permession',
  templateUrl: './permession.component.html',
  styleUrls: ['./permession.component.scss']
})
export class PermessionComponent implements OnInit {
  view = 'list';
 
  constructor(private permissionservice:PermissionServiceService,public tostr:ToastrService,private spiner:NgxSpinnerService,private router:Router,private dialog:MatDialog) {}

  ngOnInit(): void {
    debugger
    this.GetAllPermissionRole();
    this.GetAllPermission();
  }

  GetAllPermissionRole(){
    debugger
    this.spiner.show();
    debugger
    this.permissionservice.getAllPermissionRole().subscribe((res:any)=>{
      this.permissionservice.data=res;
      this.spiner.hide();
      //this.tostr.success('Data Retrived !!!')
    },err=>{
      this.spiner.hide();
      //this.tostr.error('something want worring!!')
    })
  }

  GetAllPermission(){
    debugger
    this.spiner.show();
    this.permissionservice.getAllPermission().subscribe((res:any)=>{
      this.permissionservice.permission=res;
      this.spiner.hide();
    },err=>{
      this.spiner.hide();
    })
  }

 

  EditPermissionRole(){

  }
  DeletePermissionRole(id:number){
    debugger
    this.permissionservice.DeletePermissionRole(id);
    this.tostr.success('Deleted Item');
   window.location.reload();
  }

  DeletePermission(id:number){
    debugger
    this.permissionservice.DeletebyID(id);
    this.tostr.success('Deleted Item');
   window.location.reload();
  }
  createPermission(){
      this.dialog.open(CreatePermessionComponent)
    
  }

  createPermissionRole(){
    this.dialog.open(CreatePermessionRoleComponent)
  }

}
