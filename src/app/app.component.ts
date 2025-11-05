import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget/widget.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FaqComponent } from './e-components/faq/faq.component';


NgModule({
  declarations:[],
  imports:[
    BrowserModule, 
    HttpClientModule,
    RouterModule
  ]
})

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, RouterModule, NgbModule,
           HeaderComponent, FooterComponent,  WidgetComponent,
           CommonModule,     FaqComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'WiseDigitalWealth';
}

