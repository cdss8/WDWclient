import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LocationdetailsComponent } from './e-components/discover/servicios/locationdetails/locationdetails.component';
import { BoostSalesComponent } from './main/quick-start/boost-sales/boost-sales.component';
import { GrowBrandComponent } from './main/quick-start/grow-brand/grow-brand.component';
import { BuildTeamComponent } from './main/quick-start/build-team/build-team.component';
import { TechImprovmentComponent } from './main/quick-start/tech-improvment/tech-improvment.component';
import { Member1Component } from './e-components/discover/servicios/team/members/member1/member1.component';
import { Form2Component } from './company/form2/form2.component';
import { PrivacyPolicyComponent } from './company/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './company/terms-of-use/terms-of-use.component';
import { NgModule } from '@angular/core';
import { ExpertiseComponent } from './e-components/expertise/expertise.component';
import { DiscoverComponent } from './e-components/discover/discover.component';
import { PartnershipFormComponent } from './e-components/partnership-form/partnership-form.component';
import { TestimonialsComponent } from './e-components/testimonials/testimonials.component';
import { PodcastComponent } from './e-components/podcast/podcast.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DisQuickStartComponent } from './e-components/discover/servicios/dis-quick-start/dis-quick-start.component';
import { ResourcesComponent } from './e-components/discover/servicios/resources/resources.component';
import { CompanyInfoComponent } from './e-components/discover/servicios/company-info/company-info.component';
import { TeamComponent } from './e-components/discover/servicios/team/team.component';
import { CookiesPolicyComponent } from './company/cookies-policy/cookies-policy.component';


//export const routes: Routes = [];
const routesConfig: Routes = [
    
    {path:'', component:MainComponent, title: 'Engage Digital Wealth | Home'}, 
    {path:'bio-manuel', component:Member1Component, title: 'Engage DW | Company | Team'},
    {path:'do-no-track', component:Form2Component, title:'Engage DW | Do No Sell My Info'},
    {path:'privacy', component:PrivacyPolicyComponent, title:'Engage DW | Privacy Policy'},
    {path:'conditions', component:TermsOfUseComponent, title:'Engage DW | Terms Of Use'},
    {path:'expertise', component:ExpertiseComponent, title:'Engage DW | Expertise'},
    {path:'discover', component:DiscoverComponent, title:'Engage DW | Discover'},
    {path:'partnership', component:PartnershipFormComponent, title:'Engage DW | Partnership'},
    {path:'testimonials', component:TestimonialsComponent, title:'Engage DW | Proof of Work'},
    {path:'podcast', component:PodcastComponent, title:'Engage DW | W Juan Manuel Sialo'},
    {path:'Contact-Us', component:LandingPageComponent, title:'Engage DW | W Juan Manuel Sialo'},
    {path:'quickstart', component:DisQuickStartComponent, title:'Engage DW | W Juan Manuel Sialo'},
    {path:'qs-boost-sales', component:BoostSalesComponent, title: 'Engage DW | Quick Start | Boost Sales Solutions'},
    {path:'qs-brand-growth', component:GrowBrandComponent, title: 'Engage DW | Quick Start | Brand Growth Solutions'},
    {path:'qs-build-team', component:BuildTeamComponent, title: 'Engage DW | Quick Start | Build Team Solutions'},
    {path:'qs-tech', component:TechImprovmentComponent, title: 'Engage DW | Quick Start | Tech Solutions'},
    {path:'resources', component:ResourcesComponent, title:'Engage DW | W Juan Manuel Sialo'},
    {path:'locations', component:LocationdetailsComponent, title: 'Engage DW | Locations Page'},
    {path:'company', component:CompanyInfoComponent, title:'Engage DW | W Juan Manuel Sialo'},
    {path:'team', component:TeamComponent, title:'Engage DW | W Juan Manuel Sialo'},
    {path:'cookies', component:CookiesPolicyComponent, title:'Engage DW | W Juan Manuel Sialo'},
];

export default routesConfig; 
NgModule({
    declarations:[],
    imports:[

    ]
})

