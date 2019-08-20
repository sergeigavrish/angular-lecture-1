import { TestBed } from '@angular/core/testing';

import { CounterRemoteService } from './counter-remote.service';

describe('CounterRemoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CounterRemoteService = TestBed.get(CounterRemoteService);
    expect(service).toBeTruthy();
  });
});
