import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-terms-of-use',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './terms-of-use.component.html',
  styleUrl: './terms-of-use.component.css'
})
export class TermsOfUseComponent implements OnInit{
  ngOnInit(): void {
      window.scrollTo(0,0);
  }

}
