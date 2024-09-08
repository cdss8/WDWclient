import { Component } from '@angular/core';
import { HeaderComponent } from "../../main/header/header.component";
import { FooterComponent } from "../../main/footer/footer.component";
import { RouterModule } from '@angular/router';
import { HeaderTemplateComponent } from '../header-template/header-template.component';
import { FooterTemplateComponent } from '../footer-template/footer-template.component';
import { PartnersComponent } from "../../main/partners/partners.component";

@Component({
  selector: 'app-partnership-form',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule, HeaderTemplateComponent, FooterTemplateComponent, PartnersComponent],
  templateUrl: './partnership-form.component.html',
  styleUrl: './partnership-form.component.css'
})
export class PartnershipFormComponent {

}
