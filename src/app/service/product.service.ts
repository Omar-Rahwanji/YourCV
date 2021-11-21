import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from './home.service';
import { ProfileUserService } from './profile-user.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private spinner: NgxSpinnerService, private toastr: ToastrService, private http: HttpClient, private homeService: HomeService, private userProfileService: ProfileUserService) {
    this.homeService.getWebPageData();
  }

  templateDocuments: any = [];
  selectedTemplateDocument: any = {};
  resumeBody: ElementRef;
  payed: boolean = false;

  resumeData: any = {
    personName: 'JOHN DOE',
    personPosition: 'Front-End Developer',
    personSummary: "I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.",
    personEmail: 'john.doe@gmail.com',
    personPhone: '111-222-3333',
    personExperiences: [
      'KlowdBox / San Fr, CA / Jan 2011 - Feb 2015',
      'Fr developer / did This and that',
      'Akount / San Monica, CA / Jan 2011 - Feb 2015',
      'Fr developer / did This and that',
    ],
    personEducations: [
      'Sample Institute of technology / San Fr, CA / Jan 2011 - Feb 2015',
      'Fr developer / did This and that',
      'Akount / San Monica, CA / Jan 2011 - Feb 2015',
      'Fr developer / did This and that',
    ],
    personProjects: [
      "DSP / I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.",
      "DSP / I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.",
    ],
    personSkills: [
      'Javascript',
      'CSS',
    ],
    personInterests: [
      'Football',
      'programming'
    ],
  };

  getProducts() {
    this.spinner.show();
    this.http.get('http://localhost:3456/api/TemplateDocument/GetAllTemplateDocument').subscribe((result: any) => {
      this.templateDocuments = result;
      // this.toastr.success('Data Retrieved Successfuly 😁');
      this.spinner.hide();
    },
      error => {
        this.spinner.hide();
        this.toastr.error('Failed Retrieving Data 😐');
      }
    );
  }

  getProductById(productId: number) {
    this.spinner.show();
    this.http.get('http://localhost:3456/api/TemplateDocument/GetTemplateDocumentById/' + productId).subscribe((result) => {
      // this.toastr.success('Data Retrieved Successfuly 😁');
      this.spinner.hide();
      this.selectedTemplateDocument = result;
    },
      error => {
        this.spinner.hide();
        this.toastr.error('Failed Retrieving Data 😐');
      }
    );
  }
  userId: number = 0;
  buyResume() {
    let StringToken = localStorage.getItem('token');
    if (StringToken != null) {
      let Token: any = jwtDecode(StringToken);
      this.userId = Token.nameid;
      this.userProfileService.getUserById(this.userId);
    }
    const boughtResume =
    {
      PersonName: this.selectedTemplateDocument.name,
      PersonSummary: this.selectedTemplateDocument.price.toString(),
      UserId: Number(this.userId),
      TemplateDocumentId: Number(this.selectedTemplateDocument.id)
    }
    this.spinner.show();
    console.log(boughtResume)
    this.http.post('http://localhost:3456/api/Resume/CreateResume', boughtResume).subscribe((result) => {
      this.toastr.success('Bought Successfuly 😁');
      this.spinner.hide();
    },
      error => {
        this.spinner.hide();
        this.toastr.error('Failed 😐');
      }
    );
  }
}
