import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LocationdetailsComponent } from './e-components/locationdetails/locationdetails.component';
import { BoostSalesComponent } from './main/quick-start/boost-sales/boost-sales.component';
import { GrowBrandComponent } from './main/quick-start/grow-brand/grow-brand.component';
import { BuildTeamComponent } from './main/quick-start/build-team/build-team.component';
import { TechImprovmentComponent } from './main/quick-start/tech-improvment/tech-improvment.component';
import { Member1Component } from './e-components/member1/member1.component';
import { Form2Component } from './company/form2/form2.component';
import { PrivacyPolicyComponent } from './company/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './company/terms-of-use/terms-of-use.component';
import { ExpertiseComponent } from './e-components/expertise/expertise.component';
import { DiscoverComponent } from './e-components/discover/discover.component';
import { PartnershipFormComponent } from './e-components/partnership-form/partnership-form.component';
import { TestimonialsComponent } from './e-components/testimonials/testimonials.component';
import { PodcastComponent } from './e-components/podcast/podcast.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CompanyInfoComponent } from './e-components/company-info/company-info.component';
import { TeamComponent } from './e-components/team/team.component';
import { CookiesPolicyComponent } from './company/cookies-policy/cookies-policy.component';
import { FaqComponent } from './e-components/faq/faq.component';
import { NgModule } from '@angular/core';


//export const routes: Routes = [];
const routesConfig: Routes = [
    
    {path:'', component:MainComponent, title: 'Home | Wise Digital Wealth—Marketing, Business & Technology Company'}, 
    {path:'bio-manuel', component:Member1Component, title: 'Bio Juan Manuel | Wise Digital Wealth'},
    {path:'do-no-track', component:Form2Component, title:'Do No Sell My Info | Wise Digital Wealth'},
    {path:'privacy', component:PrivacyPolicyComponent, title:'Privacy Policy | Wise Digital Wealth'},
    {path:'conditions', component:TermsOfUseComponent, title:'Terms Of Use | Wise Digital Wealth'},
    {path:'expertise', component:ExpertiseComponent, title:'Expertise | Wise Digital Wealth'},
    {path:'discover', component:DiscoverComponent, title:'Discover | Wise Digital Wealth'},
    {path:'partnership', component:PartnershipFormComponent, title:'Partnership | Wise Digital Wealth'},
    {path:'testimonials', component:TestimonialsComponent, title:'Testimonials | Wise Digital Wealth'},
    {path:'podcast', component:PodcastComponent, title:'Podcast: Money:The Name Of The Game presented by Juan Manuel Sialo | Wise Digital Wealth'},
    {path:'contact', component:LandingPageComponent, title:'Landing Page Form | Wise Digital Wealth'},
    {path:'marketing-sales', component:BoostSalesComponent, title: 'Marketing & Sales | Wise Digital Wealth'},
    {path:'branding', component:GrowBrandComponent, title: 'Branding | Wise Digital Wealth'},
    {path:'build-team', component:BuildTeamComponent, title: 'Team Solutions | Wise Digital Wealth'},
    {path:'technology', component:TechImprovmentComponent, title: 'Tech Solutions | Wise Digital Wealth'},
    {path:'locations', component:LocationdetailsComponent, title: 'Future Offices | Wise Digital Wealth '},
    {path:'about', component:CompanyInfoComponent, title:'Company | Wise Digital Wealth'},
    {path:'team', component:TeamComponent, title:'Terms & Conditions | Wise Digital Wealth'},
    {path:'faq', component:FaqComponent, title:'FAQ | Wise Digital Wealth'},
    {path:'cookies', component:CookiesPolicyComponent, title:'Cookies | Wise Digital Wealth'},
    {path:'**', redirectTo:'/'},
];

export default routesConfig; 
NgModule({
    declarations:[],
    imports:[

    ]
})

