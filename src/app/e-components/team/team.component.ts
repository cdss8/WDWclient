import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GetStartedComponent } from '../../main/get-started/get-started.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [RouterModule, GetStartedComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0,0);
  }

}
