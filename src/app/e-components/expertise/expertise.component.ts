import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../main/header/header.component";
import { FooterComponent } from "../../main/footer/footer.component";
import { HeaderTemplateComponent } from '../header-template/header-template.component';
import { RouterModule } from '@angular/router';
import { GetStartedComponent } from "../../main/get-started/get-started.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule, HeaderTemplateComponent, GetStartedComponent],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.css'
})

export class ExpertiseComponent implements OnInit{

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

  constructor(private router: Router) {}
  
  initWithCoords(x: number, y: number) {
    this.router.navigate(['expertise'], { state: { x, y } });
  }


}
