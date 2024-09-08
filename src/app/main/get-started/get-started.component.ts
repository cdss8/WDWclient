import { Component } from '@angular/core';
import { BookingsComponent } from '../bookings/bookings.component';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';



@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [BookingsComponent, RouterModule, ReactiveFormsModule],
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.css'
})


export class GetStartedComponent {

  contactUsForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    budget: new FormControl('', Validators.required),
    anualRevenue:new FormControl('', Validators.required),
    howKnowUs: new FormControl('', ),
    terms: new FormControl(false, Validators.requiredTrue),
    suscribe: new FormControl(false)

  });

  submitContactUs() {
    // Get the form values

    this.contactUsForm.value.firstName ?? '',
    this.contactUsForm.value.lastName ?? '',
    this.contactUsForm.value.email ?? '',
    this.contactUsForm.value.company ?? '',
    this.contactUsForm.value.message ?? '',
    this.contactUsForm.value.budget ?? '',
    this.contactUsForm.value.howKnowUs ?? '',
    this.contactUsForm.value.anualRevenue ?? '',
    this.contactUsForm.value.terms ?? false,
    this.contactUsForm.value.suscribe ?? false

    console.log("user",this.contactUsForm);
 // Perform any additional processing or validation on the form values
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

