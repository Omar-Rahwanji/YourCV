import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private spinner: NgxSpinnerService, private toastr: ToastrService, private http: HttpClient, private router: Router) { }
  registerCustomer(customerData:any){
    customerData = {...customerData,RoleId: 2};
    this.spinner.show();
    this.http.post('http://localhost:3456/api/User/CreateUser',customerData).subscribe((result: any) => {
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
