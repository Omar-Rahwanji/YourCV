import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http:HttpClient) { }
  // private http:HttpClient,private toaster:ToastrService
  ContactInfoData :any=[{}]
  ContactUsData : any=[{}]

  GetAllContactInfo()
  {
    return this.http.get("http://localhost:3456/api/ContactInfo/GetAllContactInfo");
  }

  CreateContactUs(ContactUsData:any)
  {
    this.http.post("http://localhost:3456/api/ContactUs/CreateContactUs",ContactUsData).subscribe();
  
    // this.http.post("http://localhost:3456/api/ContactUs/CreateContactUs",ContactUsData).subscribe((res)=> 
    // {this.toaster.success('Message Sent Successfully'),err=>{this.toaster.error("Message Field Send")}});
  
  
  }
}
