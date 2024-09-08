import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})


export class PartnersComponent {
  @Input() y:number=0;   //to initialize the component in different positions
}
