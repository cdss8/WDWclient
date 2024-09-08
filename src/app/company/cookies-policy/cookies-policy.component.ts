import { Component, OnInit } from '@angular/core';
import { HeaderTemplateComponent } from '../../e-components/header-template/header-template.component';
import { FooterTemplateComponent } from '../../e-components/footer-template/footer-template.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cookies-policy',
  standalone: true,
  imports: [HeaderTemplateComponent, FooterTemplateComponent, RouterModule],
  templateUrl: './cookies-policy.component.html',
  styleUrl: './cookies-policy.component.css'
})
export class CookiesPolicyComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0,0)
  }
}
