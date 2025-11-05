import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export interface FAQ {
  id:number;
  question:string;
  answer:string;
  isOpen:boolean;
}


@Injectable({
  providedIn: 'root'
})
export class FaqService {
  private faqApiUrl = 'http://localhost:8080/faq';

  constructor(private http:HttpClient){}

  getFAQs():Observable<FAQ[]>{
    return this.http.get<FAQ[]>(this.faqApiUrl);
  }
}