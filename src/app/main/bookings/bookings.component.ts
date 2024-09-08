import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})

export class BookingsComponent implements AfterViewInit {
ngAfterViewInit(): void {
  const script =document.createElement('script');
  script.src ='https://assets.calendly.com/assets/external/widget.js' ;
  script.async = true;
  document.body.appendChild(script);
 }

 //adding calendly as popout
 //openCalendlyPopup() {
  //window.Calendly.initPopupWidget({ url: 'https://calendly.com/fabi-rayo2317' });
//}
}