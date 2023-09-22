import { TestBed } from '@angular/core/testing';

import { SubjectcontentService } from './subjectcontent.service';

describe('SubjectcontentService', () => {
  let service: SubjectcontentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectcontentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
