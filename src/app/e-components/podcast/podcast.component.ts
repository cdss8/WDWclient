import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../main/header/header.component";
import { RouterModule } from '@angular/router';
import { HeaderTemplateComponent } from '../header-template/header-template.component';
import { FooterTemplateComponent } from '../footer-template/footer-template.component';

@Component({
  selector: 'app-podcast',
  standalone: true,
  imports: [HeaderComponent, RouterModule, HeaderTemplateComponent, FooterTemplateComponent],
  templateUrl: './podcast.component.html',
  styleUrl: './podcast.component.css'
})
export class PodcastComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
}
}
