import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PartnersComponent } from "../../main/partners/partners.component";
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partnership-form',
  standalone: true,
  imports: [RouterModule, PartnersComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './partnership-form.component.html',
  styleUrl: './partnership-form.component.css'
})


export class PartnershipFormComponent implements OnInit{
  
  partnershipForm:FormGroup;
  success=0;
  
  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  constructor (){
    this.partnershipForm = new FormGroup({
      fullName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      company: new FormControl('',[Validators.required]),
      title: new FormControl('',[Validators.required]),
      message: new FormControl('', [Validators.required]),
      dataPrivacy: new FormControl(false,[Validators.requiredTrue])
    })
  }

    trimmedData(partnershipForValues:any):any{
      const trimmedValues = { ...partnershipForValues };
      for (const key in trimmedValues) {
        if (typeof trimmedValues[key] === 'string') {
          trimmedValues[key] = trimmedValues[key].trim();
          }
        }   
      return trimmedValues;
    }

    onSubmit() {
      if (this.partnershipForm.valid) {
        const formValues = this.partnershipForm.value;
        const trimmedValues = this.trimmedData(formValues); 
        console.log(trimmedValues); 
         this.success ++;
      }else {
        this.partnershipForm.markAllAsTouched();  
      }
    }
    restartFn(){
      this.partnershipForm.reset();
      this.success=0;
    }
}
