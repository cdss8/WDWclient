import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [RouterModule, NgbTooltip, CommonModule],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css'
})
export class DiscoverComponent implements OnInit{
  ngOnInit(): void {
    window.scrollTo(0,0)
  }
}
