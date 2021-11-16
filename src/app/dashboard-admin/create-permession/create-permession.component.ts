import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PermissionServiceService } from 'src/app/Service/permission-service.service';

@Component({
  selector: 'app-create-permession',
  templateUrl: './create-permession.component.html',
  styleUrls: ['./create-permession.component.scss']
})
export class CreatePermessionComponent implements OnInit {
  formGroup =new FormGroup({
    
    Name:new FormControl('',Validators.required)
    
  })

  constructor(public permissionservice:PermissionServiceService) { }

  ngOnInit(): void {
  }
  permissionName:any;
  saveItem(){
    debugger
    this.permissionName=this.formGroup.value.Name;//c#
    const data2={
      Name:this.permissionName.toString()
    }
    this.permissionservice.create(data2);
    window.location.reload();

  }
}
