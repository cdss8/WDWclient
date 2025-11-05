import { Component, OnInit} from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActiveStateService } from '../../servicios/activestatus/active-state.service';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, NgbTooltip],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  activeMenuItem: string = '';
  showHeader=true;
  hamOpen=false;

  constructor(private router: Router, public status:ActiveStateService ) {}

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.activeMenuItem = event.urlAfterRedirects;
        this.hamOpen=false;
      }
    });
    
    this.status.showHeader$.subscribe(visible => {
      this.showHeader = visible; 
    });
  }

  toggleHeaderVisibility() {
    this.status.toggleHeaderVisibility(); 
  }

  toggleHamburger(){
    this.hamOpen =! this.hamOpen;
  }

}