import { TestBed } from '@angular/core/testing';

import { AdditionCounterService } from './addition-counter.service';

describe('AdditionCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdditionCounterService = TestBed.get(AdditionCounterService);
    expect(service).toBeTruthy();
  });
});
