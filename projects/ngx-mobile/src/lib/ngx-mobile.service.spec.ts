import { TestBed } from '@angular/core/testing';

import { NgxMobileService } from './ngx-mobile.service';

describe('NgxMobileService', () => {
  let service: NgxMobileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMobileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
