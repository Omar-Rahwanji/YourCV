import { TestBed } from '@angular/core/testing';

import { DashboardCustomerService } from './dashboard-customer.service';

describe('DashboardCustomerService', () => {
  let service: DashboardCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
