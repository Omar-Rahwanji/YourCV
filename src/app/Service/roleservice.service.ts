import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RoleserviceService {
  data :any =[{}]
  selectRole:any=[{}]
  constructor(private http:HttpClient,private spiner :NgxSpinnerService,private router:Router,public tostr:ToastrService) { }

  getAll(){
    return this.http.get('http://localhost:3456/api/Role/GetAllRole')
  }

  DeletebyID(id:number){
    debugger
    this.spiner.show();
    debugger
    this.http.delete('http://localhost:3456/api/Role/DeleteRole/'+id)
    .subscribe((date:any)=>{
      this.spiner.hide();
     this.tostr.success('Deleted ');
    
    },err=>{
      this.spiner.hide();
      this.tostr.error(err.status);
    })
    
    
      }

      create(data:any){
        debugger
        this.spiner.show();
        debugger
        this.http.post('http://localhost:3456/api/Role/CreateRole',data).subscribe((res:any)=>{
          this.tostr.success('Created');
          window.location.reload();
          this.spiner.hide();
     
        },err=>{
         this.spiner.hide();
         this.tostr.error(' Not Created');
      
        })
     
      }

      getRoleById(id:number){
        debugger
        this.spiner.show();
        this.http.get('http://localhost:3456/api/Role/GetAllRoleById/'+id).subscribe((data:any)=>{
          debugger
          this.selectRole=data;
          console.log(this.selectRole);
          this.data=this.selectRole;
          //this.router.navigate(['client']);
          this.spiner.hide();
    
        },err=>{
          this.spiner.hide();
         // this.toastr.error(err.status);
          //this.router.navigate(['']);
        })
      }

      UpdateRole(data:any){
        debugger
        this.spiner.show();
        debugger
        this.http.put('http://localhost:3456/api/Role/UpdateRole',data).subscribe((res:any)=>{
          this.router.navigate(['/dashboard-admin/role']);
          this.spiner.hide();
     
        },err=>{
         this.spiner.hide();
         ///this.toastr.error(' Not Created');
      
        })
     
      }
}
