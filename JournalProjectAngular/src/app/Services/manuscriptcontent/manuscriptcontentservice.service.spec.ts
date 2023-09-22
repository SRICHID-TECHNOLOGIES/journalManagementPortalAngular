import { TestBed } from '@angular/core/testing';

import { ManuscriptcontentserviceService } from './manuscriptcontentservice.service';

describe('ManuscriptcontentserviceService', () => {
  let service: ManuscriptcontentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManuscriptcontentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
