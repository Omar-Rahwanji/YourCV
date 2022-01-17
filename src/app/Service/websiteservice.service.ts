import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class WebsiteserviceService {
  selectedWebsite: [{}]
  data: any = [{}];

  constructor(private http: HttpClient, private spiner: NgxSpinnerService, private router: Router, public tostr: ToastrService) { }


  getWebsiteById(id: number) {
    debugger
    return this.http.get('http://localhost:3456/api/WebsiteInfo/GetWebsiteInfo/' + id).subscribe((data: any) => {
      debugger
      this.selectedWebsite = data;
      console.log(this.selectedWebsite);
      this.data = this.selectedWebsite;
      this.spiner.hide();

    }, err => {
      this.spiner.hide();
      this.tostr.error(err.status);
    })
  }

  UpdateWebsite(data: any) {
    debugger
    data = { ...data, Id: 1, RoleId: 2 }
    this.spiner.show();
    debugger
    this.http.put('http://localhost:3456/api/WebsiteInfo/UpdateWebsiteInfo', data).subscribe((res: any) => {
      this.spiner.hide();
      this.tostr.success('Updated');
      this.router.navigate(['website']);
    }, err => {
      this.spiner.hide();
      this.tostr.error(' Not Updated');
    })

  }
}
