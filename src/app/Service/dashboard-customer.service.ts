import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DashboardCustomerService {
  
  data:any =[{}];
  selectedResume:any=[{}];
  constructor(private http:HttpClient,private spiner: NgxSpinnerService, private toastr:ToastrService, private router:Router ) { }


 GetAllResumeById(userId:number){
  debugger
  this.spiner.show();
  this.http.get('http://localhost:3456/api/Resume/GetResumeByUserId/'+userId).subscribe((data:any)=>{
    //debugger
    this.selectedResume=data;
    console.log(this.selectedResume);
    this.data=this.selectedResume;
    //this.router.navigate(['userdetalis']);
    this.spiner.hide();

  },err=>{
    this.spiner.hide();
    this.toastr.error(err.status);
    //this.router.navigate(['']);
  })
}

 DeleteResumebyID(resumeId:number){
  //debugger
  this.spiner.show();
  this.http.delete('http://localhost:3456/api/Resume/DeleteResume/'+resumeId)
  .subscribe((date:any)=>{
    this.spiner.hide();
    this.toastr.success(' Deleted ');
    window.location.reload();
  
  },err=>{
    this.spiner.hide();
    this.toastr.error(err.status);
  })
 }
 getAll(){
  return this.http.get('http://localhost:3456/api/TemplateDocument/GetAllTemplateDocument')
}

}
