import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoleserviceService } from 'src/app/Service/roleservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit {
  
  formGroup =new FormGroup({ 
    Name:new FormControl('',Validators.required)
  })
  constructor(private roleservice:RoleserviceService) { }

  ngOnInit(): void {
  }

  Rolename:any;

  saveItem(){
    debugger
    this.Rolename=this.formGroup.value.Name;//c#
    const data2={
      Name:this.Rolename.toString()
    }
    this.roleservice.create(data2);
    window.location.reload();

  }

  

}
