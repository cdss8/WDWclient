
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';  
import { appConfig } from './app/app.config';
import routesConfig from './app/app.routes'; //enabling routing in the main TS


bootstrapApplication(AppComponent, appConfig)
.catch((err) => console.error(err));
