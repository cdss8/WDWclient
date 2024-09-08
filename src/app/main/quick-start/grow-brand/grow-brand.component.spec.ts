import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowBrandComponent } from './grow-brand.component';

describe('GrowBrandComponent', () => {
  let component: GrowBrandComponent;
  let fixture: ComponentFixture<GrowBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowBrandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrowBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
