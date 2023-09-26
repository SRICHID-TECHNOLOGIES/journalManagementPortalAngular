import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorindividualsubmissionsComponent } from './authorindividualsubmissions.component';

describe('AuthorindividualsubmissionsComponent', () => {
  let component: AuthorindividualsubmissionsComponent;
  let fixture: ComponentFixture<AuthorindividualsubmissionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorindividualsubmissionsComponent]
    });
    fixture = TestBed.createComponent(AuthorindividualsubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
