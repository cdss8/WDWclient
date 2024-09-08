import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../footer/footer.component";
import { PartnersComponent } from "../../partners/partners.component";

@Component({
  selector: 'app-build-team',
  standalone: true,
  imports: [HeaderComponent, RouterModule, FooterComponent, PartnersComponent],
  templateUrl: './build-team.component.html',
  styleUrl: './build-team.component.css'
})
export class BuildTeamComponent implements OnInit{
  ngOnInit() {
    window.scrollTo(0,0);
  }
} {

}
