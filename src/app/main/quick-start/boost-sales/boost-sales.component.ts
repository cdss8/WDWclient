import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../footer/footer.component";
import { PartnersComponent } from "../../partners/partners.component";
import { HeaderTemplateComponent } from "../../../e-components/header-template/header-template.component";

@Component({
  selector: 'app-boost-sales',
  standalone: true,
  imports: [HeaderComponent, RouterModule, FooterComponent, PartnersComponent, HeaderTemplateComponent],
  templateUrl: './boost-sales.component.html',
  styleUrl: './boost-sales.component.css'
})
export class BoostSalesComponent implements OnInit{
  ngOnInit() {
    window.scrollTo(0,0);
  }
}
