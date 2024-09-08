import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisQuickStartComponent } from './dis-quick-start.component';

describe('DisQuickStartComponent', () => {
  let component: DisQuickStartComponent;
  let fixture: ComponentFixture<DisQuickStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisQuickStartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisQuickStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
