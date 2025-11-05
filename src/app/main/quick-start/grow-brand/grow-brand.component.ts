import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GetStartedComponent } from "../../get-started/get-started.component";
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-grow-brand',
  standalone: true,
  imports: [RouterModule, GetStartedComponent, NgbTooltip],
  templateUrl: './grow-brand.component.html',
  styleUrl: './grow-brand.component.css'
})
export class GrowBrandComponent implements OnInit{
  ngOnInit() {
    window.scrollTo(0,0);
  }
}{

}
