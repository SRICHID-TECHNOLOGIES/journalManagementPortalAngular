import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuscriptSubmissionComponent } from './manuscript-submission.component';

describe('ManuscriptSubmissionComponent', () => {
  let component: ManuscriptSubmissionComponent;
  let fixture: ComponentFixture<ManuscriptSubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManuscriptSubmissionComponent]
    });
    fixture = TestBed.createComponent(ManuscriptSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
