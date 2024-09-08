import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})



export class LandingPageComponent implements OnInit{
  ngOnInit(): void {
    window.scrollTo(0,100);
  }


  contactUsForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    company: new FormControl(''),
    message: new FormControl(''),
    budget: new FormControl(''),
    anualRevenue:new FormControl('', Validators.required),
    howKnowUs: new FormControl('', Validators.required),
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
