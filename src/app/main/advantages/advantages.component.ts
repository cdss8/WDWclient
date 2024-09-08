import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-advantages',
  standalone: true,
  imports: [RouterModule, CommonModule, NgbTooltipModule],
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.css',
  host: { class: 'd-block' },
})


export class AdvantagesComponent {
  tooltipText: string = '';
  isVisible: boolean = true;
  tooltipPosition = { top: '0', left: '0'};

  showTooltip(event: MouseEvent, countryName: string) {
    this.tooltipText = countryName;
    this.isVisible = true;
    this.tooltipPosition.top = `${event.clientY + 0}px`;
    this.tooltipPosition.left = `${event.clientX + 0}px`;
    console.log('Tooltip shown for:', countryName);

    //changing the tooltip position
    /*
    const tooltipWidth = 0; 
    const tooltipHeight = 0;  
    // Adjust for right edge overflow
    if (event.clientX + tooltipWidth > window.innerWidth) {
      this.tooltipPosition.left = `${event.clientX - tooltipWidth - 10}px`; // Position to the left
    }

    // Adjust for bottom edge overflow
    if (event.clientY + tooltipHeight > window.innerHeight) {
      this.tooltipPosition.top = `${event.clientY - tooltipHeight - 10}px`; // Position above
    }*/
}

hideTooltip() {
    this.isVisible = false;
    console.log('Tooltip hidden');
}
}
