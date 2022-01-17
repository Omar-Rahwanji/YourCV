import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Auth } from 'src/app/models/auth/auth.module';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  auth:Auth=new Auth();
  constructor(private spinner: NgxSpinnerService,private router:Router,public authService:AuthService,private toastr: ToastrService) { }
 
  LoginForm=new FormGroup
  ({
   userName: new FormControl(localStorage.getItem('userName'),[Validators.required]),
   password: new FormControl('',[Validators.required]),
   rememberMe: new FormControl('')
  })
  ngOnInit(): void {
  }
  SubmitLogin()
  {
    this.auth.UserName=this.LoginForm.controls.userName.value
    this.auth.Password=this.LoginForm.controls.password.value
    debugger
    this.authService.LoginForm(this.auth).subscribe((result:any)=>{
    debugger
      if(result){
            localStorage.setItem('token',result);
            this.toastr.success('You are loged in successfully');
            let Data:any=jwtDecode(result);
            debugger
        if(Data.role=="Admin")
         { this.spinner.hide();
            this.router.navigate(['dashboard-admin'])
          }
         else if(Data.role=="Customer")
         {
          this.spinner.hide();
          this.router.navigate(['dashboard'])
          this.toastr.success('You are logged in successfully');
         }
          this.RememberMe(this.LoginForm.controls.rememberMe.value)
         this.spinner.show();
         setTimeout(()=>{
          this.spinner.hide();
        },3000);
      }
      else
      {
        this.spinner.hide();
        this.toastr.warning('incorrect username or password');
      }
         });

  }
  showMessage = false;
  toggleShowMessage() {
  this.showMessage = !this.showMessage;
  }
  RememberMe(rememberMe:boolean)
  {
    if(rememberMe)
    {
      localStorage.setItem('userName',this.LoginForm.controls.userName.value)
    }
    else
    {
      localStorage.setItem('UserName',"")
    }
    
  }
}
