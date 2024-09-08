import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-template',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header-template.component.html',
  styleUrl: './header-template.component.css'
})

export class HeaderTemplateComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

}
