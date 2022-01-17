import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServiceService } from 'src/app/Service/users-service.service';
import { ActivatedRoute } from '@angular/router';
import { TemplateService } from 'src/app/Service/template.service';

@Component({
  selector: 'app-users-orders',
  templateUrl: './users-orders.component.html',
  styleUrls: ['./users-orders.component.scss']
})
export class UsersOrdersComponent implements OnInit {
   userId:number;
   isAddMode: boolean;
   templateId:number;

  constructor(public userservice:UsersServiceService,private router:Router,private route: ActivatedRoute,public templateservices:TemplateService) { }
  
  
  
  ngOnInit(): void {
    debugger

    this.userId =parseInt( this.route.snapshot.params['userId']);
    debugger
    if (!this.isAddMode) {
      this.userservice.getAllResumeByUserId(this.userId);
    }
    

  }

  moreDetalis(templateId:number){
   this.templateservices.getTemplateById(templateId);
  }

}
