import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from '../service/contact-us.service';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'll-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  ContactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])

  })

  constructor(public contactUsService: ContactUsService, private http: HttpClientModule) { }
  Name: any;
  Email: any;
  PhoneNumber: any;
  Subject: any;
  Message: any;

  ngOnInit(): void {
    this.contactUsService.getContactinfo();
  }

  SaveItem() {
    this.Name = this.ContactForm.value.name;
    this.Email = this.ContactForm.value.email;
    this.PhoneNumber = this.ContactForm.value.phoneNumber;
    this.Subject = this.ContactForm.value.subject;
    this.Message = this.ContactForm.value.message;

    const SaveData =
    {
      name: this.Name.toString(),
      email: this.Email.toString(),
      phoneNumber: this.PhoneNumber.toString(),
      subject: this.Subject.toString(),
      message: this.Message.toString()

    }
    this.contactUsService.CreateContactUs(SaveData);
    this.ContactForm.reset();
  }
}
