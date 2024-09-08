import { Component } from '@angular/core';
import { BoostSalesComponent } from './boost-sales/boost-sales.component';
import { GrowBrandComponent } from './grow-brand/grow-brand.component';
import { BuildTeamComponent } from './build-team/build-team.component';
import { TechImprovmentComponent} from './tech-improvment/tech-improvment.component';
import { RouterModule } from '@angular/router';
import { FooterTemplateComponent } from '../../e-components/footer-template/footer-template.component';

@Component({
  selector: 'app-quick-start',
  standalone: true,
  imports: [BoostSalesComponent, GrowBrandComponent, BuildTeamComponent, TechImprovmentComponent, RouterModule, FooterTemplateComponent],
  templateUrl: './quick-start.component.html',
  styleUrl: './quick-start.component.css'
})
export class QuickStartComponent {

}
