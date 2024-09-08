import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderTemplateComponent } from "../../e-components/header-template/header-template.component";
import { FooterTemplateComponent } from "../../e-components/footer-template/footer-template.component";

@Component({
  selector: 'app-terms-of-use',
  standalone: true,
  imports: [RouterModule, HeaderTemplateComponent, FooterTemplateComponent],
  templateUrl: './terms-of-use.component.html',
  styleUrl: './terms-of-use.component.css'
})
export class TermsOfUseComponent implements OnInit{
  ngOnInit(): void {
      window.scrollTo(0,0);
  }

}
