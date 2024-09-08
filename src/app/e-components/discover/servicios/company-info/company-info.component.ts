import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderTemplateComponent } from "../../../header-template/header-template.component";
import { FooterComponent } from "../../../../main/footer/footer.component";

@Component({
  selector: 'app-company-info',
  standalone: true,
  imports: [HeaderTemplateComponent, FooterComponent, RouterModule],
  templateUrl: './company-info.component.html',
  styleUrl: './company-info.component.css'
})

export class CompanyInfoComponent {


}
