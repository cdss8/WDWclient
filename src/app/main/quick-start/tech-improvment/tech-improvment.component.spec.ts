import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechImprovmentComponent } from './tech-improvment.component';

describe('TechImprovmentComponent', () => {
  let component: TechImprovmentComponent;
  let fixture: ComponentFixture<TechImprovmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechImprovmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechImprovmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
