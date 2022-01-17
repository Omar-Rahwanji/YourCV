import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PermissionServiceService } from 'src/app/Service/permission-service.service';

@Component({
  selector: 'app-edit-permission',
  templateUrl: './edit-permission.component.html',
  styleUrls: ['./edit-permission.component.scss']
})
export class EditPermissionComponent implements OnInit {

  formGroup =new FormGroup({
    id:new FormControl(''),
    Name:new FormControl('',Validators.required)
    
  })
  constructor(public permissionservices:PermissionServiceService,private route: ActivatedRoute) { }
id:any;
  ngOnInit(): void {
    this.id =parseInt( this.route.snapshot.params['id']);
    this.permissionservices.getPermissionById(this.id);
  }

  permissionId:any
  permissionName:any;
  

  UpdatePermission(){
    debugger
    this.permissionId=this.formGroup.value.id;
    this.permissionName=this.formGroup.value.Name;//c#
    const data2={
      id:parseInt(this.permissionId),
      Name:this.permissionName.toString()
    }
    this.permissionservices.UpdatePermission(data2);

  }
}