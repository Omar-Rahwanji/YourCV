import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PermissionServiceService } from 'src/app/Service/permission-service.service';
import { RoleserviceService } from 'src/app/Service/roleservice.service';

@Component({
  selector: 'app-edit-permission-role',
  templateUrl: './edit-permission-role.component.html',
  styleUrls: ['./edit-permission-role.component.scss']
})
export class EditPermissionRoleComponent implements OnInit {

  formGroup =new FormGroup({
    RoleId:new FormControl('',Validators.required),
    RoleName:new FormControl('',Validators.required),
    permissionId:new FormControl('',Validators.required),
    permissionName:new FormControl('',Validators.required)
    
  })
  constructor(public permissionroleservice:PermissionServiceService,private route: ActivatedRoute,public roleservice:RoleserviceService,public tostr:ToastrService,private spiner:NgxSpinnerService,private router:Router) { }
id:any;
  ngOnInit(): void {
    this.id =parseInt( this.route.snapshot.params['id']);
    this.permissionroleservice.getPermissionRoleById(this.id);

    this.GetAllPermission();
    this.GetAllRole();
  }


  GetAllPermission(){
    debugger
    this.spiner.show();
    this.permissionroleservice.getAllPermission().subscribe((res:any)=>{
      this.permissionroleservice.permission=res;
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

  Id:any
  roleId:any;
  permissionId:any
  list:any
  UpdateItem(){
    debugger
    console.log(this.formGroup.value)
    this.list=this.formGroup.value;
    this.id=this.formGroup.controls.id.value;
    this.roleId=(this.formGroup.controls.RoleId.value);
    this.permissionId=(this.formGroup.controls.permissionId.value);
    
    const data2={
      id:parseInt(this.id),
      RoleId:parseInt(this.roleId),
      permissionId:parseInt(this.permissionId)
    }
    this.permissionroleservice.createPermissionRole(data2);
    window.location.reload();

  }
}

