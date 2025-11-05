import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActiveStateService } from '../servicios/activestatus/active-state.service';
import { countries } from 'country-list-json';




@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})

export class LandingPageComponent implements OnInit{

  countryList = countries;
  LayerId =1;
  LandingPageForm: FormGroup;
  
  
 
  constructor(public activeServiceStatus:ActiveStateService){    
   this.LandingPageForm = new FormGroup({
    lead: new FormControl('', [Validators.required]),
    industry: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    tier: new FormControl('', [Validators.required]),
    revenueYear: new FormControl('', [Validators.required]),
    revenueQuatrimestral: new FormControl('', [Validators.required]),
    eBITDAYear: new FormControl('', [Validators.required]),
    eBITDAQuatrimestral: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    location: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(00|\\+)[1-9][0-9]{0,2}\\-?[0-9]{5,15}$')]),
    howKnowUs: new FormControl('', [Validators.required]),
    terms: new FormControl(false, [Validators.requiredTrue]),
    suscribe: new FormControl(false),
    dM: new FormControl(''),
    profile: new FormControl(''),
    socialMedia: new FormControl(''),
    });
  }
  
  trimFormValues(formValues: any): any {
    const trimmedValues = { ...formValues };
    for (const key in trimmedValues) {
      if (typeof trimmedValues[key] === 'string') {
        trimmedValues[key] = trimmedValues[key].trim();
        }
      }   
    return trimmedValues;
  }

  onSubmit() {
    this.LayerId;
    if(this.isCurrentLayerValid()){
      if (this.LandingPageForm.valid) {
        const formValues = this.LandingPageForm.value;
        const trimmedValues = this.trimFormValues(formValues); 
        console.log(trimmedValues); 
        this.LayerId++;
        } 
    } else this.markCurrentLayerAsTouched(); 
  }
  
  startLayer(){
    this.LandingPageForm.reset();
    this.LayerId=1;
  }

  isCurrentLayerValid(): boolean {
    switch (this.LayerId) {
      case 1:
        return this.LandingPageForm.get('lead')?.valid ==true
      case 2:
        return this.LandingPageForm.get('company')?.valid ==true 
        && this.LandingPageForm.get('description')?.valid==true
        && this.LandingPageForm.get('industry')?.valid==true
        && this.LandingPageForm.get('message')?.valid==true;
      case 3:
        return this.LandingPageForm.get('tier')?.valid ==true
      case 4:
        return this.LandingPageForm.get('revenueYear')?.valid ==true 
        && this.LandingPageForm.get('revenueQuatrimestral')?.valid==true
        && this.LandingPageForm.get('eBITDAYear')?.valid==true
        && this.LandingPageForm.get('eBITDAQuatrimestral')?.valid==true;
      case 5:
        return this.LandingPageForm.get('firstName')?.valid ==true 
        && this.LandingPageForm.get('lastName')?.valid==true
        && this.LandingPageForm.get('email')?.valid==true
        && this.LandingPageForm.get('location')?.valid==true
        && this.LandingPageForm.get('phone')?.valid==true;
      case 6:
        return this.LandingPageForm.get('howKnowUs')?.valid ==true 
        && this.LandingPageForm.get('terms')?.valid==true
      default:
        return true;
    }
  }

  markCurrentLayerAsTouched(){
    switch (this.LayerId) {
      case 1:
        this.LandingPageForm.get('lead')?.markAllAsTouched();
        break;
      case 2:
        this.LandingPageForm.get('company')?.markAllAsTouched();
        this.LandingPageForm.get('description')?.markAllAsTouched();
        this.LandingPageForm.get('industry')?.markAllAsTouched();
        this.LandingPageForm.get('message')?.markAllAsTouched();
        break;
      case 3:
        this.LandingPageForm.get('tier')?.markAllAsTouched();
        break;
      case 4:
        this.LandingPageForm.get('revenueYear')?.markAllAsTouched();
        this.LandingPageForm.get('revenueQuatrimestral')?.markAllAsTouched();
        this.LandingPageForm.get('eBITDAYear')?.markAllAsTouched();
        this.LandingPageForm.get('eBITDAQuatrimestral')?.markAllAsTouched();
        break;
      case 5:
        this.LandingPageForm.get('firstName')?.markAllAsTouched();
        this.LandingPageForm.get('lastName')?.markAllAsTouched();
        this.LandingPageForm.get('email')?.markAllAsTouched();
        this.LandingPageForm.get('location')?.markAllAsTouched();
        this.LandingPageForm.get('phone')?.markAllAsTouched();
        break;
      case 6:
        this.LandingPageForm.get('howKnowUs')?.markAllAsTouched();
        this.LandingPageForm.get('terms')?.markAllAsTouched();
        break;
      default:
        this.LandingPageForm.value ==false;
  }
}

  next(){
    if(this.isCurrentLayerValid()){
      this.LayerId++;
    } else this.markCurrentLayerAsTouched();
  }
    prev(){
    this.LayerId--;
  }
    
  ngOnInit(): void {
    this.activeServiceStatus.showHeader$;
    this.activeServiceStatus.showMgIcon$;
  }

}
