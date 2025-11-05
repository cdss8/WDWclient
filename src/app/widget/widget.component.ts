import { Component, OnInit, Input} from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { PartnershipFormComponent } from '../e-components/partnership-form/partnership-form.component';
import { CommonModule } from '@angular/common';
import { NavigationEnd } from '@angular/router';
import { ActiveStateService } from '../servicios/activestatus/active-state.service';


@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [RouterModule, PartnershipFormComponent, CommonModule],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css'
})
export class WidgetComponent implements OnInit {
  open= false;
  showMIcon=true;

  constructor(private router: Router, public status:ActiveStateService) {}

  ngOnInit() {
    this.status.showMgIcon$.subscribe( visible =>{
    this.showMIcon = visible;
    })

  }
  toggleButton(){
    this.open = !this.open;
  }
}
