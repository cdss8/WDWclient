import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GetStartedComponent } from "../../get-started/get-started.component";
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-build-team',
  standalone: true,
  imports: [RouterModule, GetStartedComponent, NgbTooltip],
  templateUrl: './build-team.component.html',
  styleUrl: './build-team.component.css'
})
export class BuildTeamComponent implements OnInit{
  ngOnInit() {
    window.scrollTo(0,0);
  }
} {

}
