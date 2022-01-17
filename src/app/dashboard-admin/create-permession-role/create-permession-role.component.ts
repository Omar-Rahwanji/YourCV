import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PermissionServiceService } from 'src/app/Service/permission-service.service';
import { RoleserviceService } from 'src/app/Service/roleservice.service';

@Component({
  selector: 'app-create-permession-role',
  templateUrl: './create-permession-role.component.html',
  styleUrls: ['./create-permession-role.component.scss']
})
export class CreatePermessionRoleComponent implements OnInit {

  formGroup =new FormGroup({ 
    RoleId:new FormControl('',Validators.required),
    RoleName:new FormControl('',Validators.required),
    permissionId:new FormControl('',Validators.required),
    permissionName:new FormControl('',Validators.required)
  })
  
  constructor(public permissionservice:PermissionServiceService,public roleservice:RoleserviceService,public tostr:ToastrService,private spiner:NgxSpinnerService,private router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.GetAllPermission();
    this.GetAllRole();
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

  GetAllRole(){
    debugger
    this.spiner.show();
    debugger
    this.roleservice.getAll().subscribe((res:any)=>{
      this.roleservice.data=res;
      this.spiner.hide();
      //this.tostr.success('Data Retrived !!!')
    },err=>{
      this.spiner.hide();
      //this.tostr.error('something want worring!!')
    })
  }

  roleId:any;
  permissionId:any
  list:any
  saveItem(){
    debugger
    console.log(this.formGroup.value)
    this.list=this.formGroup.value;
    this.roleId=(this.formGroup.controls.RoleId.value);
    this.permissionId=(this.formGroup.controls.permissionId.value);
    
    const data2={
      RoleId:parseInt(this.roleId),
      permissionId:parseInt(this.permissionId)
    }
    this.permissionservice.createPermissionRole(data2);
    window.location.reload();

  }



}


