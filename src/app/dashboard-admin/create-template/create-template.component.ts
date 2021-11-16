import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TemplateService } from 'src/app/Service/template.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent implements OnInit {
  form: FormGroup;
  id: number;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  formGroup =new FormGroup({
    Name:new FormControl(''),//c#
    Price:new FormControl('',Validators.required),
    coverImage:new FormControl('',Validators.required)
  })

  constructor(public templateservice:TemplateService,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
      //this.templateservice.getTemplateById(this.id);
          
 
  }


  templateid:any;
  templatename:any;
  templateprice:any;
  templateimage:any;


  saveItem(){
    debugger
    this.templatename=this.formGroup.value.Name;//c#
    this.templateprice=this.formGroup.value.Price;
    //this.templateimage=this.formGroup.value.coverImage;
    
    const data2={
      Name:this.templatename.toString(),
      Price:parseInt(this.templateprice),
      //coverImage: this.templateimage.toString()
      
    }
    this.templateservice.create(data2);
   

  }

  UpdateItem(){

    debugger
    this.templateid=this.formGroup.value.id;
    this.templatename=this.formGroup.value.Name;//c#
    this.templateprice=this.formGroup.value.Price;
    this.templateimage=this.formGroup.value.TemplateImage;
    
    const data2={
      id:parseInt(this.templateid),
      Name:this.templatename.toString(),
      Price:parseInt(this.templateprice),
      TemplateImage: this.templateimage.toString()
      
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
    }


