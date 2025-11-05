import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-podcast',
  standalone: true,
  imports: [ RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './podcast.component.html',
  styleUrl: './podcast.component.css'
})
export class PodcastComponent implements OnInit {
    newsLetter:FormGroup;
    success=false;

    constructor(){
      this.newsLetter = new FormGroup ({
        email:new FormControl('', [Validators.required, Validators.email])
      })
    }

    onSubmit() {
      if (this.newsLetter && this.newsLetter.valid) {  
        const value = this.newsLetter.value;
        console.log('podcaster', value);
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 5000);
        this.newsLetter.reset();
        
      } else {
        this.newsLetter?.markAllAsTouched();  
      }
    }
    
    ngOnInit(): void {
      window.scrollTo(0, 0);
    }
}
