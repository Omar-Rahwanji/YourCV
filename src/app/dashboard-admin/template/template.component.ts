import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { productsDB } from 'src/app/shared/data/products';
import { Router } from '@angular/router';
import { TemplateService } from 'src/app/Service/template.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateTemplateComponent } from '../create-template/create-template.component';
import { EditTemplateComponent } from '../edit-template/edit-template.component';
import { ToastrService } from 'ngx-toastr';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'll-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  @Input () templateId:number|undefined;
   templates:any=[{}];
  view = 'list';

  products;
  constructor(public sanitizer: DomSanitizer,private templateservice:TemplateService,public tostr:ToastrService,private spiner:NgxSpinnerService,private router:Router,private dialog:MatDialog) {}

  ngOnInit(): void {
    this.getAllTemplate();
    
  }

  getAllTemplate(){
    debugger
    this.spiner.show();
    debugger
    this.templateservice.getAll().subscribe((res:any)=>{
      this.templateservice.data=res;
      this.spiner.hide();
      //this.tostr.success('Data Retrived !!!')
    },err=>{
      this.spiner.hide();
      //this.tostr.error('something want worring!!')
    })

}

createTemplate(){
  this.dialog.open(CreateTemplateComponent)
  }

  DeleteTemplate(id:number){
    debugger
      this.templateservice.DeletebyID(id);
      this.tostr.success('Deleted Item');
     window.location.reload();

  }

  EditTemplate(id:number){
    debugger
   this.dialog.open(EditTemplateComponent,{
     data:{
       id:id
     }
   })
}

//user_photo: SafeResourceUrl;
url:string;
getImagePath(value:string ){

  this.url ="C:/Users/DELL/Desktop/YourCv/Tahaluf.YourCV.API/Properties/assets/images/templates/";
  let basePath=(this.url);
  return  (basePath+value).split('unsafe:')[0];
  
  }
}
