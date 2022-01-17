import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-create-resume',
  templateUrl: './create-resume.component.html',
  styleUrls: ['./create-resume.component.scss']
})
export class CreateResumeComponent implements OnInit {

  constructor(private productService: ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  resumeForm: FormGroup = new FormGroup({
    personName: new FormControl('', [Validators.required]),
    personPosition: new FormControl('', [Validators.required]),
    personSummary: new FormControl('', [Validators.required]),
    personEmail: new FormControl('', [Validators.required]),
    personPhone: new FormControl('', [Validators.required]),
    personEducations: new FormControl(''),
    personExperiences: new FormControl(''),
    personProjects: new FormControl(''),
    personSkills: new FormControl(''),
    personInterests: new FormControl(''),
  });

  addEducation(education: any) {
    this.resumeForm.controls.personEducations.setValue([this.resumeForm.controls.personEducations.value, education])
    this.toastr.success('Education added successfuly 😁');
  }

  addExperience(experience: any) {
    console.log(experience)
    this.resumeForm.controls.personExperiences.setValue([...this.resumeForm.controls.personExperiences.value, experience])
    this.toastr.success('Experience added successfuly 😁');
  }

  addProject(project: any) {
    this.resumeForm.controls.personProjects.setValue([...this.resumeForm.controls.personProjects.value, project])
    this.toastr.success('Project added successfuly 😁');
  }

  addSkill(skill: any) {
    this.resumeForm.controls.personSkills.setValue([...this.resumeForm.controls.personSkills.value, skill])
    this.toastr.success('Skill added successfuly 😁');
  }

  addInterest(interest: any) {
    this.resumeForm.controls.personInterests.setValue([...this.resumeForm.controls.personInterests.value, interest])
    this.toastr.success('Interest added successfuly 😁');
  }


  fillResumeData() {
    this.productService.resumeData = this.resumeForm.value;
  }
}
