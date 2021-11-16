import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { JwtHelperService } from '@auth0/angular-jwt';
import jwtDecode from 'jwt-decode';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
// import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Auth} from '../models/auth/auth.module'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private spinner: NgxSpinnerService, private toastr: ToastrService, private http: HttpClient, private router: Router) { }
  //Service  
  customerImage: any;
  uploadAttachment(file: FormData) {

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    this.http.post('http://localhost:3456/api/User/upload', file).subscribe((data: any) => {
      this.customerImage = data.personalPhoto;
      // localStorage.setItem('image',this.display_image)
    }, err => {
    })
  }


  registerCustomer(customerData: any) {
    customerData = { ...customerData, Country: 'Jordan', City: 'Amman', RoleId: 2, PersonalPhoto: this.customerImage };
    this.spinner.show();
    this.http.post('http://localhost:3456/api/User/CreateUser', customerData).subscribe((result: any) => {
      this.toastr.success('Successfuly Registered 😁');
      this.spinner.hide();
      this.router.navigate(['auth/login']);
    },
      error => {
        this.spinner.hide();
        this.toastr.error('Failed Registering 😐');
      }
    );
  }

  auth:Auth=new Auth();
  email=new FormControl("",[Validators.required])
  password= new FormControl("",[Validators.required])
  //authRefresh = new BehaviorSubject(0);

  
LoginForm(auth:Auth)
{
 var responce1:any;
  var body=
    {
  email:this.email.value.toString(),
  password:this.password.value.toString()
    };
    const headerDict={
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
    const requestOptions={
      headers:new HttpHeaders(headerDict)
    }
    this.spinner.show();
    return this.http.post(`${environment.URL}`,auth,requestOptions)
   
    
}
public getRole(){
  const tokenString = localStorage.getItem('token') || 'invalid token';
  let token:any = jwtDecode(tokenString);
  if(token.role)
  { 
    return token.role;}
  else return null;

}
// public isAuthenticated(): boolean {
//   // Check whether the token is expired and return
//   // true or false
//   const token = localStorage.getItem('token') || undefined;
//   return !this.jwtHelper.isTokenExpired(token);
// }

}