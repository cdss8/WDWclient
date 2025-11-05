import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from '../../company/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from '../../company/terms-of-use/terms-of-use.component';
import { Form2Component } from '../../company/form2/form2.component';
import { Router } from '@angular/router';
import { ActiveStateService } from '../../servicios/activestatus/active-state.service';
import { CommonModule } from '@angular/common';
import { FaqComponent } from '../../e-components/faq/faq.component';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd } from '@angular/router';
import { WidgetComponent } from '../../widget/widget.component';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, PrivacyPolicyComponent, TermsOfUseComponent, WidgetComponent, Form2Component, CommonModule, NgbTooltip, FaqComponent , ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  newsLetter:FormGroup;
  success=false;
  showFooter = true;
  messageIconOpen = false;
  activeMessageIcon='';

  constructor(private router:Router, public status:ActiveStateService ) {
    this.newsLetter = new FormGroup ({
      email:new FormControl('', [Validators.required, Validators.email])
    })
  }

  onSubmit() {
    if (this.newsLetter && this.newsLetter.valid) {  
      const value = this.newsLetter.value;
      console.log('Newsletter Suscriber', value);
      this.success = true;
      setTimeout(() => {
        this.success = false;
      }, 2000);
      this.newsLetter.reset();
      
    } else {
      this.newsLetter?.markAllAsTouched();  
    }
  }

  ngOnInit() {
      this.router.events.subscribe((event: any) => {
        if (event instanceof NavigationEnd) {
          this.activeMessageIcon = event.urlAfterRedirects;
        }
      });    
      this.status.showHeader$.subscribe(visible => {
      this.showFooter = visible; 
    });
  }

  toggleFooterVisibility() {
    this.status.toggleFooterVisibility();
  }
}
