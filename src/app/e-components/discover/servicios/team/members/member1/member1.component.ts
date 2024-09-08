import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from '../../../../../../company/privacy-policy/privacy-policy.component';
import { HeaderTemplateComponent } from "../../../../../header-template/header-template.component";
import { FooterComponent } from "../../../../../../main/footer/footer.component";

@Component({
  selector: 'app-member1',
  standalone: true,
  imports: [RouterModule, HeaderTemplateComponent, FooterComponent, PrivacyPolicyComponent],
  templateUrl: './member1.component.html',
  styleUrl: './member1.component.css'
})
export class Member1Component implements OnInit{
  ngOnInit(): void {
    window.scrollTo(0,0);
  }

}
