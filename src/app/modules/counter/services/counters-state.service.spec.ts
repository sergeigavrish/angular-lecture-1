import { TestBed } from '@angular/core/testing';

import { CountersStateService } from './counters-state.service';

describe('CountersStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountersStateService = TestBed.get(CountersStateService);
    expect(service).toBeTruthy();
  });
});
