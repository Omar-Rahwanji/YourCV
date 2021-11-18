import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileUserService {
  display_image: any;

  constructor(private http:HttpClient,private spiner: NgxSpinnerService, private toastr:ToastrService, private router:Router) { }

  selectuser:any=[{}];
  data:any=[{}];
  getUserById(id:number){
    this.spiner.show();
    this.http.get('http://localhost:3456/api/User/GetUserById/'+id).subscribe((data:any)=>{
      this.selectuser=data;
      this.data=this.selectuser;
      this.spiner.hide();

    },err=>{
      this.spiner.hide();
      this.toastr.error('failed retrieving data 😐')
    })
  }

 Update(data:any){
   debugger
   data={...data,RoleId:2,personalPhoto:this.display_image}
    this.spiner.show();
    debugger
    this.http.put('http://localhost:3456/api/User/UpdateUser/',data).subscribe((res:any)=>{
      this.spiner.hide();
      this.toastr.success('Updated');
 
    },err=>{
     this.spiner.hide();
     this.toastr.error(' Not Updated');
    })
  }


  uploadAttachment(file:FormData){
    debugger
    const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
    const requestOptions = {
    headers: new HttpHeaders(headerDict),
    };
    this.http.post('http://localhost:3456/api/User/upload',file).subscribe((data: any) => {
    this.display_image=data.personalPhoto;
    this.toastr.success('Uploaded');

    if(data){
    console.log(data);}
    }, err => {
      this.toastr.error(' Not Uploaded');
    })
    }
  
}
