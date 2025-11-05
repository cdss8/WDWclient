import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GetStartedComponent } from "../../main/get-started/get-started.component";
import { Router } from '@angular/router';
import { GrowBrandComponent } from '../../main/quick-start/grow-brand/grow-brand.component';
@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [ RouterModule, GetStartedComponent, GrowBrandComponent],
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
