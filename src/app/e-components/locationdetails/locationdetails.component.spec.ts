import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationdetailsComponent } from './locationdetails.component';

describe('LocationdetailsComponent', () => {
  let component: LocationdetailsComponent;
  let fixture: ComponentFixture<LocationdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
