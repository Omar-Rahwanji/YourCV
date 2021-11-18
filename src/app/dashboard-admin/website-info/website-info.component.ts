import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebsiteserviceService } from 'src/app/Service/websiteservice.service';

@Component({
  selector: 'app-website-info',
  templateUrl: './website-info.component.html',
  styleUrls: ['./website-info.component.scss']
})
export class WebsiteInfoComponent implements OnInit {
  id: number;

  

  constructor(public websiteservice:WebsiteserviceService) { }

  ngOnInit(): void {
    debugger
    this.websiteservice.getWebsiteById(1)
  }

}
