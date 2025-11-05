import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeamComponent } from '../team/team.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetStartedComponent } from "../../main/get-started/get-started.component"; 
import { DomSanitizer } from '@angular/platform-browser';
import { PrivacyPolicyComponent } from '../../company/privacy-policy/privacy-policy.component';
import { DiscoverComponent } from '../discover/discover.component';

interface Legal {
  title: string;
  content: string;
  isOpen: boolean;
  link?:string;
  linkText?:string;
}


@Component({
  selector: 'app-company-info',
  standalone: true,
  imports: [RouterModule, TeamComponent, PrivacyPolicyComponent, CommonModule, NgbModule, DiscoverComponent, GetStartedComponent],
  templateUrl: './company-info.component.html',
  styleUrl: './company-info.component.css'
})

export class CompanyInfoComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0,0);
  }
  constructor(private sanitizer: DomSanitizer){}

  legalList: Legal[] = [

    { title: 'Privacy Policy', content: 'Your privacy is important to us. This Privacy Policy explains our practices regarding the collection, use, and disclosure of 1  your personal information when you interact with our website 2  or services.', isOpen: false,  link: '/privacy', linkText: 'Here'},
    { title: 'Term And Conditions', content: 'Please carefully read these Terms and Conditions before using our website or services. By accessing or using our site, you agree to be bound by these terms.', isOpen: false,link: '/conditions', linkText: 'Here' },
    { title: 'Do No Sell My Info', content: 'Under the General Data Protection Regulation (GDPR), you have certain rights regarding your personal data, including the right to object to the processing of your personal data for direct marketing purposes. This notice explains your rights and how to exercise them.', isOpen: false, link: '/do-no-track', linkText: 'Here' },
    { title: 'NDA', content: 'To safeguard the confidentiality of sensitive information shared during project discussions, we will require all parties to sign a Non-Disclosure Agreement before project initiation.', isOpen: false },
    { title: 'Compliance', content: 'We are committed to maintaining the highest standards of compliance to ensure the security and safety of all parties involved in our business operations. Our compliance program is designed to safeguard sensitive data and protect against unauthorized access, use, or disclosure. We adhere to industry best practices and regulatory requirements to ensure the security of your information.', isOpen: false },
     ];

  toggleAccordion(x: Legal) {
    x.isOpen = !x.isOpen;
  }
  getSafeHtml(content: string) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
}
}