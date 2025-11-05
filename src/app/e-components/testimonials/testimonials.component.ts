import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OnInit} from '@angular/core';
import { TestimonialServiceService, Testimonials } from '../../servicios/testimonials-s/testimonial-service.service';


@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})

export class TestimonialsComponent implements OnInit{

  testimonialArray:Testimonials[]=[]
  total:number = 0

  constructor(private testimonialService:TestimonialServiceService){}
    
  i=0; 
  fade=false;
  ease=false;

  nextTestimonial() {
    this.i = (this.i + 1) % this.testimonialArray.length; 
  }

    nextPage() {
      if (this.i < this.total- 1) {
        this.fade = true; 
        this.ease = true;
        setTimeout(() => {
          this.i++;
          this.fade = false; 
          this.ease = false;
        }, 500);
      } 
    }

    prevPage() {
      if (this.i> 0) {
        this.fade = true; 
        this.ease= true;
        setTimeout(() => {
          this.i--;
          this.fade = false; 
          this. fade=false;
        }, 500); 
      }
    }  

    ngOnInit(): void {
      window.scrollTo(0,0);
      this.fetchTestimonial();
    }
  
    fetchTestimonial(){
      this.testimonialService.getReviews().subscribe({
        next: (data: Testimonials[]) => {
            this.testimonialArray = data;
            console.log(data)
            this.total = data.length
        },
        error: (error) => {
          console.error(error, 'Error fetching FAQs')
        }
      })
    }
  
  }