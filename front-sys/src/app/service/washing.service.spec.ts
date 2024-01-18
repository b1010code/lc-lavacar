import { TestBed } from '@angular/core/testing';

import { WashingService } from './washing.service';

describe('WashingService', () => {
  let service: WashingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WashingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
