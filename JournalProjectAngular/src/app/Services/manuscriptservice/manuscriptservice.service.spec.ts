import { TestBed } from '@angular/core/testing';

import { ManuscriptserviceService } from './manuscriptservice.service';

describe('ManuscriptserviceService', () => {
  let service: ManuscriptserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManuscriptserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
