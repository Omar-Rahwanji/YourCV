import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from 'src/app/service/product.service';
import { TemplateService } from 'src/app/Service/template.service';

@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.scss']
})
export class EditTemplateComponent implements OnInit {
  
  formGroup =new FormGroup({
    id:new FormControl(''),
    Name:new FormControl(''),//c#
    Price:new FormControl('',Validators.required),
    coverImage:new FormControl('',Validators.required)
  })
  id: any;

  constructor(public productService: ProductService,public templateservice:TemplateService,private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    debugger
    this.id = this.route.snapshot.params['id'];
    this.templateservice.getTemplateById(this.id);
  }

  templateid:any;
  templatename:any;
  templateprice:any;
  templateimage:any;

  

  UpdateItem(){

    debugger
    this.templateid=this.formGroup.value.id;
    this.templatename=this.formGroup.value.Name;//c#
    this.templateprice=this.formGroup.value.Price;
    //this.templateimage=this.formGroup.value.coverImage;
    
    const data2={
      id:parseInt(this.id),
      Name:this.templatename.toString(),
      Price:parseInt(this.templateprice),
      //coverImage: this.templateimage.toString()
      
    }
    this.templateservice.UpdateTemplate(data2);
    window.location.reload();
  }

  uploadFile(files:any) {
    debugger
    if (files.length === 0) {
    return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.templateservice.uploadAttachment(formData);
    }


  getImagePath(value:string ){

    let basePath="C:/Users/DELL/Desktop/YourCv/Tahaluf.YourCV.API/Properties/assets/images/templates/";
    return basePath+value;
    
    }
}
