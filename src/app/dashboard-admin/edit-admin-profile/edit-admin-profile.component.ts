import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-edit-admin-profile',
  templateUrl: './edit-admin-profile.component.html',
  styleUrls: ['./edit-admin-profile.component.scss']
})
export class EditAdminProfileComponent implements OnInit {
  form: FormGroup;
    id: number;
    isAddMode: boolean;
    loading = false;
    submitted = false;
    roleId: any;

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router,public adminService: AdminService, ) { }

  ngOnInit(): void {
    debugger
    this.id =parseInt( this.route.snapshot.params['id']);
    //this.roleId=parseInt(this.form.value.roleId)
    
    this.isAddMode =!this.id;
    
    // password not required in edit mode
    const passwordValidators = [Validators.minLength(6)];
    if (this.isAddMode) {
        passwordValidators.push(Validators.required);
  }

 

  this.form = this.formBuilder.group({
    id:this.id,
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    userName: ['', Validators.required],
    password: ['', [Validators.minLength(6)]],
    phoneNumber:['', Validators.required],
    city:['', Validators.required],
    country:['', Validators.required],
    personalPhoto:[''],
   
});


debugger
if (!this.isAddMode) {
  this.adminService.getAdminProfile(this.id);
}

}



get f() { return this.form.controls; }

 updateUser() {
   debugger
  this.adminService.UpdateProfile( this.form.value);
    
      }


      uploadFile(files:any) {
        debugger
        if (files.length === 0) {
        return;
        }
        let fileToUpload = <File>files[0];
        const formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        this.adminService.uploadAttachment(formData);
        }


        getImagePath(value:string ){

          let basePath="C:/Users/DELL/Desktop/YourCv/Tahaluf.YourCV.API/Properties/assets/images/customers/";
          return basePath+value;
          
          }
}


