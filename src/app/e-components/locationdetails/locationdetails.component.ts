import { Component,OnInit } from '@angular/core';
import { GetStartedComponent } from '../../main/get-started/get-started.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-locationdetails',
  standalone: true,
  imports: [GetStartedComponent, RouterModule],
  template: `
    
 <body>
    <section>
      <h2>Offices</h2>
      <div>
          <div class="text-cover">
            <h1>Creating impact for your business
              <br><b> Our Upcoming Locations</b></h1> 
          </div>
          <p>As a trusted partner, we are committed to deliver customized solutions and significant business growth to our partners worldwide.
          The operations of our company  extend globally and we are strategically expanding our physical presence in key locations.</p>
          <h4><b>Stay tuned for updates!</b> Subscribe to our NewsLetter for exclusive insights and announcements.</h4>
          <div class=lct>
            <div style="cursor:pointer;">
              <p class="title"><span>Coming Soon</span></p>
              <img src="/assets/location/us.jpg" alt="" aria-hidden="true">
              <p class="countries">U.S.A</p>
            </div>

            <div style="cursor:pointer;">
              <p class="title"><span>Coming Soon</span></p>
              <img src="/assets/location/spain.jpg" alt="" aria-hidden="true">
              <p class="countries">SPAIN</p>
            </div>
            
            <div style="cursor:default; opacity:1; ">
            <p class="title"><span>Coming Soon</span></p>
              <img src="/assets/location/uk.jpg" alt="" aria-hidden="true">
              <p class="countries">UNITED KINGDOM</p>
            </div>
          </div>
      </div>
    </section>
 </body>
 <app-get-started></app-get-started>
 <br><br><br>
      
  `,
  styleUrl: './locationdetails.component.css'
})


export class LocationdetailsComponent implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}