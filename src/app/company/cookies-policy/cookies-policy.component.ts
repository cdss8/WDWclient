import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cookies-policy',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cookies-policy.component.html',
  styleUrl: './cookies-policy.component.css'
})
export class CookiesPolicyComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0,0)
  }
}
