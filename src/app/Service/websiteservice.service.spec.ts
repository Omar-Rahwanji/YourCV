import { TestBed } from '@angular/core/testing';

import { WebsiteserviceService } from './websiteservice.service';

describe('WebsiteserviceService', () => {
  let service: WebsiteserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsiteserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
