import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})

export class Form2Component implements OnInit{

  doNoSellMyDataForm:FormGroup;
  success=0;

  constructor(){
  this.doNoSellMyDataForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    country: new FormControl(''),
    city: new FormControl(''),
    street: new FormControl(''),
    zip: new FormControl(''),
    phone: new FormControl(''),

  });
}
  /*
  submitDoNoSellMyData() {
    this.doNoSellMyDataForm.value.firstName ?? '',
    this.doNoSellMyDataForm.value.lastName ?? '',
    this.doNoSellMyDataForm.value.email ?? '',
    this.doNoSellMyDataForm.value.company ?? '',
    this.doNoSellMyDataForm.value.message ?? '',
    this.doNoSellMyDataForm.value.budget ?? '',
    this.doNoSellMyDataForm.value.howKnowUs ?? '',
    this.doNoSellMyDataForm.value.anualRevenue ?? '',

    console.log("user",this.doNoSellMyDataForm);
 // Perform any additional processing or validation on the form values
  }
  */

  trimmedData(doNoSellMyDataForm:any):any{
    const trimmedValues = { ...doNoSellMyDataForm };
    for (const key in trimmedValues) {
      if (typeof trimmedValues[key] === 'string') {
        trimmedValues[key] = trimmedValues[key].trim();
        }
      }   
    return trimmedValues;
  }

  onSubmit() {
    if (this.doNoSellMyDataForm.valid) {
      const formValues = this.doNoSellMyDataForm.value;
      const trimmedValues = this.trimmedData(formValues); 
      console.log(trimmedValues); 
       this.success ++;
    }else {
      this.doNoSellMyDataForm.markAllAsTouched();  
    }
  }
  restartFn(){
    this.doNoSellMyDataForm.reset();
    this.success=0;
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }
}

