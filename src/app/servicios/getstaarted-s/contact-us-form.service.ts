import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactUsFormService {
  private apiURL = 'http://localhost:8080/api'

  constructor(private http:HttpClient) {}

  submitContactUsForm(form:any):Observable<any>{
    return this.http.post(this.apiURL, form,{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }).pipe(
      catchError(error => {
        // Handle errors here
        console.error('Error submitting form:', error.message);
        return throwError(()=>error); 

      })
    );
  }  
}

