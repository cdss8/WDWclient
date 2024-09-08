import { Component,OnInit } from '@angular/core';
import { GetStartedComponent } from '../../../../main/get-started/get-started.component';
import { FooterTemplateComponent } from "../../../footer-template/footer-template.component";
import { HeaderComponent } from "../../../../main/header/header.component";
import { HeaderTemplateComponent } from "../../../header-template/header-template.component";
import { FooterComponent } from "../../../../main/footer/footer.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-locationdetails',
  standalone: true,
  imports: [GetStartedComponent, RouterModule, FooterTemplateComponent, HeaderComponent, HeaderTemplateComponent, FooterComponent],
  template: `
    
  <app-header-template></app-header-template>
  <body>
 
    <div class="text-cover">
      <h1>Locations </h1> 
      <P>Expanding Our Reach: Our Upcoming Locations</P>
    </div>

    <section>
    <div class="navegator">
          <a [routerLink]="['/discover']">discover</a> 
          <i class="fa-solid fa-chevron-right"></i>
          <a class="current">Locations</a>
      </div>
      <p>We currrently thrive as an Online Digital Company. We're actively working on establishing physical offices in the following countries for more trust  and accessibility for our clients.
        Stay tuned for updates on our progress and the exact locations of our new offices. Subscribe to our newsletter for exclusive insights and announcements.</p>
      <div class=lct>
        <div style="cursor:pointer;">
          <p class="title">Engage Digital Wealth LLC</p>
          <img src="/assets/location/us.jpg" alt="" aria-hidden="true">
          <p class="countries">U.S.A</p>
        </div>

        <div style="cursor:pointer;">
          <p class="title">Engage - Agencia Digital S.R.L</p>
          <img src="/assets/location/spain.jpg" alt="" aria-hidden="true">
          <p class="countries">SPAIN</p>
        </div>
        
        <div style="cursor:default; opacity:1; ">
        <p class="title"><span>Coming Soon</span></p>
          <img src="/assets/location/uk.jpg" alt="" aria-hidden="true">
          <p class="countries">UNITED KINGDOM</p>
        </div>
      </div>
      
      <div class="lct-text">

      </div>
    </section>
  </body>
  <app-footer></app-footer>
      
  `,
  styleUrl: './locationdetails.component.css'
})
export class LocationdetailsComponent implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}