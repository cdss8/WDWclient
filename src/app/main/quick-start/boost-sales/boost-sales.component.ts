import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GetStartedComponent } from "../../get-started/get-started.component";
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-boost-sales',
  standalone: true,
  imports: [RouterModule, GetStartedComponent, NgbTooltip],
  templateUrl: './boost-sales.component.html',
  styleUrl: './boost-sales.component.css'
})

export class BoostSalesComponent implements OnInit{
  ngOnInit() {
    window.scrollTo(0,0);
  }
}
