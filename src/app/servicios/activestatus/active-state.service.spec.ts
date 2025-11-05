import { TestBed } from '@angular/core/testing';

import { ActiveStateService } from './active-state.service';

describe('ActiveStateService', () => {
  let service: ActiveStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
