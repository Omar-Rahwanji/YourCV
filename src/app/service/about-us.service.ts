import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  constructor(private http: HttpClient) { }
  AboutUsData : any =[{}]
  // websiteInfoData : any =[{}]
  
getAllAboutUs(){
  return this.http.get("http://localhost:3456/api/AboutUs/GetAllAboutUs")
}

// getAllWebsiteInfo(){
//   return this.http.get("http://localhost:3456/api/WebsiteInfo/GetAllWebsiteInfo")
// }
}