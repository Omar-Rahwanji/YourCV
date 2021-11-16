import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { RoleserviceService } from 'src/app/Service/roleservice.service';
import { CreateRoleComponent } from '../create-role/create-role.component';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  view = 'list';
  constructor(private roleservice:RoleserviceService,public tostr:ToastrService,private spiner:NgxSpinnerService,private router:Router,private dialog:MatDialog) {}

  ngOnInit(): void {
    this.GetAllRole();
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

  createRole(){
    this.dialog.open(CreateRoleComponent)
  }

  DeleteRole(id:number){
    debugger
      this.roleservice.DeletebyID(id);
      this.tostr.success('Deleted Item');
     window.location.reload();

  }

}
