import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from './home.service';
// import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http: HttpClient, private toastr: ToastrService, private spinner: NgxSpinnerService, private homeService: HomeService) {
    this.homeService.getWebPageData();
  }
  // private http:HttpClient,private toaster:ToastrService
  ContactInfoData: any = [{}]
  ContactUsData: any = [{}]

  getContactinfo() {
    this.http.get("http://localhost:3456/api/ContactInfo/GetAllContactInfo").subscribe((result) => {
      this.ContactInfoData = result;
      // this.toastr.success('Data Retrieved Successfuly 😁');
      this.spinner.hide();
    },
      error => {
        this.spinner.hide();
        this.toastr.error('Failed Retrieving Data 😐');
      })
  }

  CreateContactUs(ContactUsData: any) {
    // this.http.post("http://localhost:3456/api/ContactUs/CreateContactUs", ContactUsData).subscribe();
    this.http.post("http://localhost:3456/api/ContactUs/CreateContactUs", ContactUsData).subscribe((res) => {
      this.toastr.success('Message Sent Successfully'),
        err => {
          this.toastr.error("Message Field Send")
        }
    });
  }
}
