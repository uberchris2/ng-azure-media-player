import { TestBed } from '@angular/core/testing';

import { NgAmpService } from './ng-amp.service';

describe('NgAmpService', () => {
  let service: NgAmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgAmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
