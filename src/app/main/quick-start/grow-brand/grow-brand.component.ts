import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../footer/footer.component";
import { PartnersComponent } from "../../partners/partners.component";

@Component({
  selector: 'app-grow-brand',
  standalone: true,
  imports: [HeaderComponent, RouterModule, FooterComponent, PartnersComponent],
  templateUrl: './grow-brand.component.html',
  styleUrl: './grow-brand.component.css'
})
export class GrowBrandComponent implements OnInit{
  ngOnInit() {
    window.scrollTo(0,0);
  }
}{

}
