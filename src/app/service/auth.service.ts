import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private spinner: NgxSpinnerService, private toastr: ToastrService, private http: HttpClient, private router: Router, private homeService: HomeService) {
    this.homeService.getWebPageData();
  }

  customerImage: any;
  uploadAttachment(file: FormData) {

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    this.http.post('http://localhost:3456/api/User/upload', file).subscribe((data: any) => {
      this.customerImage = data.personalPhoto;
      // localStorage.setItem('image',this.display_image)
    }, err => {
    })
  }


  registerCustomer(customerData: any) {
    customerData = { ...customerData, Country: 'Jordan', City: 'Amman', RoleId: 2, PersonalPhoto: this.customerImage };
    this.spinner.show();
    this.http.post('http://localhost:3456/api/User/CreateUser', customerData).subscribe((result: any) => {
      this.toastr.success('Successfuly Registered 😁');
      this.spinner.hide();
      this.router.navigate(['auth/login']);
    },
      error => {
        this.spinner.hide();
        this.toastr.error('Failed Registering 😐');
      }
    );
  }
}
