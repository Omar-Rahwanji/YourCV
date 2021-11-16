import { TestBed } from '@angular/core/testing';

import { AutthorizationGuard } from './autthorization.guard';

describe('AutthorizationGuard', () => {
  let guard: AutthorizationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutthorizationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
