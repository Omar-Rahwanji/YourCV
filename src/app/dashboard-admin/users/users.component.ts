import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UsersServiceService } from 'src/app/Service/users-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  view = 'list';
  @Input () userId:number|undefined;
  constructor(public userService:UsersServiceService,public tostr:ToastrService,private spiner:NgxSpinnerService,private router:Router) { }

  ngOnInit(): void {
    this.getAllUser();
  }


  getAllUser(){
    debugger
    this.spiner.show();
    debugger
    this.userService.getAllUser().subscribe((res:any)=>{
      this.userService.data=res;
      this.spiner.hide();
      //this.tostr.success('Data Retrived !!!')
    },err=>{
      this.spiner.hide();
      //this.tostr.error('something want worring!!')
    })

}
DeleteUser(id:number){
  debugger
  this.userService.DeletebyID(id);
  this.tostr.success('Deleted Item');
 window.location.reload();

}
/* DetalisUser(userId:number){
  debugger
  this.router.navigate(['userorder', userId]);

} */
}
