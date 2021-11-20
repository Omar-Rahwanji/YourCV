import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  data :any=[{}] ;
  selectTemplate:any=[{}]
  display_image: any;

  selecttemplatedoc:any={}
  constructor(private http:HttpClient,private spiner :NgxSpinnerService,private router:Router,public tostr:ToastrService) { }
  getAll(){
    return this.http.get('http://localhost:3456/api/TemplateDocument/GetAllTemplateDocument')
  }


  create(data:any){
    debugger
    data={...data,coverImage:this.display_image};
    this.spiner.show();
    debugger
    this.http.post('http://localhost:3456/api/TemplateDocument/CreateTemplateDocument',data).subscribe((res:any)=>{
      this.tostr.success('Created');
      this.spiner.hide();
      this.router.navigate(['']);
      window.location.reload();

 
    },err=>{
     this.spiner.hide();
     this.tostr.error(' Not Created');
  
    })
 
  }

  UpdateTemplate(data:any){
    debugger
    data={...data,coverImage:this.display_image};
    this.spiner.show();
    debugger
    this.http.put('http://localhost:3456/api/TemplateDocument/UpdateTemplateDocument',data).subscribe((res:any)=>{
      //this.toastr.success('Created');
      this.spiner.hide();
      this.router.navigate(['']);

 
    },err=>{
     this.spiner.hide();
     ///this.toastr.error(' Not Created');
  
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
    debugger
    this.http.post('http://localhost:3456/api/TemplateDocument/upload',file).subscribe((data: any) => {
    this.display_image=data.coverImage;
    debugger
    if(data){
    console.log(data);}
    }, err => {
    
    })
    }


    DeletebyID(id:number){
      debugger
      this.spiner.show();
      debugger
      this.http.delete('http://localhost:3456/api/TemplateDocument/DeleteTemplateDocument/'+id)
      .subscribe((date:any)=>{
        this.spiner.hide();
       // this.toastr.success('Deleted ');
      
      },err=>{
        this.spiner.hide();
        // this.toastr.error(err.status);
      
      })
      
      
        }


        getTemplateById(id:number){
          debugger
          this.spiner.show();
          this.http.get('http://localhost:3456/api/TemplateDocument/GetTemplateDocumentById/'+id).subscribe((data:any)=>{
            debugger
            this.selectTemplate=data;
            console.log(this.selectTemplate);
            //this.data=this.selectTemplate;

            this.spiner.hide();
      
          },err=>{
            this.spiner.hide();
            //this.toster.error(err.status);
          })
        }
    
}
