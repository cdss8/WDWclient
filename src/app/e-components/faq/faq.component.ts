import { Component,  OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GetStartedComponent } from "../../main/get-started/get-started.component";
import { FaqService, FAQ } from '../../servicios/faq-s/faq.service';


@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RouterModule, CommonModule, GetStartedComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})

export class FaqComponent implements OnInit{

   faqList: FAQ[] =[];

  constructor( private faqService:FaqService){}

  toggleAccordion(x: FAQ) {
    x.isOpen = !x.isOpen;
  }
  ngOnInit(): void {
    window.scrollTo(0,0);
    this.fetchFAQ();
  }

  fetchFAQ(){
    this.faqService.getFAQs().subscribe({
      next: (data: FAQ[]) => {
          this.faqList = data;
          console.log(data)
      },
      error: (error) => {
        console.error(error, 'Error fetching FAQs')
      }
    })
  }
    

}

