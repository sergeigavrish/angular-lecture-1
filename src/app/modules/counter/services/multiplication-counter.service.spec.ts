import { TestBed } from '@angular/core/testing';

import { MultiplicationCounterService } from './multiplication-counter.service';

describe('MultiplicationCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultiplicationCounterService = TestBed.get(MultiplicationCounterService);
    expect(service).toBeTruthy();
  });
});
