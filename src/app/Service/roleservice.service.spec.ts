import { TestBed } from '@angular/core/testing';

import { RoleserviceService } from './roleservice.service';

describe('RoleserviceService', () => {
  let service: RoleserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
