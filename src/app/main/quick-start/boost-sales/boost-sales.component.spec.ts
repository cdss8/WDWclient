import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostSalesComponent } from './boost-sales.component';

describe('BoostSalesComponent', () => {
  let component: BoostSalesComponent;
  let fixture: ComponentFixture<BoostSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoostSalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoostSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
