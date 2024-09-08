import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../../../main/header/header.component";
import { FooterComponent } from "../../../../main/footer/footer.component";

@Component({
  selector: 'app-dis-quick-start',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './dis-quick-start.component.html',
  styleUrl: './dis-quick-start.component.css'
})
export class DisQuickStartComponent implements OnInit{

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

}
