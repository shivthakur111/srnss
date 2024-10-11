import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusCurriculumComponent } from './syllabus-curriculum.component';

describe('SyllabusCurriculumComponent', () => {
  let component: SyllabusCurriculumComponent;
  let fixture: ComponentFixture<SyllabusCurriculumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SyllabusCurriculumComponent]
    });
    fixture = TestBed.createComponent(SyllabusCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
