import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-member1',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './member1.component.html',
  styleUrl: './member1.component.css'
})
export class Member1Component implements OnInit{
  ngOnInit(): void {
    window.scrollTo(0,0);
  }

}
