import { Component } from '@angular/core';
import { BookingsComponent } from '../bookings/bookings.component';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  ContactUsFormService} from '../../servicios/getstaarted-s/contact-us-form.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [BookingsComponent, RouterModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.css'
})


export class GetStartedComponent {
contactUsForm:FormGroup;
sucessLayer = 0;

constructor(private contactUsFormService:ContactUsFormService){
  this.contactUsForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,  Validators.email]),
    company: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    revenue: new FormControl('', [Validators.required]),
    terms: new FormControl(false, [Validators.requiredTrue]),
  });
}

  trimFormValues(formValues: any): any {

    const trimmedValues = { ...formValues,  

    };
    for (const key in trimmedValues) {
      if (typeof trimmedValues[key] === 'string') {
        trimmedValues[key] = trimmedValues[key].trim();
        }
      }   
    return trimmedValues;
  }

  getMetadata() {
    return {
      timestamp: new Date().toISOString(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      currentUrl: window.location.href
    };
  }

  onSubmit() {
      if (this.contactUsForm.valid) {
        const formValues = this.contactUsForm.value;
        const metaData = this.getMetadata()
        const trimmedValues = this.trimFormValues(formValues); 
        this.sucessLayer++;
      
        const Data= {
          ...trimmedValues, 
          ...metaData
        }
      
        //to server 
      this.contactUsFormService.submitContactUsForm(Data).subscribe({
        next:(response: any) => {
        console.log('Form submitted successfully!', response, Data);
        },
        error: (error: any) => {
        console.error('Error submitting form', error);
      }
    });
    } else this.contactUsForm.markAllAsTouched();
  }

  restartFn(){
    this.contactUsForm.reset();
    this.sucessLayer=0;
  }

}


 /*submitContactUs(
    firstName:string,
    lastName:string,
    email:string,
    company:string,
    message:string,
    budget:string,
    anualRevenue:string,
    howKnowUs:string,
    termsAndConditions:boolean,
    stayUpdated:boolean 
  ){console.log(firstName, lastName, email,company, message, budget, anualRevenue, howKnowUs, termsAndConditions, stayUpdated)}*/

