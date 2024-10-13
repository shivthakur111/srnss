import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEventsComponent } from './news-events.component';

describe('NewsEventsComponent', () => {
  let component: NewsEventsComponent;
  let fixture: ComponentFixture<NewsEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsEventsComponent]
    });
    fixture = TestBed.createComponent(NewsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
