import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoleserviceService } from 'src/app/Service/roleservice.service';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit {
  formGroup =new FormGroup({
    id:new FormControl(''),
    Name:new FormControl('',Validators.required)
    
  })
  constructor(public roleservice:RoleserviceService,private route: ActivatedRoute) { }
id:any;
  ngOnInit(): void {
    this.id =parseInt( this.route.snapshot.params['id']);
    this.roleservice.getRoleById(this.id);
  }

  roleId:any
  roleName:any;
  

  UpdateRole(){
    debugger
    this.roleId=this.formGroup.value.id;
    this.roleName=this.formGroup.value.Name;//c#
    const data2={
      id:parseInt(this.roleId),
      Name:this.roleName.toString()
    }
    this.roleservice.UpdateRole(data2);

  }
}
