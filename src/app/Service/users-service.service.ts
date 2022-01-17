import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  data: any = [{}]
  selectedResume: any = [{}]

  constructor(private http: HttpClient, private spiner: NgxSpinnerService, private router: Router, public tostr: ToastrService) { }

  getAllUser() {
    debugger
    return this.http.get('http://localhost:3456/api/User/GetAllUser')
  }

  DeletebyID(id: number) {
    debugger
    this.spiner.show();
    debugger
    this.http.delete('http://localhost:3456/api/User/delete/' + id)
      .subscribe((date: any) => {
        this.spiner.hide();
        this.tostr.success(' Deleted ');
      }, err => {
        this.spiner.hide();
        this.tostr.error(err.status);

      })


  }

  getAllResumeByUserId(userId: number) {
    debugger
    return this.http.get('http://localhost:3456/api/Resume/GetResumeByUserId/' + userId).subscribe((data: any) => {
      debugger
      this.selectedResume = data;
      console.log(this.selectedResume);
      this.data = this.selectedResume;
      this.spiner.hide();

    }, err => {
      this.spiner.hide();
      this.tostr.error(err.status);
    })
  }
}
