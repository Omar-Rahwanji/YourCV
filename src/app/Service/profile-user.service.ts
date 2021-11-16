import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileUserService {
  display_image: any;

  constructor(private http:HttpClient,private spiner: NgxSpinnerService,private router:Router) { }

  selectuser:any=[{}];
  data:any=[{}];
  getUserById(id:number){
    debugger
    debugger
    this.spiner.show();
    this.http.get('http://localhost:3456/api/User/GetUserById/'+id).subscribe((data:any)=>{
      debugger
      this.selectuser=data;
      console.log(this.selectuser);
      this.data=this.selectuser;
      this.spiner.hide();

    },err=>{
      this.spiner.hide();
      
    })
  }

 Update(data:any){
   debugger
   data={...data,RoleId:2,personalPhoto:this.display_image}
    this.spiner.show();
    debugger
    this.http.put('http://localhost:3456/api/User/UpdateUser/',data).subscribe((res:any)=>{
      this.spiner.hide();
 
    },err=>{
     this.spiner.hide();
  
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
    debugger
    if(data){
    console.log(data);}
    }, err => {
    
    })
    }
  
}
