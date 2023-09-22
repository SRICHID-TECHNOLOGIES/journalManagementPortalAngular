import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuscriptcontentComponent } from './manuscriptcontent.component';

describe('ManuscriptcontentComponent', () => {
  let component: ManuscriptcontentComponent;
  let fixture: ComponentFixture<ManuscriptcontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManuscriptcontentComponent]
    });
    fixture = TestBed.createComponent(ManuscriptcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
