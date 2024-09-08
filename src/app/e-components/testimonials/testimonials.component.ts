import { Component } from '@angular/core';
import { HeaderComponent } from "../../main/header/header.component";
import { FooterComponent } from "../../main/footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})


export class TestimonialsComponent {

}
