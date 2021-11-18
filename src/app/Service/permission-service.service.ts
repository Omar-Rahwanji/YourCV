import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PermissionServiceService {
  data :any =[{}]
  permission:any=[{}]

  constructor(private http:HttpClient,private spiner :NgxSpinnerService,private router:Router,public tostr:ToastrService) { }

  getAllPermissionRole(){
    return this.http.get('http://localhost:3456/api/PermissionRole/GetAllPermissionRole')
  }

  getAllPermission(){
    debugger
    return this.http.get('http://localhost:3456/api/Permession/GetAllPermession')

  }

  create(data:any){
    debugger
    this.spiner.show();
    debugger
    this.http.post('http://localhost:3456/api/Permession/CreatePermession',data).subscribe((res:any)=>{
      this.tostr.success('Created');
      this.spiner.hide();
 
    },err=>{
     this.spiner.hide();
     this.tostr.error(' Not Created');
  
    })
  }

  createPermissionRole(data:any){
    debugger
    this.spiner.show();
    debugger
    this.http.post('http://localhost:3456/api/PermissionRole/CreatePermissionRole',data).subscribe((res:any)=>{
      this.tostr.success('Created');
      this.spiner.hide();
 
    },err=>{
     this.spiner.hide();
     this.tostr.error(' Not Created');
  
    })
  }

  
  DeletebyID(id:number){
    debugger
    this.spiner.show();
    debugger
    this.http.delete('http://localhost:3456/api/Permession/delete/'+id)
    .subscribe((date:any)=>{
      this.spiner.hide();
     this.tostr.success(' Deleted ');
    
    },err=>{
      this.spiner.hide();
      this.tostr.error(err.status);
    
    })
}

DeletePermissionRole(id:number){
  debugger
  this.spiner.show();
  debugger
  this.http.delete('http://localhost:3456/api/PermissionRole/DeletePermissionRole/'+id)
  .subscribe((date:any)=>{
    this.spiner.hide();
   // this.toastr.success('Deleted ');
  
  },err=>{
    this.spiner.hide();
    // this.toastr.error(err.status);
  
  })
}

getPermissionById(id:number){
  debugger
  this.spiner.show();
  this.http.get('http://localhost:3456/api/Permession/GetPermessionById/'+id).subscribe((data:any)=>{
    debugger
    this.permission=data;
    console.log(this.permission);
    this.data=this.permission;
    //this.router.navigate(['client']);
    this.spiner.hide();

  },err=>{
    this.spiner.hide();
   // this.toastr.error(err.status);
    //this.router.navigate(['']);
  })
}


getPermissionRoleById(id:number){
  debugger
  this.spiner.show();
  this.http.get('http://localhost:3456/api/PermissionRole/GetAllPermissionRoleById/'+id).subscribe((data:any)=>{
    debugger
    this.permission=data;
    console.log(this.permission);
    this.data=this.permission;
    //this.router.navigate(['client']);
    this.spiner.hide();

  },err=>{
    this.spiner.hide();
   // this.toastr.error(err.status);
    //this.router.navigate(['']);
  })
}

UpdatePermission(data:any){
  debugger
  this.spiner.show();
  debugger
  this.http.put('http://localhost:3456/api/Permession/UpdatePermission',data).subscribe((res:any)=>{
    this.router.navigate(['/dashboard-admin/permission']);
    this.spiner.hide();

  },err=>{
   this.spiner.hide();
   ///this.toastr.error(' Not Created');

  })

}
}
