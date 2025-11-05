import { Component, OnInit } from '@angular/core';
import { QuickStartComponent } from './quick-start/quick-start.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { PartnersComponent } from './partners/partners.component';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from './header/header.component';
import { RouterModule} from '@angular/router';
import { InfoSectionComponent } from "./info-section/info-section.component";
import { BoostSalesComponent } from './quick-start/boost-sales/boost-sales.component';
import { BookingsComponent } from "./bookings/bookings.component";
import { IntroComponent } from "./intro/intro.component";
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ QuickStartComponent, GetStartedComponent, PartnersComponent, FooterComponent,
    HeaderComponent, RouterModule, InfoSectionComponent, LandingPageComponent,
    BoostSalesComponent, BookingsComponent, IntroComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent implements OnInit{
  ngOnInit() {
    window.scrollTo(0,0);
  };

}
