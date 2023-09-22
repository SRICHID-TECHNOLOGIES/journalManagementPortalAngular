import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectcontentComponent } from './subjectcontent.component';

describe('SubjectcontentComponent', () => {
  let component: SubjectcontentComponent;
  let fixture: ComponentFixture<SubjectcontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectcontentComponent]
    });
    fixture = TestBed.createComponent(SubjectcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
