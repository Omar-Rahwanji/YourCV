import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  constructor(private http: HttpClient, private homeService: HomeService, private spinner:NgxSpinnerService, private toastr: ToastrService) {
    this.homeService.getWebPageData();
  }

  AboutUsData: any = [{}]

  getAllAboutUs() {
    this.spinner.show();
    this.http.get('http://localhost:3456/api/AboutUs/GetAllAboutUs').subscribe((result: any) => {
      this.AboutUsData = result;
      // this.toastr.success('Data Retrieved Successfuly 😁');
      this.spinner.hide();
    },
      error => {
        this.spinner.hide();
        this.toastr.error('Failed Retrieving Data 😐');
      }
    );
  }
}