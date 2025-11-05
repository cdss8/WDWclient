import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ActiveStateService {
 
  //connecting status of all the components in each component page
  private activeIndexSubject = new BehaviorSubject<number | null>(null);
  activeIndex$ = this.activeIndexSubject.asObservable();

  setActiveIndex(index: number | null) {
    this.activeIndexSubject.next(index);
  }

  //Showing/hiding header in certain components
  private showHeaderSubject = new BehaviorSubject<boolean>(true); 
  showHeader$ = this.showHeaderSubject.asObservable();
  
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.updateHeaderVisibility();
      this.updateFooterVisibility();
      this.updateMIVisibility()
    });
  }
  toggleHeaderVisibility() {  //visibility
  const v = this.showHeaderSubject.value;
 this.showHeaderSubject.next(!v);
  }

  updateHeaderVisibility(){ //satus
    const currentRoute = this.router.url;
    switch(currentRoute){
      case '/contact':
      case '/cookies':
      case '/privacy':
      case '/conditions':
        this.showHeaderSubject.next(false);
      break
      default:
        this.showHeaderSubject.next(true);
      break;
    };
  }


   //Showing/hiding footer in certain components
  private showFooterSubject = new BehaviorSubject<boolean>(true); 
    showFooter$ = this.showFooterSubject.asObservable();
   
  toggleFooterVisibility() {  //visibility
    const v = this.showFooterSubject.value;
    this.showFooterSubject.next(!v);
  }
 
  updateFooterVisibility(){ //status
    const currentRoute = this.router.url;
    switch(currentRoute){
      case '/contact':
        this.showFooterSubject.next(false);
      break
      default:
        this.showFooterSubject.next(true);
      break;
    };
  }

  //Showing/hiding Meessage Icon in certain components
  private showMessageIconSubject = new BehaviorSubject<boolean>(true); 
    showMgIcon$ = this.showMessageIconSubject.asObservable();
     
  togglMIVisibility() {  
    const v = this.showMessageIconSubject.value;
    this.showMessageIconSubject.next(!v);
  }
    
  updateMIVisibility(){ 
    const currentRoute = this.router.url;
    switch(currentRoute){
      case '/contact':
        this.showMessageIconSubject.next(false);
      break
        default:
          this.showMessageIconSubject.next(true);
        break;
      };
  }

  //visibility for childs tags
  private currentRoute = new BehaviorSubject<string>('');
  currentRoute$ = this.currentRoute.asObservable();

  isActive(route: string): boolean {
    return this.currentRoute.value.startsWith(route);
  }

  //router link check status
  private menuVisibleSubject = new BehaviorSubject<boolean>(false);
  menuVisible$ = this.menuVisibleSubject.asObservable();

  TMenu(visible: boolean): void {
    this.menuVisibleSubject.next(visible);
  }

}
