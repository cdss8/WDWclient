import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../footer/footer.component";
import { AdvantagesComponent } from "../../advantages/advantages.component";
import { PartnersComponent } from "../../partners/partners.component";

@Component({
  selector: 'app-tech-improvment',
  standalone: true,
  imports: [HeaderComponent, RouterModule, FooterComponent, AdvantagesComponent, PartnersComponent],
  templateUrl: './tech-improvment.component.html',
  styleUrl: './tech-improvment.component.css'
})
export class TechImprovmentComponent implements OnInit{
  ngOnInit() {
    window.scrollTo(0,0);
  }
}{

}
