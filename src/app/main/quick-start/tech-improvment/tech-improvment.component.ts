import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PartnersComponent } from "../../partners/partners.component";
import { GetStartedComponent } from "../../get-started/get-started.component";
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tech-improvment',
  standalone: true,
  imports: [RouterModule,  PartnersComponent, GetStartedComponent, NgbTooltip],
  templateUrl: './tech-improvment.component.html',
  styleUrl: './tech-improvment.component.css'
})
export class TechImprovmentComponent implements OnInit{
  ngOnInit() {
    window.scrollTo(0,0);
  }
}{

}
