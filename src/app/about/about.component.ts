import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AboutUsService } from '../service/about-us.service';

@Component({
  selector: 'll-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor( public AboutUsService: AboutUsService , private http:HttpClientModule) { }

  ngOnInit(): void {
    this.GetAboutUs();
    // this.Getwebsiteinfo();
  }

  GetAboutUs(){
    this.AboutUsService.getAllAboutUs().subscribe((result:any)=>{this.AboutUsService.AboutUsData=result});
  }
  // Getwebsiteinfo(){
  //   this.AboutUsService.getAllWebsiteInfo().subscribe((result:any)=>{this.AboutUsService.websiteInfoData=result});
  // }
}
