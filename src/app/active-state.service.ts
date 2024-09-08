import { Injectable } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ActiveStateService {
 
  //connecting status of all the header components in each component page
  private activeIndexSubject = new BehaviorSubject<number | null>(null);
  activeIndex$ = this.activeIndexSubject.asObservable();

  setActiveIndex(index: number | null) {
    this.activeIndexSubject.next(index);
  }

//componenets visibility service
  showHeader = false;
  toggleComonenetVisibility() {  
    this.showHeader = !this.showHeader;
  }
  
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.updateComponentVisibility();
    });
  }

  //Component status update
  updateComponentVisibility(){
    const currentRoute = this.router.url;
    switch(currentRoute){
      case '/Contact-Us':
      case '/cookies':
      case '/privacy':
      case '/conditions':
        this.showHeader = false;
      break
      default:
        this.showHeader = true;
      break;
    };
  }

  //visibility for childs tags
  private currentRoute = new BehaviorSubject<string>('');
  currentRoute$ = this.currentRoute.asObservable();

  isActive(route: string): boolean {
    return this.currentRoute.value.startsWith(route);
  }

  //rouuter link check status
  private menuVisibleSubject = new BehaviorSubject<boolean>(false);
  menuVisible$ = this.menuVisibleSubject.asObservable();

  TMenu(visible: boolean): void {
    this.menuVisibleSubject.next(visible);
  }
}
