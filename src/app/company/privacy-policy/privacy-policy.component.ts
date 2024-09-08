import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderTemplateComponent } from "../../e-components/header-template/header-template.component";
import { FooterTemplateComponent } from "../../e-components/footer-template/footer-template.component";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterModule, HeaderTemplateComponent, FooterTemplateComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent implements OnInit{
  ngOnInit(): void {
    window.scrollTo(0,0);
  }

}
