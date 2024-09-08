import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from '../../company/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from '../../company/terms-of-use/terms-of-use.component';
import { Form2Component } from '../../company/form2/form2.component';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, PrivacyPolicyComponent, TermsOfUseComponent, Form2Component  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
