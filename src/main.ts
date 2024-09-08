/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';  

import routesConfig from './app/app.routes'; //enabling routing in the main TS


bootstrapApplication(AppComponent, {
  providers:[
    provideRouter(routesConfig)  
  ]
})
.catch((err) => console.error(err));
