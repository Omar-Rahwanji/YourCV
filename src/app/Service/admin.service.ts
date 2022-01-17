import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  display_image: any;

  constructor(private http:HttpClient,private spiner :NgxSpinnerService,private router:Router,public tostr:ToastrService) { }
  selectedUser:any=[{}]
  data:any=[{}]
  contactUsData:any=[{}]
  getAll(){
    return this.http.get('http://localhost:3456/api/User/GetAllUser')
  }

  getAdminProfile(id:number){
    debugger
    debugger
    this.spiner.show();
    this.http.get('http://localhost:3456/api/User/GetUserById/'+id).subscribe((data:any)=>{
      debugger
      this.selectedUser=data;
      console.log(this.selectedUser);
      this.data=this.selectedUser;
      this.spiner.hide();

    },err=>{
      this.spiner.hide();
      this.tostr.error(err.status);
    })
  }


  UpdateProfile(data:any){
    debugger
    data={...data,RoleId:1,personalPhoto:this.display_image};
    this.spiner.show();
    debugger
    this.http.put('http://localhost:3456/api/User/UpdateUser',data).subscribe((res:any)=>{
      this.tostr.success('Updated');
      this.spiner.hide();
      this.router.navigate(['profile']);
 
    },err=>{
     this.spiner.hide();
     this.tostr.error(' Not Updated');
  
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
    this.tostr.success('Uploaded');
    if(data){
    console.log(data);}
    }, err => {
      this.tostr.error(' Not Uploaded');
    })
    }

    getContactInbox(){
      this.spiner.show();
      this.http.get('http://localhost:3456/api/ContactUs/GetAllContactUs').subscribe((data:any)=>{
        this.contactUsData=data;
        this.spiner.hide();
      },err=>{
        this.spiner.hide();
        this.tostr.error(err.status);
      })  
    }
}
