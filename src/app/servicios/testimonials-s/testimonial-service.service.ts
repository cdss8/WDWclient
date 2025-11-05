import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Testimonials{
  img:string;
  review:string;
  name:string;
  role:string;
  rating?:number;
}

@Injectable({
  providedIn: 'root'
})
export class TestimonialServiceService {
  private faqApiUrl = 'http://localhost:8080/testimonials';

  constructor(private http:HttpClient){}

  getReviews():Observable<Testimonials[]>{
    return this.http.get<Testimonials[]>(this.faqApiUrl);
  }
}
