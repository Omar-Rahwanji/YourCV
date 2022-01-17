import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebsiteserviceService } from 'src/app/Service/websiteservice.service';

@Component({
  selector: 'app-edit-website',
  templateUrl: './edit-website.component.html',
  styleUrls: ['./edit-website.component.scss']
})
export class EditWebsiteComponent implements OnInit {

  id: number;

  formGroup =new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),//c#
    title:new FormControl('',Validators.required),
    headLine:new FormControl('',Validators.required),
    logo:new FormControl(''),
    background:new FormControl(''),
  })

  constructor(public websiteservice:WebsiteserviceService) { }

  ngOnInit(): void {
    debugger
    this.websiteservice.getWebsiteById(1)
  }


UpdateWebsite(){
  this.id=parseInt(this.formGroup.value.id)
  this.websiteservice.UpdateWebsite(this.formGroup.value);
}
}
