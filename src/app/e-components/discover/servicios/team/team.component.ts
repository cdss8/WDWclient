import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderTemplateComponent } from "../../../header-template/header-template.component";
import { FooterTemplateComponent } from "../../../footer-template/footer-template.component";
import { FooterComponent } from "../../../../main/footer/footer.component";

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [RouterModule, HeaderTemplateComponent, FooterComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

}
