import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterTemplateComponent } from "../../e-components/footer-template/footer-template.component";
import { HeaderTemplateComponent } from "../../e-components/header-template/header-template.component";
import { FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [RouterModule, FooterTemplateComponent, HeaderTemplateComponent, ReactiveFormsModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})

export class Form2Component implements OnInit{
  ngOnInit(): void {
    window.scrollTo(0,0);
  }
  doNoSellMyDataForm = new FormGroup({
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

  submitDoNoSellMyData() {
    // Get the form values

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

}
