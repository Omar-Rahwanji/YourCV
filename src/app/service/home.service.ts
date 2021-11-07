import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private spinner: NgxSpinnerService, private toastr: ToastrService, private http: HttpClient, private router: Router) { }
  data: any = {};

  getWebPageData(): void {
    this.spinner.show();
    this.http.get('http://localhost:3456/api/WebsiteInfo/GetWebsiteInfoByRoleId/2').subscribe((result: any) => {
      this.data = result;
      this.toastr.success('Data Retrieved Successfuly 😁');
      this.spinner.hide();
    },
      error => {
        this.spinner.hide();
        this.toastr.error('Failed Retrieving Data 😐');
      }
    );
  }
}
